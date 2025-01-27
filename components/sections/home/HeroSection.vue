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
            class="reveal text-gray-600 leading-[2] dark:text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl"
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
                      d="M12 3a1 1 0 011 1v12.586l4.293-4.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L11 16.586V4a1 1 0 011-1z"
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
              <div class="pl-2 text-gray-600 dark:text-gray-200 flex space-x-4">
                <a
                  :href="facebookLink"
                  target="_blank"
                  aria-label="Facebook"
                  class="hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#1877F2"
                      d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                    ></path>
                    <path
                      fill="#FFF"
                      d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                    ></path>
                  </svg>
                </a>

                <a
                  :href="telegramLink"
                  target="_blank"
                  aria-label="Telegram"
                  class="hover:text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <defs>
                      <linearGradient
                        id="logosTelegram0"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stop-color="#2AABEE" />
                        <stop offset="100%" stop-color="#229ED9" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#logosTelegram0)"
                      d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.04 128.04 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51s-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"
                    />
                    <path
                      fill="#FFF"
                      d="M57.94 126.648q55.98-24.384 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"
                    />
                  </svg>
                </a>

                <a
                  :href="linkedinLink"
                  target="_blank"
                  aria-label="LinkedIn"
                  class="hover:text-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#0A66C2" rx="60" />
                      <path
                        fill="#FFF"
                        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                      />
                    </g>
                  </svg>
                </a>
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
const config = useRuntimeConfig();
const telegramLink = `https://t.me/${config.public.telegramUsername}`;
const linkedinLink = `https://www.linkedin.com/in/${config.public.linkedinUsername}`;
const facebookLink = `https://www.facebook.com/${config.public.facebookUsername}`;

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
