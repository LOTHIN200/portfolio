<template>
  <div
    v-if="isOpen"
    class="shadow-2xl fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50 rounded-lg"
  >
    <div
      class="max-w-screen-lg m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1"
    >
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <h2 class="text-2xl font-extrabold text-center mb-4">{{ $t(title) }}</h2>

        <form @submit.prevent="handleSubmit">
          <div v-for="field in fields" :key="field.id" class="mb-4">
            <label :for="field.id" class="block text-sm">{{ $t(field.label) }}</label>

            <!-- Conditionally render file input for file type -->
            <div
              v-if="field.type === 'file'"
              class="rounded-md border border-indigo-500 bg-gray-50 p-4 shadow-md mb-4 flex flex-col justify-center items-center"
            >
              <label for="upload" class="flex flex-col items-center gap-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 fill-white stroke-indigo-500"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span class="text-gray-600 font-medium">Upload file</span>
              </label>
              <input id="photo" type="file" accept="image/*" required class="hidden" />
            </div>

            <!-- Render other input fields for non-file types -->
            <div v-else>
              <input
                v-model="field.value"
                :type="field.type"
                :id="field.id"
                class="w-full px-3 py-2 border border-gray-300 rounded-md"
                :placeholder="$t(field.placeholder)"
              />
            </div>
          </div>

          <div class="flex justify-between gap-4">
            <button
              type="button"
              @click="closeModal"
              class="w-full bg-cyan-500 shadow-lg shadow-cyan-500/50 font-bold py-3 rounded-lg bg-gray-400 text-white"
            >
              {{ $t("cancel") }}
            </button>
            <button
              type="submit"
              class="w-full bg-blue-500 shadow-lg shadow-blue-500/50 font-bold py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-700 transition duration-300"
            >
              {{ $t(submitButtonText) }}
            </button>
          </div>
        </form>
        <div class="my-6 text-center">
          <div
            class="leading-none inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
          ></div>
        </div>
        <button
          type="button"
          @click="closeModal"
          class="absolute top-0 right-0 p-2 text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="flex-1 bg-indigo-100 text-center hidden lg:flex"
        style="
          background-image: url('/images/authbackground.webp');
          background-size: cover;
        "
      ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  title: String,
  fields: Array,
  submitButtonText: String,
});

const emit = defineEmits(["update:isOpen", "submit"]);

const handleSubmit = () => {
  emit("submit");
  closeModal();
};

const closeModal = () => {
  emit("update:isOpen", false);
};
</script>

<style scoped>
/* Scoped styles for theme-based modal customization */
</style>
