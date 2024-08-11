<template>
  <v-sheet color="transparent">
    <Introdacution />
    <About id="About" />
    <Company />
    <Teame />
    <Projects id="Projects" />
    <Application />
    <AboutCompany />
    <Partner />
    <Connect id="CotactUs" />
  </v-sheet>
</template>

<script setup>
import Introdacution from "@/components/introdacution.vue";
import About from "@/components/About.vue";
import Company from "@/components/Company.vue";
import Teame from "@/components/Teame.vue";
import Projects from "@/components/Projects.vue";
import Application from "@/components/Application.vue";
import AboutCompany from "@/components/AboutCompany.vue";
import Partner from "@/components/Partner.vue";
import Connect from "@/components/Connect.vue";
</script>
