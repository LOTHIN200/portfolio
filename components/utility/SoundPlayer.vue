<template>
  <div>
    <div class="fixed top-4 right-4 z-50">
      <button
        @click="toggleSound"
        class="p-3 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
      >
        <svg
          v-if="!isPlaying"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const isPlaying = ref(false);
let soundInstance: any = null;
onMounted(async () => {
  try {
    const soundModule = await import("@pixi/sound");
    soundInstance = soundModule.Sound.from({
      url: "/sounds/lough001.mp3",
      preload: true,
    });
  } catch (error) {
    console.error("Failed to load sound library:", error);
  }
});
const toggleSound = (): void => {
  if (!soundInstance) {
    console.error("Sound is not loaded.");
    return;
  }

  if (isPlaying.value) {
    soundInstance.stop();
  } else {
    soundInstance.play();
  }
  isPlaying.value = !isPlaying.value;
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  margin: 5px;
  cursor: pointer;
}
</style>
