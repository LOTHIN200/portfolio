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
    <AppHeader class="luxy-el" data-speed="1.0" />
    <SectionsHomeHeroSection class="luxy-el" data-speed="1.0" />
    <SectionsHomePopularPodcasts class="luxy-el" data-speed="1.0" />
    <SectionsAboutPodux class="luxy-el" data-speed="1.0" />
    <SectionsHomeLatestPodcast class="luxy-el" data-speed="1.0" />
    <SectionsWhyUs class="luxy-el" data-speed="1.0" />
    <SectionsCallToAction class="luxy-el" data-speed="1.0" />
    <AppFooter />
  </div>
</template>
