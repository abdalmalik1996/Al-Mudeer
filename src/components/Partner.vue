<template>
  <v-card image="@/assets/img/Partner-bac.jpg" class="rounded-0">
    <v-card
      class="text-white py-15"
      min-height="100vh"
      color="transparent"
      style="
        background: linear-gradient(
            0deg,
            rgb(3 18 30 / 45%),
            rgb(4 24 40 / 40%)
          ),
          linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
      "
    >
      <v-card-title class="text-center">
        <h4 class="text-h3 font-weight-bold">Our Partner</h4>
      </v-card-title>
      <v-card-subtitle class="text-center" style="opacity: 1">
        <p class="text-h6">Strategic Partners</p>
      </v-card-subtitle>
      <v-row justify="center">
        <v-col cols="12">
          <v-sheet color="transparent">
            <swiper-container
              class="mt-10 d-flex align-center justify-center"
              :slides-per-view="mdAndUp ? 4 : 'auto'"
              :spaceBetween="20"
            >
              <swiper-slide
                v-for="n in 15"
                :key="n"
                :style="smAndUp ? 'width : 300px' : '50%'"
                class="d-flex justify-center"
              >
                <v-card class="pa-5" width="300" variant="text">
                  <v-img :height="300" :src="`/img/Partner/${n}.png`"></v-img>
                </v-card>
              </swiper-slide>
            </swiper-container>
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
              v-for="n in 5"
              :key="n"
            >
              <v-hover>
                <template v-slot="{ isHovering, props }">
                  <v-img
                    class="filter_white cursor-pointer"
                    :height="300"
                    :src="
                      isHovering
                        ? `/img/trustedby/${n}.png`
                        : `/img/trustedby/${n}.png`
                    "
                    c
                    :style="isHovering ? 'transform: scale(1.1)' : ''"
                    style="transition: 1s"
                    v-bind="props"
                  ></v-img>
                </template>
              </v-hover>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { smAndUp, mdAndUp } = useDisplay();
</script>

<style scoped></style>
