// plugins/error-handler.ts
import { sendErrorToTelegram } from "@/utils/telegram";

export default defineNuxtPlugin((nuxtApp) => {
  // Intercept errors globally
  nuxtApp.hook("app:error", (error) => {
    // You can also include additional info like stack traces, user details, etc.
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    // Send the error message to Telegram (only in production)
    if (process.env.NODE_ENV === "production") {
      sendErrorToTelegram(errorMessage);
    }

    // Optionally log the error for local development
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  });
});
