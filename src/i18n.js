import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Load translations from JSON files
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize i18next with React
  .init({
    supportedLngs: ["en", "ru", "hy"],
    fallbackLng: "en", // Default language
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"], // Save language settings
    },
    backend: {
      loadPath: "/locales/{{lng}}.json", // Path to translation files
    },
  });

export default i18n;
