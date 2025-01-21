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
  <div id="luxy">
    <AppHeader class="luxy-el" />
    <SectionsHomeHeroSection class="luxy-el" />
    <SectionsHomePopularPodcasts class="luxy-el" />
    <SectionsAboutPodux class="luxy-el" />
    <SectionsHomeLatestPodcast class="luxy-el" />
    <SectionsWhyUs class="luxy-el" />
    <SectionsCallToAction class="luxy-el" />
    <AppFooter class="luxy-el" />
  </div>
</template>
