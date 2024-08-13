<template>
  <v-card class="py-0" image="@/assets/img/Teame-bac.jpg">
    <v-card
      min-height="100vh"
      class="text-white py-15"
      style="background: rgba(7, 5, 15, 0.6)"
    >
      <v-row justify="center" class="ma-0">
        <v-col cols="10">
          <v-card-title class="text-center text-h3"
            ><h4>The Executive Team</h4>
          </v-card-title>
          <v-card-subtitle class="text-center text-h5" style="opacity: 1">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has
            </p>
          </v-card-subtitle>
          <v-sheet class="py-9 d-flex justify-center ga-15" color="transparent">
            <v-card
              variant="flat"
              color="transparent"
              style=""
              v-for="(item, index) in teams"
              :key="index"
              :style="index === 1 ? 'transform: translateY(50px)' : ''"
            >
              <TeameCard :team="item" />
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup>
import TeameCard from "./TeameCard.vue";
const teams = [
  {
    img: "1.png",
    name: "Feras Al Helo",
    posation: "CEO",
    linkedin: "https://www.linkedin.com/in/feras-alhelo-8458bba2/",
  },
  {
    img: "2.png",
    name: "Mohammad Hani Dalleh",
    posation: "General Manager",
    linkedin: "https://www.linkedin.com/in/mohammad-hani-dalleh-2b2a4a136/",
  },
  {
    img: "3.png",
    name: "Hisham Bekhit",
    posation: "owners association manager",
    linkedin: "https://www.linkedin.com/in/hisham-bekhit-678a53224/",
  },
];
</script>

<style scoped></style>
