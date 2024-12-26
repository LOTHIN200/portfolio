<template>
  <section class="relative w-full">
    <div class="absolute top-0 inset-x-0 h-64 flex items-start">
      <div
        class="h-24 w-2/3 bg-gradient-to-br from-primary opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40"
      ></div>
      <div
        class="h-20 w-3/5 bg-gradient-to-r from-[#8cd66a] opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40"
      ></div>
    </div>
    <AtomsContainer class-name="relative">
      <div
        class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto"
      >
        <div class="lg:py-2">
          <div class="text-center lg:text-left h-48 md:h-42 lg:h-50">
            <h1
              class="text-gray-600 space-x-8 pt-4 dark:text-white font-bold text-4xl md:text-5xl lg:text-6xl"
            >
              <span>{{ typedText1 }}</span>
              <span
                class="text-transparent pl-18 pt-30 bg-clip-text bg-gradient-to-br from-primary to-[#8cd66a]"
              >
                {{ typedText2 }} </span
              ><br />
            </h1>
            <h1
              class="text-gray-600 pt-8 dark:text-white font-bold text-4xl md:text-5xl lg:text-6xl"
            >
              <span>{{ typedText3 }} </span>
            </h1>
          </div>

          <p
            class="text-gray-600 dark:text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl"
          >
            {{ $t("programming_details") }}
          </p>

          <div
            class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
          >
            <!-- <AtomsLinkBtn
              href="#"
              variant="primary"
              class="w-full sm:w-max flex justify-center"
            >
              {{ $t("contact") }}
            </AtomsLinkBtn> -->

            <!-- <AtomsLinkBtn
              href="#"
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

                <span> Listening Episode </span>
              </div>
            </AtomsLinkBtn> -->
          </div>
          <div class="pt-8 lg:pt-10 w-max mx-auto lg:mx-0">
            <div
              class="flex items-center text-center flex-col sm:flex-row gap-4 sm:gap-0"
            >
              <div class="flex items-center">
                <img
                  src="/images/chushin.jpg"
                  width="40"
                  alt="avatar"
                  class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-400 object-cover"
                />
                <img
                  src="/images/chushin.jpg"
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
                <img
                  src="/images/chushin.jpg"
                  width="40"
                  alt="avatar"
                  class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-400 object-cover -ml-2.5"
                />
                <span
                  class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-400 bg-body-color flex items-center justify-center text-xs text-gray-300 object-cover -ml-2.5"
                >
                  300+
                </span>
              </div>
              <div class="pl-2 text-gray-600 dark:text-gray-200">WordWide listners</div>
            </div>
          </div>
        </div>
        <div class="lg:h-full hidden md:flex">
          <div
            class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative"
          >
            <div
              class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-primary to-pink-300 dark:from-[#570cac] dark:to-primary blur-2xl"
            ></div>
            <div
              class="absolute w-2/4 h-full z-10 p-1 -translate-y-1/2 top-1/2 right-3 rounded-3xl bg-white dark:bg-body shadow-lg shadow-box-shadow border border-box-border"
            >
              <img
                src="/images/lothin.jpg"
                alt="In studio"
                width="400"
                height="auto"
                loading="lazy"
                class="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <div
              class="absolute -translate-y-1/2 top-1/2 h-[calc(80%-2rem)] w-[calc(40%-20px)] p-1 rounded-3xl bg-white dark:bg-body shadow-lg shadow-box-shadow border border-box-border"
            >
              <img
                src="/images/chushin.jpg"
                alt="Happy in studio"
                width="200"
                height="auto"
                loading="lazy"
                class="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSupabase } from "~/composables/useSupabase";
const { $supabase } = useNuxtApp();
const { locale, t } = useI18n();
const { Get, Create, Update, Deletes } = useSupabase();
onMounted(() => {
  typeText1();
  // updateUser();
  // deleteUser();
  // createUser();
  // getUser();
});
const users = ref([]);
const typedText1 = ref("");
const typedText2 = ref("");
const typedText3 = ref("");

const word1 = t("the_more_you");
const word2 = t("learn");
const word3 = t("the_more_you_nothing");

const typingSpeed = 100;
let index1 = 0;
let index2 = 0;
let index3 = 0;
const getUser = async () => {
  const users = await Get("users");
  console.log(users);
};
const createUser = async () => {
  const users = await Create("users", {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 25,
  });
};
const updateUser = async () => {
  const users = await Update("users", 48, {
    name: "lothin",
    email: "lothin@example.com",
    age: 24,
  });
};
const deleteUser = async () => {
  const user = await Deletes("users");
};
const typeText1 = () => {
  if (index1 < word1.length) {
    typedText1.value += word1[index1];
    index1++;
    setTimeout(typeText1, typingSpeed);
  } else {
    setTimeout(typeText2, 1000);
  }
};

const typeText2 = () => {
  if (index2 < word2.length) {
    typedText2.value += word2[index2];
    index2++;
    setTimeout(typeText2, typingSpeed);
  } else {
    setTimeout(typeText3, 1000);
  }
};

const typeText3 = () => {
  if (index3 < word3.length) {
    typedText3.value += word3[index3];
    index3++;
    setTimeout(typeText3, typingSpeed);
  } else {
    setTimeout(() => {
      typedText1.value = "";
      typedText2.value = "";
      typedText3.value = "";
      index1 = index2 = index3 = 0;
      typeText1();
    }, 10000);
  }
};
</script>
