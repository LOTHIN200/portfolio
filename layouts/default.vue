<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <div>
    <SpeedInsights />
    <AppParticle />
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
