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
              v-for="n in 3"
              :key="n"
              :style="n === 2 ? 'transform: translateY(50px)' : ''"
            >
              <TeameCard />
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup>
import TeameCard from "./TeameCard.vue";
</script>

<style scoped></style>
