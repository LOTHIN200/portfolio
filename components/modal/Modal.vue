<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50"
  >
    <div
      class="max-w-screen-lg m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1"
    >
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div class="text-center mb-6">
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
            class="w-32 mx-auto"
            alt="Logo"
          />
        </div>
        <h2 class="text-2xl font-extrabold text-center mb-4">{{ title }}</h2>
        <form @submit.prevent="handleSubmit">
          <div v-for="field in fields" :key="field.id" class="mb-4">
            <label :for="field.id" class="block text-sm">{{ field.label }}</label>
            <input
              v-model="field.value"
              :type="field.type"
              :id="field.id"
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
              :placeholder="field.placeholder"
            />
          </div>
          <div class="flex justify-between gap-4">
            <button
              type="button"
              @click="closeModal"
              class="w-full font-bold py-3 rounded-lg bg-gray-400 text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="w-full font-bold py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-700 transition duration-300"
            >
              {{ submitButtonText }}
            </button>
          </div>
        </form>
        <div class="my-6 text-center">
          <div
            class="leading-none inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
          >
            Or sign up with e-mail
          </div>
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
          background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');
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
/* Scoped styles for modal background and other customizations */
</style>
