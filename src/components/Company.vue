<template>
  <v-card image="@/assets/img/company-bac.jpg">
    <v-card
      class="py-16 text-white"
      style="
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
            class="d-flex justify-center ga-10 py-16"
          >
            <v-card color="transparent" v-for="n in 4" :key="n">
              <CompanyCard />
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup>
import CompanyCard from "./CompanyCard.vue";
</script>

<style scoped></style>
