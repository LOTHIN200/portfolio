<template>
  <div>
    <div class="fixed top-4 right-4 z-50">
      <AtomsLinkBtn
        @click="toggleSound"
        href="#"
        variant="costum"
        costum-span-class="px-6 md:px-7 hover:bg-primary/10"
        costum-text-color="text-primary"
      >
        <div class="flex items-center gap-3">
          <span class="p-2 rounded-full border border-primary">
            <svg
              v-if="!isPlaying"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-3 h-3"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-if="isPlaying"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-3 h-3"
            >
              <path
                fill-rule="evenodd"
                d="M6 5h2v14H6V5zm10 0h2v14h-2V5z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </AtomsLinkBtn>
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
