<template>
  <div>
    <div class="intro-container" v-if="introStore.showIntro">
      <h1 class="intro-title">Welcome to My Website</h1>
    </div>
    <transition name="fade">
      <NuxtPage v-if="!introStore.showIntro" />
    </transition>
  </div>
</template>

<script setup>
import { useIntroStore } from "~/store/intro";
import { onMounted } from "vue";

const introStore = useIntroStore();

onMounted(() => {
  if (introStore.showIntro) {
    setTimeout(() => {
      introStore.hideIntro();
    }, 3000);
  }
});
</script>

<style scoped>
.intro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34; /* Customize as needed */
  color: white;
  font-size: 2rem;
  animation: fadeInOut 3s ease-in-out;
}

.intro-title {
  animation: zoomIn 1s ease-in-out;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
