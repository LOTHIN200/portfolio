<script setup lang="ts">
import { onMounted } from "vue";
const { $sr } = useNuxtApp();
definePageMeta({
  layout: "default",
});

useHead({
  title: "DEV",
  meta: [{ name: "description", content: "Podux Podcast landing page website." }],
  link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
});

onMounted(() => {
  $sr.reveal(".reveal", {
    interval: 200,
  });
});
</script>

<template>
  <div id="luxy">
    <AppHeader class="luxy-el reveal" />
    <SectionsHomeHeroSection class="luxy-el reveal" id="hero" />
    <SectionsHomePopularPodcasts class="luxy-el reveal" />
    <SectionsAboutPodux class="luxy-el" id="education" />
    <SectionsHomeLatestPodcast class="luxy-el reveal" />
    <SectionsWhyUs class="luxy-el" />
    <SectionsCallToAction class="luxy-el reveal" id="contact" />
    <AppFooter class="luxy-el" />
  </div>
  <UtilityScrollToTop />
</template>
