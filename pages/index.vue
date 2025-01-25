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
    <SectionsHomeProjectExperiences class="luxy-el" id="experience" />
    <SectionsAboutEducations class="luxy-el" id="education" />
    <SectionsHomeOtherExperiences class="luxy-el" id="others" />
    <SectionsEducationOpinion class="luxy-el" id="opinion" />
    <SectionsContactMethods class="luxy-el" id="contact" />
    <AppFooter class="luxy-el" id="skill_educated" />
  </div>
  <UtilityScrollToTop />
</template>
