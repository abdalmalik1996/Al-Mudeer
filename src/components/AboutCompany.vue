<template>
  <v-sheet
    color="transparent"
    class="position-relative rounded-0"
    :style="{ height: calculatedHeight }"
  >
    <v-card
      color="#090F13"
      min-height="100vh"
      class="text-white rounded-0"
      :style="mdAndUp ? 'padding-bottom: 200px' : 'padding-bottom: 320px'"
    >
      <v-row justify="end" class="ma-0">
        <v-col cols="12" md="6" class="d-flex align-center">
          <v-card variant="text">
            <v-card-title class="py-9">
              <h4 class="text-h3 font-weight-bold">Who’s Al Mudeer</h4>
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
        <v-col class="d-flex align-center" cols="12" md="5">
          <v-img src="@/assets/img/AboutCompany.png"></v-img>
        </v-col>
      </v-row>
    </v-card>

    <v-card
      variant="flat"
      color="transparent"
      class="pa-0 w-100 rounded-0"
      style="transform: translateY(-50%); z-index: 9999; position: absolute"
    >
      <v-row justify="center" class="ma-0 pa-0 w-100">
        <v-col cols="11" class="py-0">
          <v-sheet
            class="rounded-xl d-flex justify-lg-space-between align-center py-5"
            color="#1A2226"
            variant="flat"
          >
            <v-row class="ma-0">
              <v-col
                cols="12"
                sm="6"
                md="3"
                v-for="(item, index) in itemsCounter"
                :key="index"
              >
                <v-card
                  variant="text"
                  class="text-white text-center d-flex flex-column align-center"
                >
                  <v-img
                    width="85"
                    :height="85"
                    :src="`/icon/${item.icon}.svg`"
                  ></v-img>
                  <v-card-title>
                    <h5 class="text-h4 text-md-h4 font-weight-bold">
                      {{ item.number }}
                    </h5>
                  </v-card-title>
                  <v-card-subtitle
                    class="d-flex justify-center"
                    style="opacity: 1"
                  >
                    <p
                      :style="mdAndUp ? 'width : 90%' : 'width : 100%'"
                      class="text-wrap text-center text-body-1 font-weight-medium"
                    >
                      {{ item.title }}
                    </p>
                  </v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
    <Company />
  </v-sheet>
</template>

<script setup>
import { useDisplay } from "vuetify";
import Company from "@/components/Company.vue";

const { smAndUp, mdAndUp } = useDisplay();
import CertificateCard from "./CertificateCard.vue";
const itemsCounter = [
  {
    title: "Value Of managed assets",
    number: "5.2 B",
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
