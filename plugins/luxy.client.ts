import Luxy from "luxy.js";
import { onMounted } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    onMounted(() => {
      Luxy.init({
        wrapper: "#luxy",
        targets: ".luxy-el",
        wrapperSpeed: 0.1,
      });
    });
  }
});
