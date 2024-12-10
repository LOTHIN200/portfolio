<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "DEV",
  ogTitle: "Welcome to My Developer Portfolio",
  description:
    "Explore my personal portfolio to discover my web development projects, skills, and achievements. Let's build something amazing together.",
  ogDescription:
    "Check out my web development portfolio showcasing cutting-edge projects and technical expertise. Let's create something great together!",
  ogImage: "./public/logo.png",
  twitterCard: "LOTHIN",
});
</script>
