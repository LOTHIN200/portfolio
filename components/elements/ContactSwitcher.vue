<script lang="ts" setup>
import { ref } from "vue";
const config = useRuntimeConfig();
const telegramLink = `https://t.me/${config.public.telegramUsername}`;
const linkedinLink = `https://www.linkedin.com/in/${config.public.linkedinUsername}`;
const facebookLink = `https://www.facebook.com/${config.public.facebookUsername}`;
const socialMedia = [
  { name: "Facebook", icon: "📘", url: facebookLink },
  { name: "Telegram", icon: "✈️", url: telegramLink },
  { name: "LinkedIn", icon: "🔗", url: linkedinLink },
];

const isOpen = ref(false);
const selectedPlatform = ref(socialMedia[0]);
function toggleDropdown(event: MouseEvent) {
  event.preventDefault();
  isOpen.value = !isOpen.value;
}
function selectPlatform(platform: { name: string; icon: string; url: string }) {
  selectedPlatform.value = platform;
  isOpen.value = false;
  window.open(platform.url, "_blank");
}
</script>

<template>
  <div class="relative py-2">
    <button
      class="outline-none bg-transparent p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
      @click="toggleDropdown"
    >
      <span>{{ selectedPlatform.icon }}</span>
      <span>{{ selectedPlatform.name }}</span>
    </button>
    <div v-if="isOpen" class="fixed inset-0 z-30" @click="isOpen = false"></div>
    <transition
      enter-active-class="ease-out duration-300"
      enter-from-class="transition transform opacity-0 translate-y-6"
      enter-to-class="transition transform opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 translate-y-6"
    >
      <div
        v-show="isOpen"
        class="absolute border border-box-border shadow-md shadow-box-shadow z-40 top-full right-0 transition-all ease-linear p-2 rounded-xl w-44 bg-box-bg"
      >
        <ul class="flex flex-col">
          <li
            v-for="platform in socialMedia"
            :key="platform.name"
            class="flex select-none cursor-pointer items-center gap-3 px-2 py-2 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-200"
            @click="selectPlatform(platform)"
          >
            <span>{{ platform.icon }}</span>
            <span>{{ platform.name }}</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
