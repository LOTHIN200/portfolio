import { createClient } from "@supabase/supabase-js";
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
  const config = useRuntimeConfig();

  const supabaseUrl = config.public.SUPABASE_URL;
  const supabaseKey = config.public.SUPABASE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL or Key is not set in runtime configuration");
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  return {
    provide: {
      supabase,
    },
  };
});
