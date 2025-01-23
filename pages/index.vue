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
    <AppHeader class="luxy-el" />
    <SectionsHomeHeroSection class="luxy-el" id="hero" />
    <SectionsHomeProjectExperiences class="luxy-el" />
    <SectionsAboutEducations class="luxy-el" id="education" />
    <SectionsHomeOtherExperiences class="luxy-el" />
    <SectionsEducationOpinion class="luxy-el" />
    <SectionsContactMethods class="luxy-el" id="contact" />
    <AppFooter class="luxy-el" />
  </div>
  <UtilityScrollToTop />
</template>
