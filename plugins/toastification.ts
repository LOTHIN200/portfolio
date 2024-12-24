import Vue3Toastify, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
// https://vue3-toastify.js-bridge.com/
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    Vue3Toastify,
    {
      transition: toast.TRANSITIONS.SLIDE,
      // toast.TRANSITIONS.FLIP,
      // toast.TRANSITIONS.BOUNCE
      // toast.TRANSITIONS.ZOOM
      // toast.TRANSITIONS.SLIDE
    },
    { autoClose: 3000 }
  );
  return {
    provide: { toast },
  };
});
