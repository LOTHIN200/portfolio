import { sendErrorToTelegram } from "@/utils/telegram";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:error", (error) => {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    if (process.env.NODE_ENV === "production") {
      sendErrorToTelegram(errorMessage);
    }
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  });
});
