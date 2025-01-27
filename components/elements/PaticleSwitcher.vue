<script lang="ts" setup>
import { ref } from "vue";
import { useParticleOptionsStore } from "~/store/particleOptions";
import type { Container } from "tsparticles-engine";

const particleOptionsStore = useParticleOptionsStore();

const isOpen = ref(false);
const StyleOption = ref(particleOptionsStore.selectedStyle);

function toggleDropdown(event: MouseEvent) {
  event.preventDefault();
  isOpen.value = !isOpen.value;
}

function selectStyle(styleId: string) {
  const particleOptionsStore = useParticleOptionsStore();
  particleOptionsStore.setSelectedStyle(styleId);
  isOpen.value = false;
}
</script>

<template>
  <div>
    <div class="relative py-2">
      <button
        class="outline-none bg-transparent p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
        @click="toggleDropdown"
      >
        <img :src="StyleOption?.avatar" alt="User Avatar" class="w-5 h-5 rounded-full" />
        <span>{{ $t(StyleOption?.name) }}</span>
      </button>
      <div v-if="isOpen" class="fixed inset-0 z-30" @click="isOpen = false"></div>
      <transition
        enter-active-class="ease-out duration-300"
        enter-from-class="transition transform opacity-0 translate-y-6"
        enter-to-class="transition transform opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="transform opacity-100 translate-y-0"
        leave-to-class="transform opacity-0 translate-y-6"
      >
        <div
          v-show="isOpen"
          class="absolute border border-box-border shadow-md shadow-box-shadow z-40 top-full right-0 transition-all ease-linear p-2 rounded-xl w-44 bg-box-bg"
        >
          <ul class="flex flex-col">
            <li
              v-for="style in particleOptionsStore.particleStyles"
              :key="style.id"
              class="flex select-none cursor-pointer items-center gap-3 px-2 py-2 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-200"
              @click="selectStyle(style.id)"
            >
              <img :src="style.avatar" alt="User Avatar" class="w-8 h-8 rounded-full" />
              <span>{{ $t(style.name) }}</span>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
