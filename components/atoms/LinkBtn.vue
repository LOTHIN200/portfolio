<script lang="ts" setup>
const {
  href,
  variant,
  costumSpanClass = "",
  costumTextColor = "",
  isActive = false,
} = defineProps<{
  href: string;
  variant: "primary" | "primary-outlined" | "secondary" | "secondary-outlined" | "costum";
  costumSpanClass?: string;
  costumTextColor?: string;
  isActive?: boolean; // Add isActive as an optional prop with a default value
}>();

let spanClass: string = "";
let textCl: string = "";
if (variant === "primary") {
  spanClass = "bg-primary border-2 border-transparent";
  textCl = "text-white";
} else if (variant === "primary-outlined") {
  spanClass = "border-2 border-primary";
  textCl = "text-primary";
} else if (variant === "secondary") {
  spanClass = "bg-primary/5";
  textCl = "text-primary";
} else if (variant === "costum") {
  spanClass = costumSpanClass;
  textCl = costumTextColor;
}
</script>

<template>
  <NuxtLink
    :to="href"
    class="px-6 md:px-7 py-3 rounded-full relative group cursor-pointer btn--shockwave"
    :class="{ 'is-active': isActive }"
  >
    <span
      v-if="variant !== 'costum'"
      class="absolute inset-0 rounded-full group-hover:scale-105 origin-center transition-all ease-in-out"
      :class="spanClass"
    ></span>
    <span class="relative flex items-center justify-center" :class="textCl">
      <slot />
    </span>
  </NuxtLink>
</template>

<style scoped>
/* Add these animations to your styles */
@keyframes shockwaveJump {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1);
  }
  50% {
    transform: scale(1);
  }
  55% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes shockwave {
  0% {
    transform: scale(1);
    box-shadow: 0 0 2px rgba(0, 255, 166, 0.94), inset 0 0 1px rgba(4, 247, 166, 0.94);
  }
  95% {
    box-shadow: 0 0 10px transparent, inset 0 0 20px transparent;
  }
  100% {
    transform: scale(1.5);
  }
}

.btn--shockwave.is-active {
  animation: shockwaveJump 1s ease-out infinite;
}

.btn--shockwave.is-active::after,
.btn--shockwave.is-active::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  animation: shockwave 1s ease-out infinite;
  border-radius: inherit; /* Use the same radius as the button */
  z-index: 1;
}

.btn--shockwave.is-active::after {
  animation-delay: 0.65s;
}

.btn--shockwave.is-active::before {
  animation-delay: 0.5s;
}
</style>
