<template>
  <v-sheet color="transparent">
    <Introdacution />
    <AboutCompany />
    <Teame />
    <Projects id="Projects" />
    <Application />
    <About id="About" />
    <Certificate />
    <Partner />
    <Connect id="CotactUs" />
  </v-sheet>
</template>

<script setup>
// import Introdacution from "@/components/Introdacution.vue";
import { defineAsyncComponent } from "vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import About from "@/components/About.vue";
import Teame from "@/components/Teame.vue";
// import Projects from "@/components/Projects.vue";
import Application from "@/components/Application.vue";
import AboutCompany from "@/components/AboutCompany.vue";
import Partner from "@/components/Partner.vue";
import Connect from "@/components/Connect.vue";
import Certificate from "@/components/Certificate.vue";


const Introdacution = defineAsyncComponent({
  loader: () => import('@/components/Introdacution.vue'),
  loadingComponent: LoadingComponent /* shows while loading */,
  delay: 1000 /* delay in ms before showing loading component */,
  timeout: 3000 /* timeout after this many ms */,
});
const Projects = defineAsyncComponent({
  loader: () => import('@/components/Projects.vue'),
  loadingComponent: LoadingComponent /* shows while loading */,
  delay: 1000 /* delay in ms before showing loading component */,
  timeout: 3000 /* timeout after this many ms */,
})
</script>
