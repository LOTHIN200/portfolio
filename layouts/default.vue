<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
import { onMounted, ref } from "vue";

const isSpeedInsightsEnabled = ref(true);

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://lothin-dev.vercel.app/_vercel/speed-insights/script.js";
  script.onerror = () => {
    isSpeedInsightsEnabled.value = false;
  };
  document.head.appendChild(script);
});
</script>

<template>
  <div>
    <UtilityMouseCircle />
    <UtilityAppParticle />
    <SpeedInsights v-if="isSpeedInsightsEnabled" />
    <slot />
  </div>
</template>
