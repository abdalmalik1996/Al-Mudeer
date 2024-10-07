<template>
  <v-card class="rounded-0" color="transparent">
    <v-sheet
      class="py-5 pb-0 text-white rounded-0"
      min-height="80vh"
      style="background: rgba(48, 60, 67, 0.6)"
    >
      <!-- style="background: rgba(48, 60, 67, 0.6)" -->

      <v-row class="ma-0" justify="center">
        <v-col md="11" cols="11" class="pb-0">
          <v-card-title class="text-center">
            <h4 class="text-h4 font-weight-bold">
              {{ $t("Projects.OurProjects") }}
            </h4>
          </v-card-title>
          <!-- <v-card-subtitle style="opacity: 1" class="text-center mt-4">
            <p class="text-body-1 font-weight-medium">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has
            </p>
          </v-card-subtitle> -->
          <v-sheet color="transparent">
            <swiper-container
              class="mt-5 d-flex align-end justify-center"
              :slides-per-view="slidesPerView"
              :space-between="20"
            >
              <swiper-slide
                v-for="(item, index) in items"
                :key="index"
                :style="mdAndUp ? 'width : 250px' : 'width :100%'"
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
    </v-sheet>
  </v-card>
</template>

<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
const { smAndUp, mdAndUp, lgAndUp } = useDisplay();

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
const slidesPerView = computed(() => {
  if (lgAndUp.value) {
    return 5; // عند الشاشات الكبيرة جدًا (lg وما فوق
  } else if (mdAndUp.value) {
    return 4; // عند الشاشات المتوسطة (md وما فوق)
  } else if (smAndUp.value) {
    return 3; // عند الشاشات الصغيرة (sm وما فوق)
  } else {
    return "auto"; // في الشاشات الأصغر من ذلك
  }
});
</script>

<style scoped></style>
