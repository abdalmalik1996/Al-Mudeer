<template>
  <v-card image="@/assets/img/projects-bac.jpg">
    <v-card
      class="py-15 text-white"
      min-height="100vh"
      style="background: rgba(48, 60, 67, 0.6)"
    >
      <v-row class="ma-0" justify="center">
        <v-col cols="10">
          <v-card-title class="text-center">
            <h4 class="text-h3 font-weight-bold">Our Projects</h4>
          </v-card-title>
          <v-card-subtitle style="opacity: 1" class="text-center mt-4">
            <p class="text-h6 font-weight-medium">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has
            </p>
          </v-card-subtitle>
          <v-sheet color="transparent" class="d-flex justify-center ga-10">
            <v-card variant="text" color="transparent" v-for="n in 4" :key="n">
              <ProjectsCard />
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup>
import ProjectsCard from "./ProjectsCard.vue";
</script>

<style scoped></style>
