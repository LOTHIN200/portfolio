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
      // Use a slight delay to ensure the DOM is fully rendered
      setTimeout(() => {
        const luxyElement = document.getElementById("luxy");
        if (luxyElement) {
          Luxy.init({
            wrapper: "#luxy",
            targets: ".luxy-el",
            wrapperSpeed: 0.08,
          });
        } else {
          console.error("Luxy: #luxy element not found in the DOM.");
        }
      }, 100); // 100ms delay
    }
  });
});
