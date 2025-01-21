<template>
  <button
    v-if="showButton"
    @click="scrollToTop"
    class="scroll-to-top outline-cyan-950"
    :class="{ show: showButton }"
  >
    ↑
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);

const handleScroll = () => {
  const heroSection = document.querySelector("#hero");
  if (heroSection) {
    const heroHeight = heroSection.offsetHeight;

    if (window.scrollY > heroHeight) {
      showButton.value = true;
    } else {
      showButton.value = false;
    }
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  setTimeout(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, 100);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  color: green;
  border-radius: 50%;
  border: 2px solid green;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.scroll-to-top.show {
  opacity: 1;
}
</style>
