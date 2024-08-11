<template>
  <v-card image="@/assets/img/Partner-bac.jpg">
    <v-card
      style="
        background: linear-gradient(
            0deg,
            rgba(70, 130, 180, 0.4),
            rgba(70, 130, 180, 0.4)
          ),
          linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
      "
      class="text-white py-15"
      min-height="100vh"
    >
      <v-card-title class="text-center">
        <h4 class="text-h3 font-weight-bold">Our Partner</h4>
      </v-card-title>
      <v-card-subtitle class="text-center" style="opacity: 1">
        <p class="text-h6">Strategic Partners</p>
      </v-card-subtitle>
      <v-row justify="center">
        <v-col cols="12">
          <v-sheet color="transparent" class="d-flex">
            <v-card
              class="pa-5"
              width="300"
              variant="text"
              v-for="n in 7"
              :key="n"
            >
              <v-img :height="300" src="@/assets/img/Partner-6.png"></v-img>
            </v-card>
          </v-sheet>
        </v-col>
        <v-col cols="10">
          <v-card-title class="text-center">
            <h3 class="text-h4 font-weight-medium">Trusted By</h3>
          </v-card-title>
          <v-sheet color="transparent" class="d-flex">
            <v-card
              class="pa-5"
              width="300"
              variant="text"
              v-for="n in 7"
              :key="n"
            >
              <v-img :height="300" src="@/assets/img/Partner-6.png"></v-img>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup></script>

<style scoped></style>
