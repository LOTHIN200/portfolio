<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <div>
    <!-- <ThreeScene /> -->
    <SpeedInsights />
    <AppParticle />
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
