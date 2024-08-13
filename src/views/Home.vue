<template>
  <v-sheet color="transparent">
    <Introdacution />

    <AboutCompany />

    <Company />
    <Teame />
    <Projects id="Projects" />
    <Application />

    <About id="About" />

    <Partner />
    <Connect id="CotactUs" />
  </v-sheet>
</template>

<script setup>
import Introdacution from "@/components/Introdacution.vue";
import About from "@/components/About.vue";
import Company from "@/components/Company.vue";
import Teame from "@/components/Teame.vue";
import Projects from "@/components/Projects.vue";
import Application from "@/components/Application.vue";
import AboutCompany from "@/components/AboutCompany.vue";
import Partner from "@/components/Partner.vue";
import Connect from "@/components/Connect.vue";
</script>
