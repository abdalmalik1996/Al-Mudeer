<template>
  <v-sheet color="transparent">
    <Introdacution />
    <AboutCompany />
    <Teame />
    <Projects id="projects" />
    <Application />
    <About id="about-Us" />
    <Certificate />
    <Partner />
    <Connect id="cotact-us" />
  </v-sheet>
</template>

<script setup>
import Introdacution from "@/components/Introdacution.vue";
import About from "@/components/About.vue";
import Teame from "@/components/Teame.vue";
import Projects from "@/components/Projects.vue";
import Application from "@/components/Application.vue";
import AboutCompany from "@/components/AboutCompany.vue";
import Partner from "@/components/Partner.vue";
import Connect from "@/components/Connect.vue";
import Certificate from "@/components/Certificate.vue";
</script>
