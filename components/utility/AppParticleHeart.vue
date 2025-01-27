<script setup lang="ts">
import { onMounted } from "vue";
import type { Container } from "tsparticles-engine";


//ditgit binary
const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    // color: "#000000", // Black background for Matrix effect
  },
  particles: {
    number: {
      value: 200, // More particles for a dense rain
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#00FF00", // Green color for Matrix code
    },
    shape: {
      type: "char", // Use characters for Matrix code
      options: {
        char: {
          value: ["0", "1"], // Binary characters
        },
      },
    },
    opacity: {
      value: 0.8,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.1,
        sync: false,
      },
    },
    links: {
      enable: false, // No links for Matrix rain
    },
    move: {
      enable: true,
      speed: 5, // Faster movement for a rain effect
      direction: "bottom", // Particles fall downwards
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
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
