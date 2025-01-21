<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-indigo-500 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center text-pink-500">
        {{ $t("upload_your_cv") }}
      </h2>
      <div
        @dragover.prevent="dragover"
        @dragleave.prevent="dragleave"
        @drop.prevent="drop"
        :class="{
          'border-2 border-dashed border-blue-500 bg-blue-50': isDragging,
          'border-2 border-dashed border-gray-300': !isDragging,
        }"
        class="p-6 rounded-lg text-center cursor-pointer"
      >
        <input
          type="file"
          ref="fileInput"
          @change="onFileChange"
          class="hidden"
          accept=".pdf,application/pdf"
        />
        <p v-if="!file" class="text-orange-500">
          {{ $t("dragdropcv") }}
          <span class="text-teal-400 underline" @click="triggerFileInput">{{
            $t("browse")
          }}</span>
        </p>
        <p v-else class="text-green-400 font-semibold">
          {{ file.name }} ({{ fileSize }})
        </p>
      </div>
      <button
        v-if="file"
        @click="uploadFile"
        class="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Upload CV
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
  middleware: "auth",
});
import { ref } from "vue";
const { $toast } = useNuxtApp();
const router = useRouter();
const file = ref(null);
const fileSize = ref("");
const isDragging = ref(false);
const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const onFileChange = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile && selectedFile.type === "application/pdf") {
    file.value = selectedFile;
    fileSize.value = formatFileSize(selectedFile.size);
  } else {
    file.value = null;
    fileSize.value = "";
    $toast.error("Please upload a valid PDF file.");
  }
};

const dragover = () => {
  isDragging.value = true;
};

const dragleave = () => {
  isDragging.value = false;
};

const drop = (event) => {
  isDragging.value = false;
  const droppedFile = event.dataTransfer.files[0];
  if (droppedFile && droppedFile.type === "application/pdf") {
    file.value = droppedFile;
    fileSize.value = formatFileSize(droppedFile.size);
  } else {
    file.value = null;
    fileSize.value = "";
    $toast.error("Please upload a valid PDF file.");
  }
};

const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const uploadFile = async () => {
  if (file.value) {
    const formData = new FormData();
    formData.append("file", file.value);

    try {
      const response = await $fetch("/api/upload-cv", {
        method: "POST",
        body: formData,
      });
      if (response.status === 200) {
        $toast.success(response.message);
      } else {
        $toast.error(response.message);
      }
    } catch (error) {
      $toast.error(error);
    } finally {
      router.push("/");
    }
  }
};
</script>
