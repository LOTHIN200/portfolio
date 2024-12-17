<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <div>
    <SpeedInsights />

    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
