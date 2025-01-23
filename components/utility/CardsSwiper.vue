<template>
  <div class="swiper-wrapper">
    <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <img :src="slide.imageUrl" :alt="`Slide ${slide.id}`" class="slide-image" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import required modules
import { EffectCards } from "swiper/modules";

// Define props
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

// Setup modules
const modules = [EffectCards];
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  overflow: hidden; /* Ensure images don't overflow the slide */
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the slide */
  border-radius: 18px; /* Match the slide border radius */
}
</style>
