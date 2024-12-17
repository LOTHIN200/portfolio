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
      // value: "#000000", // Clean white background
    },
  },
  particles: {
    number: {
      value: 140,
      density: {
        enable: true,
        area: 1000, // Adjust particle spread
      },
    },
    color: {
      value: "#4deeea", // Vibrant teal particles
    },
    shape: {
      type: ["circle", "polygon"], // Mixed shapes for variety
      polygon: {
        nb_sides: 12, // Polygons with 12 sides
      },
    },
    opacity: {
      value: 0.5, // Semi-transparent particles
      random: false,
      animation: {
        enable: false, // Static opacity
      },
    },
    size: {
      value: 3,
      random: true, // Slight size variations
      animation: {
        enable: false,
      },
    },
    links: {
      enable: true,
      distance: 300, // Larger link distance
      color: "#4deeea",
      opacity: 0.3, // Subtle link opacity
      width: 1, // Thin link lines
    },
    move: {
      enable: true,
      speed: 6, // Moderate speed
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "out", // Particles reappear after moving out of bounds
      },
    },
  },
  interactivity: {
    detect_on: "canvas", // Detect interactions on the canvas
    events: {
      onHover: {
        enable: true,
        mode: "grab", // Create a connection on hover
      },
      onClick: {
        enable: true, // No click-based interactions
      },
      resize: true, // Handle window resizing
    },
    modes: {
      grab: {
        distance: 400, // Larger hover range
        links: {
          opacity: 1, // Strong link opacity on hover
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        quantity: 4, // Adds 4 particles if enabled
      },
      remove: {
        quantity: 2, // Removes 2 particles if enabled
      },
    },
  },
  retina_detect: true, // Optimize for retina screens
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
