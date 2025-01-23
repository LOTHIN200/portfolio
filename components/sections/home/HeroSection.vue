<template>
  <section class="relative w-full min-h-screen flex items-center">
    <div class="absolute top-0 inset-x-0 h-90 flex items-start">
      <div
        class="h-24 w-2/3 bg-gradient-to-br from-primary opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40"
      ></div>
      <div
        class="h-20 w-3/5 bg-gradient-to-r from-[#8cd66a] opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40"
      ></div>
    </div>
    <AtomsContainer class-name="relative flex-grow">
      <div
        class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto"
      >
        <div class="lg:py-2 flex flex-col justify-center reveal">
          <div class="text-center lg:text-left h-48 md:h-42 lg:h-50">
            <h1
              class="text-gray-600 space-x-8 pt-4 dark:text-white font-bold text-3xl md:text-4xl lg:text-5xl"
            >
              <span ref="typedText1"></span>
              <span
                class="text-transparent pl-18 pt-30 bg-clip-text bg-gradient-to-br from-primary to-[#8cd66a]"
              >
                <span ref="typedText2"></span>
              </span>
              <br />
            </h1>
            <h1
              class="text-gray-600 pt-8 dark:text-white font-bold text-3xl md:text-4xl lg:text-5xl"
            >
              <span ref="typedText3"></span>
            </h1>
          </div>

          <p
            class="reveal text-gray-600 dark:text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl"
          >
            {{ $t("programming_details") }}
          </p>

          <div
            class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
          >
            <AtomsLinkBtn
              href="#contact"
              variant="primary"
              class="w-full sm:w-max flex justify-center"
              :isActive="true"
            >
              {{ $t("contact") }}
            </AtomsLinkBtn>

            <AtomsLinkBtn
              href="#education"
              variant="costum"
              costum-span-class="px-6 md:px-7 hover:bg-primary/10"
              costum-text-color="text-primary "
            >
              <div class="flex items-center gap-3">
                <span class="p-2 rounded-full border border-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-3 h-3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <span> {{ $t("about_education") }} </span>
              </div>
            </AtomsLinkBtn>
          </div>
          <div class="pt-8 lg:pt-10 w-max mx-auto lg:mx-0">
            <div
              class="flex items-center text-center flex-col sm:flex-row gap-4 sm:gap-0"
            >
              <div class="flex items-center">
                <img
                  src="/images/cirtificate.jpg"
                  width="40"
                  alt="avatar"
                  class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-400 object-cover"
                />
                <img
                  src="/images/lothin.jpg"
                  width="40"
                  alt="avatar"
                  class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-400 object-cover -ml-2.5"
                />
                <img
                  src="/images/lothin_team.jpg"
                  width="40"
                  alt="avatar"
                  class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-400 object-cover -ml-2.5"
                />
                <img
                  src="/images/chushin.jpg"
                  width="40"
                  alt="avatar"
                  class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-400 object-cover -ml-2.5"
                />
                <span
                  class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-400 bg-body-color flex items-center justify-center text-xs text-gray-300 object-cover -ml-2.5"
                >
                  <img
                    src="/images/team.jpg"
                    width="40"
                    alt="avatar"
                    class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-400 object-cover -ml-2.5"
                  />
                </span>
              </div>
              <div class="pl-2 text-gray-600 dark:text-gray-200">
                <!-- WordWide listners -->
              </div>
            </div>
          </div>
        </div>

        <!-- Responsive Humen -->
        <div class="lg:h-full hidden md:flex">
          <UtilityHumen class="relative -translate-x-64" />
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TypeIt from "typeit";

const { t } = useI18n();

const typedText1 = ref(null);
const typedText2 = ref(null);
const typedText3 = ref(null);

const word1 = t("the_more_you");
const word2 = t("learn");
const word3 = t("the_more_you_nothing");

onMounted(() => {
  // Initialize TypeIt for each text element
  new TypeIt(typedText1.value, {
    strings: word1,
    speed: 100,
    waitUntilVisible: true,
    cursor: false, // Disable cursor
  }).go();

  new TypeIt(typedText2.value, {
    strings: word2,
    speed: 100,
    startDelay: 1000, // Delay after the first text finishes
    waitUntilVisible: true,
    cursor: false, // Disable cursor
  }).go();

  new TypeIt(typedText3.value, {
    strings: word3,
    speed: 100,
    startDelay: 2000, // Delay after the second text finishes
    waitUntilVisible: true,
    cursor: false, // Disable cursor
  }).go();
});
</script>
