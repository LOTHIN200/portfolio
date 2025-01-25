export function makeLink(
  link: string,
  locale: string,
  defaultLocale: string,
  router: any
): void {
  const languagePrefix = locale !== defaultLocale ? `/${locale}` : "";
  const cleanLink = link.replace(/^\/+/, "");
  const fullPath = `${languagePrefix}/${cleanLink}`;
  router.push(fullPath);
}
