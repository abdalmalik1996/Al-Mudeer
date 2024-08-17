/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
import Vue3Autocounter from "vue3-autocounter";
// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);
app.component("vue3-autocounter", Vue3Autocounter);
app.mount("#app");
