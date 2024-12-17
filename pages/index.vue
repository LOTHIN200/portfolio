<script setup lang="ts">
definePageMeta({
  layout: "intro",
});
useHead({
  title: "DEV",
  meta: [{ name: "description", content: "Podux Podcast landing page website." }],
  link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
});
</script>
<template>
  <div>
    <AppParticle />
    <SectionsHomeHeroSection />
    <!-- <SectionsHomeLatestPodcast /> -->
    <SectionsHomePopularPodcasts />
    <SectionsAboutPodux />
    <SectionsWhyUs />
    <SectionsCallToAction />
  </div>
</template>
