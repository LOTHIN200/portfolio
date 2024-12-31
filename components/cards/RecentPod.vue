<template>
  <div class="w-full relative rounded-2xl overflow-hidden">
    <!-- Cover Image -->
    <nuxt-img
      :src="coverImage"
      alt="Cover image"
      width="2280"
      class="w-full aspect-square object-cover rounded-2xl"
    />
    <!-- Duration Badge -->
    <span class="absolute top-2 right-2 px-2 rounded-full text-sm text-white bg-primary">
      {{ duration }}
    </span>
    <!-- Title and Info -->
    <div
      class="absolute py-2 px-3 md:py-3 md:px-4 bottom-0 h-28 flex flex-col justify-between inset-x-0 bg-gradient-to-t from-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm"
    >
      <h2 class="text-white font-semibold text-sm sm:text-base line-clamp-2">
        {{ title }}
      </h2>
      <div class="pt-2">
        <!-- <NuxtLink
          @click.prevent="openModal"
          class="flex items-center text-white rounded-full p-0.5 pr-2 gap-2 text-sm border border-gray-100/20 w-max cursor-pointer hover:bg-primary"
        >
          <span class="p-1 rounded-full bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-3 h-3"
            >
              <path
                d="M12 4C7 4 3 7.58 3 12s4 8 9 8 9-3.58 9-8-4-8-9-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
          </span>
          {{ $t("details") }}
        </NuxtLink> -->
      </div>
    </div>
  </div>

  <!-- Large Modal -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    @click.self="closeModal"
  >
    <div
      class="relative bg-white rounded-lg overflow-hidden max-w-5xl w-full p-6"
      style="height: 80vh"
    >
      <button class="absolute top-4 right-4 text-black text-2xl" @click="closeModal">
        &times;
      </button>
      <div class="flex flex-col lg:flex-row items-center lg:items-start">
        <!-- Image Section -->
        <nuxt-img
          :src="coverImage"
          alt="Modal Image"
          class="rounded-xl max-w-full lg:max-w-[50%] max-h-[70vh] object-cover border shadow-lg"
        />
        <div class="mt-6 lg:mt-0 lg:ml-2 flex flex-col flex-1 text-gray-700 text-md">
          <p class="text-1xl gap-4">{{ $t(title) }}</p>
          <ul
            class="mt-4 text-gray-700 text-lg leading-relaxed list-disc list-inside overflow-y-auto max-h-[60vh]"
          >
            <li v-for="(item, index) in description" :key="index">
              {{ $t(item) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const { title, description, href, duration, coverImage } = defineProps<{
  title: string;
  description: string[];
  href: string;
  duration: string;
  coverImage: string;
}>();

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>
