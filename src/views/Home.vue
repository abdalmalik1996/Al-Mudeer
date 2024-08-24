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
    <Connect id="ContactUs" />
  </v-sheet>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import LoadingComponent from '@/components/LoadingComponent.vue';

function asyncImport(componentPath) {
  return defineAsyncComponent({
    loader: () => import(componentPath),
    loadingComponent: LoadingComponent,
    delay: 200,  // تأخير 200 مللي ثانية قبل عرض مكون التحميل
    timeout: 10000,  // مهلة 10 ثوانٍ قبل عرض رسالة خطأ
  });
}

const Introdacution = asyncImport('../components/Introdacution.vue');
const AboutCompany = asyncImport('../components/AboutCompany.vue');
const Teame = asyncImport('../components/Teame.vue');
const Projects = asyncImport('../components/Projects.vue');
const Application = asyncImport('../components/Application.vue');
const About = asyncImport('../components/About.vue');
const Certificate = asyncImport('../components/Certificate.vue');
const Partner = asyncImport('../components/Partner.vue');
const Connect = asyncImport('../components/Connect.vue');

</script>
