import Luxy from "luxy.js";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
    if (nuxtApp.isClient) {
      setTimeout(() => {
        const luxyElement = document.getElementById("luxy");
        if (luxyElement) {
          Luxy.init({
            wrapper: "#luxy",
            targets: ".luxy-el",
            wrapperSpeed: 0.08,
          });
        }
      }, 100);
    }
  });
});
