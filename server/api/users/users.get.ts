import { supabase } from "~/utils/supabase";

export default defineEventHandler(async () => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) throw createError({ statusCode: 500, message: error.message });
  return data;
});
