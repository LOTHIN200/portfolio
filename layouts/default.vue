<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <div>
    <UtilityMouseCircle />
    <UtilityAppParticle />
    <SpeedInsights />
    <slot />
  </div>
</template>
