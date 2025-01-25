<script setup lang="ts">
import { onMounted } from "vue";
import type { Container } from "tsparticles-engine";

const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      // value: "#000000",
    },
  },
  particles: {
    number: {
      value: 50, // Fewer particles for a small dot
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#4deeea", // Vibrant teal particles
    },
    shape: {
      type: "triangle", // Use circles for simplicity
    },
    opacity: {
      value: 0.7,
      random: false,
      animation: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: true,
      animation: {
        enable: false,
      },
    },
    links: {
      enable: false, // Disable links for cleaner dot formation
    },
    move: {
      enable: true,
      speed: 1, // Slow speed for smoother animation
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "bounce", // Particles bounce back when they hit the edges
      },
    },
    position: {
      // Define positions for particles to form a dot (.)
      value: [
        // Centralized dot formation
        { x: 50, y: 50 },
        { x: 51, y: 50 },
        { x: 52, y: 50 },
        { x: 53, y: 50 },
        { x: 54, y: 50 },
        { x: 50, y: 51 },
        { x: 51, y: 51 },
        { x: 52, y: 51 },
        { x: 53, y: 51 },
        { x: 54, y: 51 },
        { x: 50, y: 52 },
        { x: 51, y: 52 },
        { x: 52, y: 52 },
        { x: 53, y: 52 },
        { x: 54, y: 52 },
        { x: 50, y: 53 },
        { x: 51, y: 53 },
        { x: 52, y: 53 },
        { x: 53, y: 53 },
        { x: 54, y: 53 },
        { x: 50, y: 54 },
        { x: 51, y: 54 },
        { x: 52, y: 54 },
        { x: 53, y: 54 },
        { x: 54, y: 54 },
      ],
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "repulse", // Repulse particles on hover
      },
      onClick: {
        enable: true,
        mode: "push", // Push particles on click
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        quantity: 4,
      },
    },
  },
  retina_detect: true,
};

let particlesContainer: Container | null = null;

const onLoad = (container: Container) => {
  particlesContainer = container; // Store the container reference
};

onMounted(() => {
  if (particlesContainer) {
    particlesContainer.play(); // Start the animation immediately
  }
});
</script>

<template>
  <div>
    <NuxtParticles id="tsparticles" :options="options" @load="onLoad"> </NuxtParticles>
  </div>
</template>
