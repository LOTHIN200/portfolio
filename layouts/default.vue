<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <div>
    <UtilityNoInternetModal />
    <UtilitySoundPlayer />
    <UtilityMouseCircle />
    <UtilityAppParticle />
    <SpeedInsights />
    <slot />
  </div>
</template>
