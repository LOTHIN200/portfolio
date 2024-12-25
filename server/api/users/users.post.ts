import { supabase } from '~/utils/supabase';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { data, error } = await supabase.from('users').insert(body);
  if (error) throw createError({ statusCode: 500, message: error.message });
  return data;
});
