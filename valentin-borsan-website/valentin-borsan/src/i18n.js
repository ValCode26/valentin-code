import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationIT from "./locales/it.json";

const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Limba implicită
    fallbackLng: "en", // Dacă limba nu este găsită
    interpolation: {
      escapeValue: false, // React deja protejează împotriva XSS
    },
  });

export default i18n;