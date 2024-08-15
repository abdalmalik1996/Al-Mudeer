<template>
  <v-card image="@/assets/img/Company-bac.jpg" class="rounded-0">
    <v-card
      class="py-16 text-white"
      style="
        padding-top: 200px !important;
        background: linear-gradient(
            180deg,
            rgba(57, 23, 18, 0.3) 21.5%,
            rgba(57, 23, 18, 0) 100%
          ),
          linear-gradient(
            0deg,
            rgba(192, 122, 120, 0.4),
            rgba(192, 122, 120, 0.4)
          ),
          linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
      "
    >
      <v-row class="ma-0" justify="center">
        <v-col cols="10">
          <v-card-title class="text-center">
            <h4 class="text-h3 font-weight-bold">The Company's Departments</h4>
          </v-card-title>
          <v-card-subtitle
            class="text-center mt-2"
            style="opacity: 1 !important"
          >
            <p class="text-h6 font-weight-regular">
              The company's departments in <br />
              Al-Mudeer Company
            </p>
          </v-card-subtitle>
          <v-sheet
            color="transparent"
            class="d-flex flex-wrap justify-center ga-10 py-16"
          >
            <v-card
              variant="flat"
              color="transparent"
              v-for="(item, index) in items"
              :key="index"
            >
              <CompanyCard :item="item" />
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup>
import CompanyCard from "./CompanyCard.vue";
const items = [
  {
    imgBac: "/img/company/1.png",
    img: "/1.webp",
    icon: "/img/company/ownersassociation.png",
    title: "OWNERS ASSOCIATION \n  MANAGEMENT",
    des: "Owners association management, including all technical, financial, and operational support in compliance with Jointly Owned Property Laws.",
  },
  {
    imgBac: "/img/company/2.png",
    img: "/2.png",
    icon: "/img/company/ownersassociation-1.png",
    title: "REAL ESTATE",
    des: "We at Al Mudeer Real Estate Company consider ourselves the best real estate experts for you We envision a world where everyone can find the perfect place. Your dream property is still waiting for you",
  },
  {
    imgBac: "/img/company/3.png",
    img: "/3.png",
    icon: "/img/company/ownersassociation-2.png",
    title: "PROPERTY MANAGEMENT",
    des: "Range of disciplines to ensure functionality, comfort, safety, and efficiency of the built environment by integrating people, place, process, and technology.",
  },
  {
    imgBac: "/img/company/4.png",
    img: "/4.webp",
    icon: "/img/company/ownersassociation-3.png",
    title: "IT SERVICES",
    des: "ALMUDEER is a renowned mobile app development company & the best IT Software Solutions provider based in GCC established in 2020.",
  },
];
</script>

<style scoped></style>
