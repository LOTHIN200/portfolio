<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">{{ $t("enter_password") }}</h2>
      <input
        v-model="password"
        type="password"
        placeholder="Enter password"
        class="w-full p-2 border border-gray-300 rounded-lg mb-4"
        @keydown.enter="checkPassword"
      />
      <button
        @click="checkPassword"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
      <p v-if="error" class="text-red-500 mt-4 text-center">{{ error }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import sha256 from "crypto-js/sha256";
import { navigateTo } from "#app";
const { $toast } = useNuxtApp();
const password = ref("");
const error = ref("");
const staticEncryptedPassword =
  "d2e13a9253db158e6c244b10083b38f8abb8ff60cd5585add3135b04a265ee85";

const checkPassword = () => {
  const hashedInput = sha256(password.value.trim()).toString();
  if (hashedInput === staticEncryptedPassword) {
    const isAuthenticated = useCookie("isAuthenticated", { maxAge: 60 * 60 });
    isAuthenticated.value = "true";
    navigateTo("/upload");
  } else {
    $toast.error("Incorrect password. Please try again.");
  }
};
</script>
