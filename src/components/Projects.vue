<template>
  <v-card image="@/assets/img/projects-bac.jpg" class="rounded-0">
    <v-card
      class="py-15 text-white"
      min-height="100vh"
      style="background: rgba(48, 60, 67, 0.6)"
    >
      <v-row class="ma-0" justify="center">
        <v-col cols="11">
          <v-card-title class="text-center">
            <h4 class="text-h3 font-weight-bold">Our Projects</h4>
          </v-card-title>
          <v-card-subtitle style="opacity: 1" class="text-center mt-4">
            <p class="text-h6 font-weight-medium">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has
            </p>
          </v-card-subtitle>
          <v-sheet color="transparent" class="ga-10">
            <swiper-container
              class="mt-10 d-flex align-center justify-center"
              slides-per-view="auto"
              :spaceBetween="25"
            >
              <swiper-slide
                v-for="(item, index) in items"
                :key="index"
                :style="smAndUp ? 'width : 380px' : '50%'"
                class="d-flex justify-center"
              >
                <v-card variant="text" color="transparent">
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
