import Luxy from "luxy.js";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
    if (process.client) {
      Luxy.init({
        wrapper: "#luxy",
        targets: ".luxy-el",
        wrapperSpeed: 0.08,
      });
    }
  });
});
