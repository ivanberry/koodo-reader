import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./assets/locales/en/translation.json";
import translationCN from "./assets/locales/cn/translation.json";
import translationTW from "./assets/locales/tw/translation.json";
import translationAR from "./assets/locales/ar/translation.json";
import translationTR from "./assets/locales/tr/translation.json";
import translationRO from "./assets/locales/ro/translation.json";
import translationPL from "./assets/locales/pl/translation.json";
import translationCS from "./assets/locales/cs/translation.json";
import translationJP from "./assets/locales/jp/translation.json";
import translationIT from "./assets/locales/it/translation.json";
import translationBN from "./assets/locales/bn/translation.json";
import translationNL from "./assets/locales/nl/translation.json";
import translationKO from "./assets/locales/ko/translation.json";
import translationDE from "./assets/locales/de/translation.json";
import translationRU from "./assets/locales/ru/translation.json";
import translationFR from "./assets/locales/fr/translation.json";
import translationES from "./assets/locales/es/translation.json";
import translationFA from "./assets/locales/fa/translation.json";
import translationPTBR from "./assets/locales/pt-BR/translation.json";
import translationTH from "./assets/locales/th/translation.json";
// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationCN,
  },
  cht: {
    translation: translationTW,
  },
  tr: {
    translation: translationTR,
  },
  ar: {
    translation: translationAR,
  },
  ro: {
    translation: translationRO,
  },
  pl: {
    translation: translationPL,
  },
  cs: {
    translation: translationCS,
  },
  jp: {
    translation: translationJP,
  },
  nl: {
    translation: translationNL,
  },
  it: {
    translation: translationIT,
  },
  bn: {
    translation: translationBN,
  },
  ko: {
    translation: translationKO,
  },
  de: {
    translation: translationDE,
  },
  ru: {
    translation: translationRU,
  },
  es: {
    translation: translationES,
  },
  fr: {
    translation: translationFR,
  },
  fa: {
    translation: translationFA,
  },
  ptBR: {
    translation: translationPTBR,
  },
  th: {
    translation: translationTH,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
