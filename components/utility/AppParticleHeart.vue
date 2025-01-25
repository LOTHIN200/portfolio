<script setup lang="ts">
import { onMounted } from "vue";
import type { Container } from "tsparticles-engine";

// const options = {
//   fullScreen: {
//     enable: true,
//     zIndex: -1,
//   },
//   background: {
//     color: "#000000", // Black background for a space-like effect
//   },
//   particles: {
//     number: {
//       value: 100, // More particles for a dense field
//       density: {
//         enable: true,
//         area: 800,
//       },
//     },
//     color: {
//       value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"], // Vibrant colors
//     },
//     shape: {
//       type: "circle", // Simple circles for particles
//     },
//     opacity: {
//       value: 0.8,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 1,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 3,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 2,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     links: {
//       enable: true, // Enable links for a connected field
//       distance: 100,
//       color: "#FFFFFF",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 2, // Slower movement for a stable field
//       direction: "none",
//       random: true,
//       straight: false,
//       outModes: {
//         default: "bounce",
//       },
//       attract: {
//         enable: true,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onHover: {
//         enable: true,
//         mode: "attract", // Attract particles to the cursor
//       },
//       onClick: {
//         enable: true,
//         mode: "push", // Push particles on click
//       },
//       resize: true,
//     },
//     modes: {
//       attract: {
//         distance: 200,
//         duration: 0.4,
//       },
//       push: {
//         quantity: 4,
//       },
//     },
//   },
//   retina_detect: true,
// };
// const options = {
//   fullScreen: {
//     enable: true,
//     zIndex: -1,
//   },
//   background: {
//     color: "#000000", // Black background for contrast
//   },
//   particles: {
//     number: {
//       value: 200, // More particles for a dense vortex
//       density: {
//         enable: true,
//         area: 800,
//       },
//     },
//     color: {
//       value: [
//         "#FF0000",
//         "#FF7F00",
//         "#FFFF00",
//         "#00FF00",
//         "#0000FF",
//         "#4B0082",
//         "#8F00FF",
//       ], // Rainbow colors
//     },
//     shape: {
//       type: "circle", // Simple circles for particles
//     },
//     opacity: {
//       value: 0.8,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 1,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 3,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 2,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     links: {
//       enable: true, // Enable links for a connected vortex
//       distance: 100,
//       color: "#FFFFFF",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 3, // Faster movement for a swirling effect
//       direction: "none",
//       random: true,
//       straight: false,
//       outModes: {
//         default: "out",
//       },
//       attract: {
//         enable: true,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onHover: {
//         enable: true,
//         mode: "repulse", // Repulse particles on hover
//       },
//       onClick: {
//         enable: true,
//         mode: "push", // Push particles on click
//       },
//       resize: true,
//     },
//     modes: {
//       repulse: {
//         distance: 100,
//         duration: 0.4,
//       },
//       push: {
//         quantity: 4,
//       },
//     },
//   },
//   retina_detect: true,
// };
// const options = {
//   fullScreen: {
//     enable: true,
//     zIndex: -1,
//   },
//   background: {
//     color: "#000000", // Black background for a cyberpunk city
//   },
//   particles: {
//     number: {
//       value: 150, // More particles for a dense city
//       density: {
//         enable: true,
//         area: 800,
//       },
//     },
//     color: {
//       value: ["#FF00FF", "#00FFFF", "#FF0000", "#00FF00"], // Neon colors
//     },
//     shape: {
//       type: "circle", // Simple circles for particles
//     },
//     opacity: {
//       value: 0.8,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 1,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 4,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 2,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     links: {
//       enable: true, // Enable links for a connected city
//       distance: 150,
//       color: "#FFFFFF",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 2, // Slower movement for a stable city
//       direction: "none",
//       random: true,
//       straight: false,
//       outModes: {
//         default: "bounce",
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onHover: {
//         enable: true,
//         mode: "repulse", // Repulse particles on hover
//       },
//       onClick: {
//         enable: true,
//         mode: "push", // Push particles on click
//       },
//       resize: true,
//     },
//     modes: {
//       repulse: {
//         distance: 100,
//         duration: 0.4,
//       },
//       push: {
//         quantity: 4,
//       },
//     },
//   },
//   retina_detect: true,
// };
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
// const options = {
//   fullScreen: {
//     enable: true,
//     zIndex: -1,
//   },
//   background: {
//     color: "#000000", // Black background for an electric storm
//   },
//   particles: {
//     number: {
//       value: 150, // More particles for a dense storm
//       density: {
//         enable: true,
//         area: 800,
//       },
//     },
//     color: {
//       value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"], // Vibrant colors
//     },
//     shape: {
//       type: "circle", // Simple circles for particles
//     },
//     opacity: {
//       value: 0.8,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 1,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 3,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 2,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     links: {
//       enable: true, // Enable links for an electric storm
//       distance: 100,
//       color: "#FFFFFF",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 5, // Faster movement for an electric storm
//       direction: "none",
//       random: true,
//       straight: false,
//       outModes: {
//         default: "out",
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onHover: {
//         enable: true,
//         mode: "repulse", // Repulse particles on hover
//       },
//       onClick: {
//         enable: true,
//         mode: "push", // Push particles on click
//       },
//       resize: true,
//     },
//     modes: {
//       repulse: {
//         distance: 100,
//         duration: 0.4,
//       },
//       push: {
//         quantity: 4,
//       },
//     },
//   },
//   retina_detect: true,
// };
// const options = {
//   fullScreen: {
//     enable: true,
//     zIndex: -1,
//   },
//   background: {
//     // color: "#000000", // Black background for abstract waves
//   },
//   particles: {
//     number: {
//       value: 150, // More particles for a dense wave
//       density: {
//         enable: true,
//         area: 800,
//       },
//     },
//     color: {
//       value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"], // Vibrant colors
//     },
//     shape: {
//       type: "circle", // Simple circles for particles
//     },
//     opacity: {
//       value: 0.8,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 1,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 3,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 2,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     links: {
//       enable: true, // Enable links for a connected wave
//       distance: 100,
//       color: "#FFFFFF",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 3, // Faster movement for a wave effect
//       direction: "none",
//       random: true,
//       straight: false,
//       outModes: {
//         default: "out",
//       },
//       attract: {
//         enable: true,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onHover: {
//         enable: true,
//         mode: "repulse", // Repulse particles on hover
//       },
//       onClick: {
//         enable: true,
//         mode: "push", // Push particles on click
//       },
//       resize: true,
//     },
//     modes: {
//       repulse: {
//         distance: 100,
//         duration: 0.4,
//       },
//       push: {
//         quantity: 4,
//       },
//     },
//   },
//   retina_detect: true,
// };

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
