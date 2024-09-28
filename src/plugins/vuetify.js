// plugins/vuetify.js

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { useI18n } from "vue-i18n";
import i18n from "@/plugins/i18n";
import { createVuetify } from "vuetify";
import "@/styles/settings.scss"; // Import the SCSS settings
import { watch } from "vue"; // Import watch from Vue

// Function to update the CSS variable for the body font family based on the current locale
const updateFontFamily = (locale) => {
  const root = document.documentElement;

  // Update the CSS variable based on the active locale
  if (locale === "ar") {
    root.style.setProperty("--v-body-font-family", "Tajawal, sans-serif");
  } else {
    root.style.setProperty("--v-body-font-family", "Roboto, sans-serif");
  }
};

// Watch for changes in the locale using Vue's watch function
watch(
  () => i18n.global.locale.value, // Watching the reactive locale value
  (newLocale) => {
    updateFontFamily(newLocale); // Call the update function when the locale changes
  }
);

// Initial font update based on the current locale
updateFontFamily(i18n.global.locale.value);

// Create Vuetify instance with locale adapter
export default createVuetify({
  locale: {
    locale: localStorage.getItem("locale") || "en",
    fallback: "en",
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
    },
  },
});
