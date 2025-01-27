<script setup lang="ts">
import { computed, onMounted, watch, toRaw } from "vue";
import { useParticleOptionsStore } from "~/store/particleOptions";
import type { Container } from "tsparticles-engine";
const particleOptionsStore = useParticleOptionsStore();
const selectedStyle = computed(() => {
  return particleOptionsStore.$state.particleStyles.find(
    (style) => style.id === particleOptionsStore.$state.selectedStyleId
  );
});
const options = computed(() => {
  return selectedStyle.value?.options;
});
let particlesContainer: Container | null = null;

const onLoad = (container: Container) => {
  particlesContainer = container;
};

onMounted(() => {
  if (particlesContainer) {
    particlesContainer.play();
  }
});
watch(selectedStyle, () => {
  if (particlesContainer) {
    particlesContainer.options = options;
    particlesContainer.refresh();
  }
});
</script>

<template>
  <div>
    <NuxtParticles id="tsparticles" :options="options" @load="onLoad" />
  </div>
</template>
