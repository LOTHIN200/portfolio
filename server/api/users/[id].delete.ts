import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  const { data, error } = await supabase.from("users").delete().eq("id", id);
  if (error) throw createError({ statusCode: 500, message: error.message });
  return data;
});
