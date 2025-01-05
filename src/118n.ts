import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { TranslationType } from "./locales/TranslationType.ts"; // Import your type
import EN from "./locales/en/translation.json";
import DE from "./locales/de/translation.json";

const resources: Record<string, { translation: TranslationType }> = {
  en: { translation: EN as TranslationType },
  de: { translation: DE as TranslationType },
};

const savedLang = localStorage.getItem("i18nextLng");
const userLang = navigator.language.slice(0, 2);
const lang = savedLang || (resources[userLang] ? userLang : "en");

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: lang,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
