<template>
  <footer
    class="pt-20 bg-gray-100 dark:bg-body border-t border-gray-200 dark:border-gray-100/20"
  >
    <AtomsContainer class-name="pb-10">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 gap-y-4">
        <div class="col-span-2 md:col-span-4 lg:col-span-3">
          <NuxtLink to="/" class="flex items-center gap-2">
            <span class="flex">
              <span class="w-3 h-6 rounded-l-full flex bg-primary"></span>
              <span class="w-3 h-6 rounded-r-full flex bg-[#f88fc2] mt-2"></span>
            </span>
            <span class="text-xl font-bold text-gray-700 dark:text-white">{{
              $t("developer")
            }}</span>
          </NuxtLink>

          <p class="text-gray-600 dark:text-gray-300 pt-6">
            {{ $t("footer_details") }}
          </p>
        </div>
        <BlocksFooterNavBlock :title="$t('basic_skills')" :links="BasicSkill" />
        <BlocksFooterNavBlock :title="$t('database_skills')" :links="DBSkill" />
        <BlocksFooterNavBlock :title="$t('framework_skills')" :links="FrameworkSkill" />
        <BlocksFooterNavBlock :title="$t('core_skill')" :links="CoreSkill" />
        <BlocksFooterNavBlock :title="$t('others')" :links="OtherSkill" />
      </div>
    </AtomsContainer>
  </footer>
</template>

<script lang="ts" setup>
const BasicSkill = [
  {
    href: "#",
    text: "HTML",
  },
  {
    href: "#",
    text: "CSS/SCSS",
  },
  {
    href: "#",
    text: "JavaScript",
  },
  {
    href: "#",
    text: "Bootstrap",
  },
];
const DBSkill = [
  {
    href: "#",
    text: "MySQL",
  },
  {
    href: "#",
    text: "Postgres",
  },
  {
    href: "#",
    text: "Oracle",
  },
];
const FrameworkSkill = [
  {
    href: "#",
    text: "Vue && Nuxt",
  },
  {
    href: "#",
    text: "Angular",
  },
];
const CoreSkill = [
  {
    href: "#",
    text: "PHP",
  },
  {
    href: "#",
    text: "Java",
  },
  {
    href: "#",
    text: "Spring Boot",
  },
  {
    href: "#",
    text: "Laravel",
  },
];
const OtherSkill = [
  {
    href: "#",
    text: "Firebase",
  },
  {
    href: "#",
    text: "Pusher",
  },
  {
    href: "#",
    text: "MongoDB",
  },
  {
    href: "#",
    text: "Websocket",
  },
];
</script>
