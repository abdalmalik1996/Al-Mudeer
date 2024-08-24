<template>
  <v-card class="rounded-0" color="transparent">
    <v-card
      class="py-5 pb-0 text-white rounded-0 d-flex align-center justify-center"
      min-height="100vh"
      style="background: rgba(48, 60, 67, 0.6)"
    >
      <!-- style="background: rgba(48, 60, 67, 0.6)" -->

      <v-row class="ma-0" justify="center">
        <v-col cols="11" class="pb-0">
          <v-card-title class="text-center">
            <h4 class="text-h4 font-weight-bold">Our Projects</h4>
          </v-card-title>
          <!-- <v-card-subtitle style="opacity: 1" class="text-center mt-4">
            <p class="text-body-1 font-weight-medium">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has
            </p>
          </v-card-subtitle> -->
          <v-sheet color="transparent" class="ga-10">
            <swiper-container
              class="mt-5 d-flex align-end justify-center"
              slides-per-view="auto"
              autoplay
            >
              <swiper-slide
                v-for="(item, index) in items"
                :key="index"
                :style="smAndUp ? 'width : 250px' : '50%'"
                class="d-flex justify-center"
              >
                <v-card
                  data-aos="fade-up"
                  :data-aos-delay="index * 2 + '00'"
                  variant="text"
                  color="transparent"
                >
                  <ProjectsCard :item="item" />
                </v-card>
              </swiper-slide>
            </swiper-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { smAndUp, mdAndUp } = useDisplay();
import ProjectsCard from "./ProjectsCard.vue";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();
const items = [
  {
    img: "/img/Projects/1.webp",
    title: "sahara tower",
  },
  {
    img: "/img/Projects/2.webp",
    title: "Abbco",
  },
  {
    img: "/img/Projects/3.webp",
    title: "al Muna",
  },
  {
    img: "/img/Projects/4.webp",
    title: "al redz",
  },
  {
    img: "/img/Projects/5.webp",
    title: "la plage tower",
  },
  {
    img: "/img/Projects/6.webp",
    title: "MT3",
  },
  {
    img: "/img/Projects/7.webp",
    title: "sahara tower 1",
  },
];
</script>

<style scoped></style>
