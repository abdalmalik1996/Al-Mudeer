import { defineStore } from "pinia";

export const useGlobalStore = defineStore("globalStore", {
  state: () => ({
    locale: localStorage.getItem("locale") ?? "er",
  }),
  getters: {
    getCurrentLocale: (state) => state.locale,
  },
  actions: {
    changeCurrentLocale(newLocale) {
      this.locale = newLocale;
      localStorage.setItem("locale", newLocale);
    },
  },
});
