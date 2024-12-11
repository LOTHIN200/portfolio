import { useI18n } from "vue-i18n";
import { useRouter } from "#app";

export function makeLink(link: string): void {
  const { locale, defaultLocale } = useI18n();
  const router = useRouter();
  const currentLang = locale.value;
  const languagePrefix = currentLang !== defaultLocale ? `/${currentLang}` : "";
  const cleanLink = link.replace(/^\/+/, "");
  const fullPath = `${languagePrefix}/${cleanLink}`;
  router.push(fullPath);
}
