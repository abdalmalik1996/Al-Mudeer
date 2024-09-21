import { createI18n } from "vue-i18n";
import arTranslations from "./translations/ar";
import enTranslations from "./translations/en";
import { ar, en } from "vuetify/locale";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") || "en",
  fallbackLocale: "en",
  messages: {
    en: {
      ...enTranslations,
      $vuetify: {
        ...en,
        dataIterator: {
          rowsPerPageText: "Items per page:",
          pageText: "{0}-{1} of {2}",
        },
      },
    },
    ar: {
      ...arTranslations,
      $vuetify: {
        ...ar,
        dataIterator: {
          rowsPerPageText: "العناصر في الصفحة:",
          pageText: "{0}-{1} من {2}",
        },
      },
    },
  },
});

export function translate(key, values = {}) {
  return i18n.global.t(key, values);
}
export default i18n;
