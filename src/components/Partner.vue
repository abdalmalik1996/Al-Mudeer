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
        <h4 class="text-h4 font-weight-bold">
          {{ $t("Partner.OurPartner") }}
        </h4>
      </v-card-title>
      <v-card-subtitle class="text-center" style="opacity: 1">
        <p class="text-body-1">{{ $t("Partner.StrategicPartners") }}</p>
      </v-card-subtitle>
      <v-row justify="center">
        <v-col cols="11">
          <v-sheet color="transparent" class="position-relative">
            <div v-if="mdAndUp" class="bg-red w-100">
              <v-btn
                @click="prev"
                variant="text"
                class="text-h4"
                icon="mdi-chevron-left"
                size="x-large"
                style="position: absolute; left: -50px; top: 50%; z-index: 999"
              ></v-btn>
              <v-btn
                @click="next"
                variant="text"
                class="text-h4"
                icon="mdi-chevron-right"
                size="x-large"
                style="position: absolute; right: -50px; top: 50%; z-index: 999"
              ></v-btn>
            </div>
            <swiper-container
              class="mt-2 d-flex align-center justify-center"
              :slides-per-view="mdAndUp ? 5 : 'auto'"
              :spaceBetween="20"
              :navigation="false"
              ref="swiperRef"
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
                        :height="180"
                        :src="`/img/Partner/${n}.png`"
                        class="img_Partner"
                      ></v-img> </v-card
                  ></template>
                </v-hover>
              </swiper-slide>
            </swiper-container>
            <div v-if="!mdAndUp" class="d-flex justify-center ga-3">
              <v-btn
                @click="prev"
                variant="text"
                class="text-h5 mt-n8"
                icon="mdi-chevron-left"
                size="x-small"
                style="z-index: 999"
              ></v-btn>
              <v-btn
                @click="next"
                variant="text"
                class="text-h5 mt-n8"
                icon="mdi-chevron-right"
                size="x-small"
                style="z-index: 999"
              ></v-btn>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="10">
          <v-card-title class="text-center">
            <h3 class="text-h4 font-weight-bold">
              {{ $t("Partner.TrustedBy") }}
            </h3>
          </v-card-title>
          <v-sheet color="transparent" class="d-flex justify-center flex-wrap">
            <v-card
              class="pa-5"
              width="200"
              variant="text"
              v-for="n in 5"
              :key="n"
            >
              <v-hover>
                <template v-slot="{ isHovering, props }">
                  <v-img
                    class="filter_white cursor-pointer"
                    :height="180"
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
import { ref } from "vue";
import { useDisplay, useLocale } from "vuetify";
const { smAndUp, mdAndUp } = useDisplay();
const { current } = useLocale();
const swiperRef = ref(null);
function next() {
  if (current.value === "en") {
    swiperRef.value.swiper.slideNext();
  } else {
    swiperRef.value.swiper.slidePrev();
  }
}
function prev() {
  if (current.value === "en") {
    swiperRef.value.swiper.slidePrev();
  } else {
    swiperRef.value.swiper.slideNext();
  }
}
</script>

<style scoped>
swiper-container::part(button-prev),
swiper-container::part(button-next) {
  color: #dede !important;
}
</style>
<style>
.img_Partner .v-img__img {
  object-position: bottom !important;
}
</style>
