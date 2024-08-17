<template>
  <v-card image="@/assets/img/Certificate-bac.png" class="rounded-0">
    <v-card
      class="text-white rounded-0 py-5"
      min-height="100vh"
      style="background: rgba(7, 5, 15, 0.8)"
    >
      <v-row justify="center" class="ma-0">
        <v-col cols="11">
          <v-card-title class="text-center">
            <h3 class="text-h4 font-weight-bold">Certificate</h3>
          </v-card-title>
          <v-card-subtitle
            class="w-100 d-flex justify-center"
            style="opacity: 1"
          >
            <p class="text-h6 text-wrap w-50 text-center">
              With experience spanning more than 14 years, we are proud to share
              with you certificates that distinguish us as the best company in
              Sharjah for more than 8 consecutive years without dispute.
            </p>
          </v-card-subtitle>
          <v-sheet color="transparent" class="ga-10 py-9">
            <swiper-container
              class="mt-10 d-flex align-center justify-center"
              :slides-per-view="mdAndUp ? 5 : 'auto'"
              :spaceBetween="20"
              navigation="true"
            >
              <swiper-slide
                v-for="(item, index) in itemsCertificate"
                :key="index"
                :style="smAndUp ? 'width : 345px' : '50%'"
                class="d-flex justify-center"
              >
                <CertificateCard :item="item" />
              </swiper-slide>
            </swiper-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup>
import CertificateCard from "./CertificateCard.vue";
import { useDisplay } from "vuetify";
const { smAndUp, mdAndUp } = useDisplay();
const itemsCertificate = [
  // {
  //   img: 1,
  //   date: "2022",
  // },
  // {
  //   img: 2,
  //   date: "2021",
  // },
  {
    img: 3,
    date: "2020",
  },
  {
    img: 4,
    date: "2013",
  },
  {
    img: 5,
    date: "2018",
  },
  {
    img: 6,
    date: "2019",
  },
  {
    img: 7,
    date: "2012",
  },
  {
    img: 8,
    date: "2023",
  },
  // {
  //   img: 9,
  //   date: "2020",
  // },
];
</script>

<style scoped>
swiper-container::part(button-prev),
swiper-container::part(button-next) {
  color: #a52a2a !important;
}
</style>
