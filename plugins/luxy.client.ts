import Luxy from "luxy.js";
import { onMounted } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  // onMounted(() => {
  if (import.meta.client) {
    Luxy.init({
      wrapper: "#luxy",
      targets: ".luxy-el",
      wrapperSpeed: 0.1,
    });
  }
  // });
});
