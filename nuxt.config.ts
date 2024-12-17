// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Dev",
    },
  },
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "nuxt-particles",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
  ],
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
        iso: "en",
      },
      {
        code: "kh",
        name: "Khmer",
        file: "kh.json",
        iso: "kh",
      },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    langDir: "locales/",
    lazy: true,
    vueI18n: "./i18n/i18n.config.ts",
  },
  css: ["~/assets/css/app.css"],
  colorMode: {
    preference: "system",
    fallback: "dark",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  particles: {
    mode: "full", // 'full' | 'slim' | 'basic' | 'custom'
    lazy: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    preset: "vercel",
  },
});
