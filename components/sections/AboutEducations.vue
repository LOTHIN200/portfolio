<template>
  <section class="pt-20 md:pt-24 bg-gray-100 dark:bg-body">
    <AtomsContainer>
      <div class="grid md:grid-cols-2 gap-10 xl:gap-14 relative">
        <div class="flex md:h-full">
          <div
            class="w-full md:h-full rounded-3xl bg-white dark:bg-body shadow-lg shadow-box-shadow border-box-border"
          >
            <!-- <UtilityCardsSwiper
              width="500"
              :slides="slides"
              class="w-full h-full object-cover rounded-2xl"
            /> -->
            <img
              src="/images/lothin_team.jpg"
              alt="Illustratuin about"
              width="500"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div class="md:py-2 lg:py-4 relative">
          <div class="absolute right-0 top-0 h-full w-full flex justify-end">
            <span class="flex opacity-20">
              <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
              <span
                class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
              ></span>
            </span>
          </div>
          <div class="relative">
            <AtomsTitle :texte="$t('dev_passion')" />
            <p class="text-gray-600 dark:text-gray-300 pt-8">
              {{ $t("passion_description") }}
            </p>
            <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
              <div
                class="reveal text-center rounded-xl bg-box-bg shadow-lg shadow-box-shadow border border-box-border p-3"
              >
                <h3
                  class="text-gray-800 dark:text-white font-bold text-xl sm:text-2xl lg:text-3xl"
                >
                  {{ $t("two_thousand_nine_teen") }}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {{ $t("high_school_graduated") }}
                </p>
              </div>
              <div
                class="reveal text-center rounded-xl bg-box-bg shadow-lg shadow-box-shadow border border-box-border p-3"
              >
                <h3
                  class="text-gray-800 dark:text-white font-bold text-xl sm:text-2xl lg:text-3xl"
                >
                  {{ $t("four_plus") }}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {{ $t("high_school_graduated_number") }}
                </p>
              </div>
              <div
                class="reveal text-center rounded-xl bg-box-bg shadow-lg shadow-box-shadow border border-box-border p-3"
              >
                <h3
                  class="text-gray-800 dark:text-white font-bold text-xl sm:text-2xl lg:text-3xl"
                >
                  {{ $t("two_plus") }}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {{ $t("year_experience") }}
                </p>
              </div>
            </div>
            <div class="pt-10 flex gap-x-10">
              <AtomsLinkBtn
                href="#"
                @click="downloadFile"
                variant="primary"
                :isActive="true"
                class="w-full sm:w-max flex justify-center"
              >
                {{ $t("cv") }}
              </AtomsLinkBtn>
              <!-- <AtomsLinkBtn href="#hero" variant="primary">
                {{ $t("company_certificate") }}
              </AtomsLinkBtn> -->
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
<script setup>
const downloadFile = () => {
  const fileUrl = "/pdf/Resume.pdf";
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = "LOTHIN-Resume.pdf";
  a.click();
};
const slides = [
  { id: 1, imageUrl: "/images/cpanel.png" },
  { id: 2, imageUrl: "/images/ubuntu_server.png" },
  { id: 3, imageUrl: "/images/docker.jpeg" },
  { id: 4, imageUrl: "/images/gitlab.png" },
  { id: 5, imageUrl: "/images/github.png" },
  { id: 6, imageUrl: "/images/project_vip.png" },
  { id: 7, imageUrl: "/images/pos_management.png" },
  { id: 8, imageUrl: "/images/mhachak.png" },
];
</script>
