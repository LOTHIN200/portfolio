import ScrollReveal from "scrollreveal";

export default defineNuxtPlugin(() => {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 1000,
    delay: 200,
    reset: true,
  });

  return {
    provide: {
      sr,
    },
  };
});
