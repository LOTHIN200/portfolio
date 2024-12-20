<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <div>
    <AppParticle />
    <SpeedInsights />
    <!-- <AppParticle /> -->
    <slot />
  </div>
</template>
