import Luxy from "luxy.js";

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    Luxy.init({
      wrapper: "#luxy",
      targets: ".luxy-el",
      wrapperSpeed: 0.1,
    });
  }
});
