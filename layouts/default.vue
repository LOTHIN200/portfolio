<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <div>
    <!-- <UtilityIntro /> -->
    <!-- <UtilityNoInternetModal /> -->
    <UtilitySoundPlayer />
    <UtilityMouseCircle />
    <!-- <UtilityAppParticle /> -->
    <UtilityAppParticleDot />
    <!-- <UtilityAppParticleHeart /> -->
    <SpeedInsights />
    <slot />
  </div>
</template>
