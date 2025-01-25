<template>
  <button
    v-if="showButton"
    @click="scrollToTop"
    class="scroll-to-top"
    :style="{ borderColor: borderColor }"
    :class="{ show: showButton }"
  >
    ↑
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { makeLink } from "~/utils/makeLink";

const { locale, defaultLocale } = useI18n();
const router = useRouter();

const showButton = ref(false);
const borderColor = ref("green");

const handleScroll = () => {
  const heroSection = document.querySelector("#hero");
  if (heroSection) {
    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollPosition > heroHeight) {
      showButton.value = true;
    } else {
      showButton.value = false;
    }

    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    borderColor.value = `hsl(${scrollPercentage * 1.2}, 100%, 50%)`;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  makeLink("/", locale.value, defaultLocale, router);
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

<style>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  color: green;
  border-radius: 50%;
  border: 2px solid;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, border-color 0.3s ease-in-out;
  z-index: 999999 !important;
}

.scroll-to-top.show {
  opacity: 1;
}
</style>
