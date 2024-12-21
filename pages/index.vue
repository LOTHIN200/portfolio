<script setup lang="ts">
definePageMeta({
  layout: "default",
});
useHead({
  title: "DEV",
  meta: [{ name: "description", content: "Podux Podcast landing page website." }],
  link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
});
</script>
<template>
  <div>
    <AppHeader />
    <SectionsHomeHeroSection />
    <SectionsHomePopularPodcasts />
    <SectionsAboutPodux />
    <SectionsHomeLatestPodcast />
    <SectionsWhyUs />
    <!-- <SectionsCallToAction /> -->
    <AppFooter />
  </div>
</template>
