import Luxy from "luxy.js";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    Luxy.init();
  }
});
