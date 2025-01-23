import { defineStore } from "pinia";

export const useIntroStore = defineStore("intro", {
  state: () => ({
    showIntro: true, // Controls whether the intro is shown
  }),
  actions: {
    hideIntro() {
      this.showIntro = false; // Action to hide the intro
    },
  },
  // persist: true, // Enable persistence (optional)
});
