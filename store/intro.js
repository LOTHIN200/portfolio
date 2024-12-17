import { defineStore } from "pinia";

export const useIntroStore = defineStore("intro", {
  state: () => ({
    showIntro: true,
  }),
  actions: {
    hideIntro() {
      this.showIntro = false;
    },
  },
});
