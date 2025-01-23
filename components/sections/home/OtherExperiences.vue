<template>
  <section class="pt-20 md:pt-24 relative bg-gray-100 dark:bg-body">
    <AtomsContainer>
      <div class="flex justify-between items-center pb-6">
        <div class="">
          <AtomsTitle :texte="$t('other_experiences')" />
        </div>
        <div class="flex items-center min-w-max relative">
          <!-- <AtomsLinkBtn href="#" variant="primary"> Explore more </AtomsLinkBtn> -->
        </div>
      </div>
      <div class="relative">
        <!--  -->
        <div
          class="flex absolute top-1/2 -left-5 -translate-y-1/2 z-10 transition duration-300 ease-linear"
          :class="prevIsVisible ? 'visible opacity-100' : 'insisible opacity-0'"
        >
          <AtomsSwiperNavButton @click="scrollToLeft()">
            <IconsPrevIco />
          </AtomsSwiperNavButton>
        </div>
        <!--  -->
        <div
          class="flex absolute top-1/2 -right-5 -translate-y-1/2 z-10 transition duration-300 ease-linear"
          :class="nextIsVisible ? 'visible opacity-100' : 'insisible opacity-0'"
        >
          <AtomsSwiperNavButton @click="scrollToRight()">
            <IconsNextIco />
          </AtomsSwiperNavButton>
        </div>

        <div
          data-slide-recent
          @scroll="initScroll()"
          class="flex items-stretch gap-5 overflow-hidden overflow-x-auto invisible-scroll"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="w-11/12 min-w-[91.666667%] xs:w-80 xs:min-w-[20rem] md:w-1/3 md:min-w-[33.333333%] lg:w-1/4 lg:min-w-[25%]"
          >
            <CardsRecentPod
              :title="$t(card.title)"
              :description="card.description"
              :duration="card.duration"
              :href="card.href"
              :cover-image="card.coverImage"
            />
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>

<script lang="ts" setup>
const cards = [
  {
    title: "cpanelActionsList",
    duration: "23 min",
    href: "#",
    coverImage: "/images/cpanel.png",
    description: [
      "manage_files",
      "create_manage_email",
      "add_manage_domains",
      "configure_dns_records",
      "manage_databases",
      "install_apps",
      "setup_backups",
      "manage_ssl_tls",
      "view_stats_error_logs",
      "configure_ftp_accounts",
      "setup_cron_jobs",
      "block_ip_hotlink_protection",
      "optimize_website",
      "edit_htaccess",
      "manage_git_repositories",
      "manage_api_tokens",
    ],
  },
  {
    title: "gitlab",
    duration: "1 h 22 min",
    href: "#",
    coverImage: "/images/gitlab.png",
    description: [
      "version_control",
      "cicd_pipelines",
      "issue_tracking",
      "code_review",
      "security_and_monitoring",
      "collaboration_tools",
    ],
  },
  {
    title: "github",
    duration: "12 min",
    href: "#",
    coverImage: "/images/github.png",
    description: [
      "version_control",
      "repositories",
      "collaboration",
      "community",
      "documentation",
      "ci_cd_integration",
      "security",
    ],
  },
  {
    title: "ubuntu_server",
    duration: "12 min",
    href: "#",
    coverImage: "/images/ubuntu_server.png",
    description: [
      "open_source",
      "stability",
      "ubuntu_security",
      "performance",
      "compatibility",
    ],
  },
  {
    title: "docker",
    duration: "12 min",
    href: "#",
    coverImage: "/images/docker.jpeg",
    description: [
      "dockercontainers",
      "dockerimages",
      "dockerengine",
      "dockerhub",
      "dockerfile",
      "dockercompose",
    ],
  },
  {
    title: "window_setup",
    duration: "50 min",
    href: "#",
    coverImage: "/images/window-setup.webp",
    description: [
      "An introductory guide to desktop development.",
      "Explore tools, languages, and frameworks.",
      "Start building desktop applications effectively.",
    ],
  },
];

const scrollLeft = useState("scrollLeft", () => 0);
const nextIsVisible = useState("nextIsVisible", () => false);
const prevIsVisible = useState("prevIsVisible", () => false);

let element: HTMLDivElement;
if (typeof document !== "undefined") {
  element = document.querySelector("[data-slide-recent]") as HTMLDivElement;
}
function initScroll(): void {
  if (typeof element === "undefined" || element === null) {
    return;
  }
  prevIsVisible.value = element.scrollLeft <= 0 ? false : true;
  nextIsVisible.value =
    element.scrollLeft >= element.scrollWidth - element.offsetWidth - 1 ? false : true;
}

function scrollToLeft(): void {
  if (typeof element === "undefined" || element === null) {
    return;
  }
  element.scrollLeft -= element.clientWidth;
}

function scrollToRight(): void {
  if (typeof element === "undefined" || element === null) {
    return;
  }
  element.scrollLeft += element.clientWidth;
}

onMounted(() => {
  if (window !== null) {
    initScroll();
  }
});
</script>
