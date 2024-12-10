<template>
  <div id="app">
    <div v-if="showSlider" ref="threeSlider" class="three-slider"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";

const showSlider = ref(true); // State to toggle slider visibility
const threeSlider = ref(null);

onMounted(() => {
  // Three.js Setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);
  threeSlider.value.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;

  // Animation Loop
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();

  // End Slider After 5 Seconds
  setTimeout(() => {
    showSlider.value = false; // Hide the slider
    renderer.dispose(); // Cleanup Three.js resources
  }, 5000); // Adjust the duration as needed
});
</script>

<style></style>
