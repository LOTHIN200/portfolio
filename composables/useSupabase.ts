import { useNuxtApp } from "#app";
import { nullToVoid } from "~/utils/nullToVoid";
type SupabaseResponse<T> = {
  data: T | null;
  error: Error | null;
};

export const useSupabase = () => {
  const { $supabase } = useNuxtApp();

  // Generic function to handle Supabase queries
  const query = async <T>(
    method: "select" | "insert" | "update" | "delete",
    table: string,
    payload?: any,
    columns: string = "*",
    id?: number | string
  ): Promise<T[]> => {
    let response: SupabaseResponse<T[]>;

    switch (method) {
      case "select":
        response = await $supabase.from(table).select(columns);
        break;
      case "insert":
        response = await $supabase.from(table).insert(payload);
        break;
      case "update":
        if (nullToVoid(id, "") != "")
          throw new Error("ID must be provided for update.");
        response = await $supabase.from(table).update(payload).eq("id", id);
        break;
      case "delete":
        if (nullToVoid(id, "") == "") {
          response = await $supabase.from(table).delete();
        } else {
          response = await $supabase.from(table).delete().eq("id", id);
        }
        break;
      default:
        throw new Error(`Invalid method: ${method}`);
    }

    if (response.error) {
      throw new Error(response.error.message);
    }
    return response.data!;
  };

  return {
    Create: <T>(table: string, payload: T) =>
      query<T>("insert", table, payload),
    Get: <T>(table: string, columns: string = "*") =>
      query<T>("select", table, undefined, columns),
    Update: <T>(table: string, id: number | string, payload: Partial<T>) =>
      query<T>("update", table, payload, "*", id),
    Deletes: (table: string, id?: number | string) =>
      query<void>("delete", table, undefined, "*", id),
  };
};
