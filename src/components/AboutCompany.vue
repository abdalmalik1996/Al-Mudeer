<template>
  <v-sheet color="transparent" class="position-relative">
    <v-card
      color="#090F13"
      min-height="100vh"
      class="text-white"
      style="padding-bottom: 300px"
    >
      <v-row justify="end" class="ma-0 h-100">
        <v-col cols="12" md="6" class="d-flex align-center">
          <v-card variant="text">
            <v-card-title class="py-9">
              <h4 class="text-h3 font-weight-bold">About Company</h4>
            </v-card-title>
            <v-card-subtitle class="text-wrap" style="opacity: 1">
              <p class="text-h6 font-weight-light mb-10">
                <span class="text-h5 text-white font-weight-bold"
                  >Al Mudeer Company </span
                >was established in 2011 to provide exceptional administrative
                services to owners’ associations. Since its inception, it has
                been one of the most prominent real estate companies in Sharjah,
                with a journey full of achievements. After entering the
                technology sector, it began developing its own software
                services, which led to raising the company’s position at the
                state level and making it an integrated group of competencies,
                achievements and capabilities that have been at the forefront of
                real estate excellence without dispute for seven consecutive
                years in Sharjah.
              </p>
              <p class="text-h6 font-weight-light mb-10">
                <span class="text-h5 text-white font-weight-bold">
                  Al Mudeer
                </span>
                currently manages over 42 active projects in the UAE and has
                over 15,000 real estate units in prominent towers and premium
                buildings. Since then, the company has successfully managed a
                wide range of projects and consistently exceeded client
                expectations.
              </p>
              <p class="text-h6 font-weight-light mb-10">
                <span class="text-h5 text-white font-weight-bold">
                  Our extensive experience,
                </span>
                in-depth market knowledge and the breadth of our operations make
                us the only entity able to guarantee a cost-effective service,
                results and approach superior to all our competitors in the
                managed communities sector.
              </p>
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col class="d-flex align-center h-100" cols="12" md="5">
          <v-img src="@/assets/img/AboutCompany.png"></v-img>
        </v-col>
      </v-row>
    </v-card>
    <v-row
      justify="center"
      class="ma-0 w-100"
      style="
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 9999;
      "
    >
      <v-col cols="10">
        <v-sheet
          height="363px"
          class="rounded-xl d-flex justify-lg-space-between align-center"
          color="#1A2226"
          variant="flat"
        >
          <v-card
            variant="text"
            v-for="(item, index) in itemsCounter"
            :key="index"
            class="text-white text-center pa-8 d-flex flex-column align-center"
          >
            <v-img
              width="130"
              :height="130"
              :src="`/icon/${item.icon}.svg`"
            ></v-img>
            <v-card-title>
              <h5 class="text-h2 font-weight-bold">{{ item.number }}</h5>
            </v-card-title>
            <v-card-subtitle class="d-flex justify-center" style="opacity: 1">
              <p class="w-75 text-wrap text-center text-h6">{{ item.title }}</p>
            </v-card-subtitle>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
    <v-card image="@/assets/img/Certificate-bac.png" min-height="100vh">
      <v-card
        class="h-100 text-white"
        style="background: rgba(7, 5, 15, 0.8); padding-top: 300px"
      >
        <v-card-title class="text-center">
          <h3 class="text-h3 font-weight-bold">Certificate</h3>
        </v-card-title>
        <v-card-subtitle class="w-100 d-flex justify-center" style="opacity: 1">
          <p class="text-h5 text-wrap w-50 text-center">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC
          </p>
        </v-card-subtitle>
        <v-sheet color="transparent" class="d-flex ga-10 justify-center py-9">
          <v-card color="transparent" v-for="n in 4" :key="n" variant="flat">
            <CertificateCard />
          </v-card>
        </v-sheet>
      </v-card>
    </v-card>
  </v-sheet>
</template>

<script setup>
import CertificateCard from "./CertificateCard.vue";
const itemsCounter = [
  {
    title: "Value Of managed assets",
    number: "5.2B",
    icon: "Value",
  },
  {
    title: "Employees Under Al-Mudeer Managment",
    number: "+ 400",
    icon: "Employees",
  },
  {
    title: "Units Under Al-Mudeer Managment",
    number: "+ 15 K",
    icon: "Units",
  },
  {
    title: "AL-Mudeer Projects",
    number: "+ 50",
    icon: "MudeerProjects",
  },
];
</script>

<style scoped></style>
