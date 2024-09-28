<template>
  <v-app :class="currentFontClass">
    <default-bar />

    <default-view />
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

// Access locale from vue-i18n
const { locale } = useI18n();

// Compute the class based on the current locale
const currentFontClass = computed(() => {
  if (locale.value === "en") return "font-en";
  if (locale.value === "ar") return "font-ar";
  // Add conditions for other locales if needed
  return "font-en"; // Default font class
});
</script>

<style></style>
