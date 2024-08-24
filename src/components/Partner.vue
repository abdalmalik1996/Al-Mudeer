<template>
  <v-card color="transparent" class="rounded-0">
    <v-card
      class="text-white py-9"
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
        <h4 class="text-h4 font-weight-bold">Our Partner</h4>
      </v-card-title>
      <v-card-subtitle class="text-center" style="opacity: 1">
        <p class="text-body-1">Strategic Partners</p>
      </v-card-subtitle>
      <v-row justify="center">
        <v-col cols="12">
          <v-sheet color="transparent">
            <swiper-container
              class="mt-2 d-flex align-center justify-center"
              :slides-per-view="mdAndUp ? 4 : 'auto'"
              :spaceBetween="20"
              navigation="true"
            >
              <swiper-slide
                v-for="n in 8"
                :key="n"
                :style="smAndUp ? 'width : 250px' : '50%'"
                class="d-flex justify-center"
              >
                <v-hover>
                  <template v-slot="{ isHovering, props }">
                    <v-card
                      v-bind="props"
                      class="pa-5 cursor-pointer"
                      width="250"
                      variant="text"
                    >
                      <v-img
                        :style="isHovering ? 'transform: scale(1.1)' : ''"
                        style="transition: 1s"
                        :height="200"
                        :src="`/img/Partner/${n}.png`"
                      ></v-img> </v-card
                  ></template>
                </v-hover>
              </swiper-slide>
            </swiper-container>
          </v-sheet>
        </v-col>
        <v-col cols="10">
          <v-card-title class="text-center">
            <h3 class="text-h4 font-weight-bold">Trusted By</h3>
          </v-card-title>
          <v-sheet color="transparent" class="d-flex justify-center">
            <v-card
              class="pa-5"
              width="250"
              variant="text"
              v-for="n in 5"
              :key="n"
            >
              <v-hover>
                <template v-slot="{ isHovering, props }">
                  <v-img
                    class="filter_white cursor-pointer"
                    :height="250"
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

<style scoped>
swiper-container::part(button-prev),
swiper-container::part(button-next) {
  color: #dede !important;
}
</style>
