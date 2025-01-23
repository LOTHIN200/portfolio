<template>
  <div>
    <div class="intro-container" v-if="showIntro">
      <!-- Terminal-Like Animation -->
      <div class="terminal">
        <div class="terminal-header">
          <span class="circle red"></span>
          <span class="circle yellow"></span>
          <span class="circle green"></span>
        </div>
        <div class="terminal-body">
          <pre><code v-html="animatedCode" /></pre>
        </div>
      </div>
    </div>
    <transition name="fade">
      <slot v-if="!showIntro" />
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Local state for showing/hiding the intro
const showIntro = ref(true);

// Code snippets for the terminal animation
const codeSnippets = [
  "// Create Portfolio 🚀",
  "mkdir project && cd project",
  "npm init nuxt@latest",
  "// Installing dependencies 🔧",
  "npm install",
  "// Firing up the dev server 🌟",
  "npm run dev",
  "// Ready to View ✨",
  "<h1>Welcome, LOTHIN DEV! 💻</h1>",
  "// Empowering ideas with Nuxt 3 ⚡️",
];
const animatedCode = ref("");

let currentIndex = 0;
let charIndex = 0;

// Function to simulate typing animation
const typeCode = () => {
  if (currentIndex < codeSnippets.length) {
    if (charIndex < codeSnippets[currentIndex].length) {
      animatedCode.value += codeSnippets[currentIndex][charIndex];
      charIndex++;
      setTimeout(typeCode, 100); // Delay between characters
    } else {
      animatedCode.value += "\n"; // Add a new line after the snippet
      currentIndex++;
      charIndex = 0; // Reset character index for the next snippet
      setTimeout(typeCode, 300); // Delay before starting the next snippet
    }
  } else {
    setTimeout(() => {
      showIntro.value = false; // Hide the intro after animation completes
    }, 800); // Delay before ending intro
  }
};

// Start the typing animation when the component mounts
onMounted(() => {
  typeCode();
});
</script>

<style scoped>
.intro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e1e2f; /* Terminal-like dark background */
  color: #c8d6e5; /* Subtle light text color */
  font-family: "Courier New", Courier, monospace; /* Monospace for terminal look */
  overflow: hidden;
}

.terminal {
  width: 80%;
  max-width: 800px;
  background: #2c2c38;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.terminal-header {
  display: flex;
  padding: 8px;
  background: #1e1e2f;
  border-radius: 8px 8px 0 0;
}

.circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 4px;
}

.red {
  background-color: #ff5f56;
}
.yellow {
  background-color: #ffbd2e;
}
.green {
  background-color: #27c93f;
}

.terminal-body {
  padding: 20px;
  font-size: 1rem;
  color: #c8d6e5;
  overflow: hidden;
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
