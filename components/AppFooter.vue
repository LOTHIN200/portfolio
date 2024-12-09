<template>
  <footer
    class="pt-20 bg-gray-100 dark:bg-body border-t border-gray-200 dark:border-gray-100/20"
  >
    <AtomsContainer class-name="pb-10">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 gap-y-10">
        <div class="col-span-2 md:col-span-4 lg:col-span-2">
          <NuxtLink to="/" class="flex items-center gap-2">
            <span class="flex">
              <span class="w-3 h-6 rounded-l-full flex bg-primary"></span>
              <span class="w-3 h-6 rounded-r-full flex bg-[#f88fc2] mt-2"></span>
            </span>
            <span class="text-xl font-bold text-gray-700 dark:text-white"
              >SR7 CHUSHIN</span
            >
          </NuxtLink>

          <p class="text-gray-600 dark:text-gray-300 pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nemo,
            veritatis
          </p>
        </div>

        <BlocksFooterNavBlock title="Enterprise" :links="quickLinks" />
        <BlocksFooterNavBlock title="Ressources" :links="ressourcesLinks" />
        <BlocksFooterNavBlock title="Support" :links="supportLinks" />
        <BlocksFooterNavBlock title="Enterprise" :links="quickLinks" />
      </div>
    </AtomsContainer>
  </footer>
</template>

<script lang="ts" setup>
const quickLinks = [
  {
    href: "#",
    text: "About us",
  },
  {
    href: "#",
    text: "News",
  },
  {
    href: "#",
    text: "Team",
  },
  {
    href: "#",
    text: "Solution",
  },
];
const ressourcesLinks = [
  {
    href: "#",
    text: "Developpers",
  },
  {
    href: "#",
    text: "Integration",
  },
  {
    href: "#",
    text: "Pricing",
  },
];

const supportLinks = [
  {
    href: "#",
    text: "Contact-us",
  },
  {
    href: "#",
    text: "Licence",
  },
  {
    href: "#",
    text: "Terms",
  },
  {
    href: "#",
    text: "FAQ",
  },
];
</script>
