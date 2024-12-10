<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useSwitchLocalePath } from "#imports";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const currentLocale = computed(() => locale.value);

// Dropdown state
const isLocaleDropdownOpen = useState("isLocaleDropdownOpen", () => false);

function toggleLocaleDropdown(event: MouseEvent) {
  event.preventDefault();
  isLocaleDropdownOpen.value = !isLocaleDropdownOpen.value;
}
</script>

<template>
  <div class="relative py-2">
    <!-- Dropdown Button -->
    <button
      class="outline-none bg-transparent p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
      @click="toggleLocaleDropdown"
    >
      <span>
        {{ currentLocale }}
      </span>
    </button>

    <!-- Backdrop -->
    <div
      v-if="isLocaleDropdownOpen"
      class="fixed inset-0 z-30"
      @click="isLocaleDropdownOpen = false"
    ></div>

    <!-- Dropdown Menu -->
    <transition
      enter-active-class="ease-out duration-300"
      enter-from-class="transition transform opacity-0 translate-y-6"
      enter-to-class="transition transform opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 translate-y-6"
    >
      <div
        v-show="isLocaleDropdownOpen"
        class="absolute border border-box-border shadow-md shadow-box-shadow z-40 top-full right-0 transition-all ease-linear p-2 rounded-xl w-24 bg-box-bg"
      >
        <ul class="flex flex-col" @click="isLocaleDropdownOpen = false">
          <li
            v-for="locale in availableLocales"
            :key="locale.code"
            class="flex select-none cursor-pointer items-center gap-3 px-2 py-2 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-200"
            :class="{ active: currentLocale === locale.code }"
            @click="$router.push(switchLocalePath(locale.code))"
          >
            <span>
              {{ locale.name }}
            </span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
