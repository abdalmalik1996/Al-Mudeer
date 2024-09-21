<template>
  <v-sheet
    color="transparent"
    class="position-relative rounded-0"
    :style="{ height: calculatedHeight }"
  >
    <v-card
      color="#090F13"
      min-height="100vh"
      class="text-white rounded-0"
      :style="mdAndUp ? 'padding-bottom: 200px' : 'padding-bottom: 320px'"
    >
      <v-row justify="end" class="ma-0">
        <v-col cols="12" md="6" class="d-flex align-center">
          <v-card variant="text">
            <v-card-title class="py-5">
              <h4 class="text-h4 font-weight-bold">
                {{ $t("AboutCompany.WhosAlMudeer") }}
              </h4>
            </v-card-title>
            <v-card-subtitle class="text-wrap" style="opacity: 1">
              <p class="text-body-1 font-weight-light mb-7">
                <span
                  v-if="current === 'en'"
                  class="text-h6 text-white font-weight-bold"
                  >Al Mudeer Company </span
                >{{ $t("AboutCompany.itemOne") }}
              </p>
              <p class="text-body-1 font-weight-light mb-7">
                <span
                  v-if="current === 'en'"
                  class="text-h6 text-white font-weight-bold"
                >
                  Al Mudeer
                </span>
                {{ $t("AboutCompany.itemTwo") }}
              </p>
              <p class="text-body-1 font-weight-light mb-7">
                <span
                  v-if="current === 'en'"
                  class="text-h6 text-white font-weight-bold"
                >
                  Our extensive experience,
                </span>
                {{ $t("AboutCompany.itemThree") }}
              </p>
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col class="d-flex align-center" cols="12" md="5">
          <v-img src="@/assets/img/AboutCompany.png"></v-img>
        </v-col>
      </v-row>
    </v-card>

    <v-card
      variant="flat"
      color="transparent"
      class="pa-0 w-100 rounded-0"
      style="transform: translateY(-50%); z-index: 9999; position: absolute"
    >
      <v-row justify="center" class="ma-0 pa-0 w-100">
        <v-col cols="11" class="py-0">
          <v-sheet
            class="rounded-xl d-flex justify-lg-space-between align-center py-5"
            color="#1A2226"
            variant="flat"
          >
            <v-row class="ma-0">
              <v-col
                cols="12"
                sm="6"
                md="3"
                v-for="(item, index) in itemsCounter"
                :key="index"
                v-intersect="{
                  handler: onIntersect,
                  options: {
                    threshold: [0, 0.5, 1.0],
                  },
                }"
              >
                <v-card
                  variant="text"
                  class="text-white text-center d-flex flex-column align-center"
                >
                  <v-img
                    width="85"
                    :height="85"
                    :src="`/icon/${item.icon}`"
                  ></v-img>
                  <v-card-title>
                    <h5 class="text-h4 text-md-h4 font-weight-bold">
                      <vue3-autocounter
                        ref="counter"
                        :startAmount="0"
                        :endAmount="item.number"
                        :duration="4"
                        :prefix="item.prefix"
                        :suffix="item.suffix"
                        :decimals="item.decimals"
                        :decimalSeparator="item.decimalSeparator"
                        :autoinit="false"
                      />
                    </h5>
                  </v-card-title>
                  <v-card-subtitle
                    class="d-flex justify-center"
                    style="opacity: 1"
                  >
                    <p
                      :style="mdAndUp ? 'width : 90%' : 'width : 100%'"
                      class="text-wrap text-center text-body-1 font-weight-medium"
                    >
                      {{ item.title }}
                    </p>
                  </v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
    <Company />
  </v-sheet>
</template>

<script setup>
import { useDisplay } from "vuetify";
import Company from "@/components/Company.vue";
import { watch, ref } from "vue";

const { smAndUp, mdAndUp } = useDisplay();
const isIntersecting = ref(false);
const counter = ref(null);
const show = ref(false);
const itemsCounter = [
  {
    title: "Value Of managed assets",
    number: 5.2,
    icon: "Value.svg",
    suffix: "B",
    prefix: "",
    decimalSeparator: ".",
    decimals: "1",
  },
  {
    title: "Employees Under Al-Mudeer Managment",
    number: 400,
    prefix: "+ ",
    suffix: "",
    icon: "Employees.svg",
    decimalSeparator: "",
    decimals: "0",
  },
  {
    title: "Units Under Al-Mudeer Managment",
    number: 15,
    prefix: "+ ",
    suffix: " K",
    icon: "house.svg",
    decimalSeparator: "",
    decimals: "0",
  },
  {
    title: "AL-Mudeer Projects",
    number: 40,
    prefix: "+ ",
    suffix: "",
    icon: "Units.svg",
    decimalSeparator: "",
    decimals: "0",
  },
];
function onIntersect(intersecting, entries, observer) {
  isIntersecting.value = intersecting;
}
watch(
  () => isIntersecting.value,
  () => {
    if (!show.value && isIntersecting.value === true) {
      // Start each counter
      counter.value.forEach((counterRef) => {
        counterRef.start();
      });
      show.value = true;
    }
  }
);
</script>

<style scoped></style>
