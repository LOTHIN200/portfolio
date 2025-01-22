// import Luxy from "luxy.js";

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.hook("app:mounted", () => {
//     if (process.client) {
//       setTimeout(() => {
//         Luxy.init({
//           wrapper: "#luxy",
//           targets: ".luxy-el",
//           wrapperSpeed: 0.08,
//         });
//       }, 100);
//     }
//   });
// });
import Luxy from "luxy.js";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
    if (process.client) {
      const observer = new MutationObserver((mutations, obs) => {
        const luxyElement = document.getElementById("luxy");
        if (luxyElement) {
          Luxy.init({
            wrapper: "#luxy",
            targets: ".luxy-el",
            wrapperSpeed: 0.08,
          });
          obs.disconnect(); // Stop observing once the element is found
        }
      });

      // Start observing the document body for changes
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }
  });
});
