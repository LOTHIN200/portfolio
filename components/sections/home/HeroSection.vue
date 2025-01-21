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
              class="text-gray-600 space-x-3 pt-0 dark:text-white font-bold text-3xl md:text-4xl lg:text-5xl"
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
const { locale, t } = useI18n();
onMounted(() => {
  typeText1();
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
