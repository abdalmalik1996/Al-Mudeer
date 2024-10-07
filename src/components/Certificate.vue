<template>
  <v-card image="@/assets/img/Certificate-bac.png" class="rounded-0">
    <v-card
      class="text-white rounded-0 py-5"
      min-height="100vh"
      style="background: rgba(7, 5, 15, 0.8)"
    >
      <v-row justify="center" class="ma-0">
        <v-col cols="11">
          <v-card-title class="text-center">
            <h3 class="text-h4 font-weight-bold">
              {{ $t("Certificate.Certificate") }}
            </h3>
          </v-card-title>
          <v-card-subtitle
            class="w-100 d-flex justify-center"
            style="opacity: 1"
          >
            <p
              class="text-h6 text-wrap text-center"
              :style="mdAndUp ? 'width : 50%' : 'width : 100%'"
            >
              {{ $t("Certificate.CertificateSubtitle") }}
            </p>
          </v-card-subtitle>
          <v-sheet color="transparent" class="py-5 position-relative">
            <div v-if="mdAndUp">
              <v-btn
                @click="prev"
                variant="text"
                class="text-h4"
                icon="mdi-chevron-left"
                size="x-large"
                style="position: absolute; left: -70px; top: 50%; z-index: 999"
              ></v-btn>
              <v-btn
                @click="next"
                variant="text"
                class="text-h4"
                icon="mdi-chevron-right"
                size="x-large"
                style="position: absolute; right: -70px; top: 50%; z-index: 999"
              ></v-btn>
            </div>

            <swiper-container
              id="swiper_container"
              class="mt-10 d-flex align-center justify-center"
              :slides-per-view="slidesPerView"
              :space-between="20"
              @swiper="onSwiper"
              ref="swiperRef"
              navigation="false"
            >
              <swiper-slide
                v-for="(item, index) in itemsCertificate"
                :key="index"
                :style="mdAndUp ? 'width: 345px' : 'width: 100%'"
                class="d-flex justify-center"
              >
                <CertificateCard :item="item" />
              </swiper-slide>
            </swiper-container>
            <div v-if="!mdAndUp" class="d-flex justify-center mt-5 ga-3">
              <v-btn
                @click="prev"
                variant="text"
                class="text-h4"
                icon="mdi-chevron-left"
                size="x-large"
                style="z-index: 999"
              ></v-btn>
              <v-btn
                @click="next"
                variant="text"
                class="text-h4"
                icon="mdi-chevron-right"
                size="x-large"
                style="z-index: 999"
              ></v-btn>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup>
import CertificateCard from "./CertificateCard.vue";
import { useDisplay } from "vuetify";
import { ref } from "vue";
import { useLocale } from "vuetify";
import { computed } from "vue";

const { current } = useLocale();
const swiperRef = ref(null);
const { smAndUp, mdAndUp, lgAndUp } = useDisplay();
const itemsCertificate = [
  { img: 3, date: "2020" },
  { img: 4, date: "2013" },
  { img: 5, date: "2018" },
  { img: 6, date: "2019" },
  { img: 7, date: "2012" },
  { img: 8, date: "2023" },
];

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

<style scoped>
swiper-container::part(button-prev),
swiper-container::part(button-next) {
  color: #dedede !important;
  display: none;
}
</style>
