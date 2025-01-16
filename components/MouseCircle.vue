<template>
  <div ref="circle" class="circle" :style="circleStyle">
    <div class="dot"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const circle = ref(null);
const circleX = ref(0);
const circleY = ref(0);
const targetX = ref(0);
const targetY = ref(0);
const circleSize = 40;
const dotSize = 8;
const lerpSpeed = 0.1;

const updateCirclePosition = (event) => {
  targetX.value = event.clientX;
  targetY.value = event.clientY;
};

const lerp = (start, end, speed) => {
  return start + (end - start) * speed;
};

const animate = () => {
  circleX.value = lerp(circleX.value, targetX.value, lerpSpeed);
  circleY.value = lerp(circleY.value, targetY.value, lerpSpeed);

  if (circle.value) {
    circle.value.style.left = `${circleX.value}px`;
    circle.value.style.top = `${circleY.value}px`;
  }

  requestAnimationFrame(animate);
};

onMounted(() => {
  window.addEventListener("mousemove", updateCirclePosition);
  animate();
});

onUnmounted(() => {
  window.removeEventListener("mousemove", updateCirclePosition);
});
</script>

<style scoped>
.circle {
  cursor: none !important;
  position: fixed;
  width: v-bind('circleSize + "px"');
  height: v-bind('circleSize + "px"');
  border: 1px solid rgb(14, 234, 98) !important;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot {
  width: v-bind('dotSize + "px"');
  height: v-bind('dotSize + "px"');
  background-color: #0cc8f2;
  border-radius: 50%;
}
</style>
