// utils/nullToVoid.ts
export function nullToVoid(value: any, str: string = ""): string {
  if (
    value == null ||
    value === "" ||
    typeof value === "undefined" ||
    value === "null" ||
    value === "undefined"
  ) {
    return str;
  } else {
    return String(value);
  }
}
