<template>
  <v-card
    variant="flat"
    color="transparent"
    :width="smAndUp ? '400' : '400'"
    height="451"
    class="position-relative d-flex align-end rounded-xl"
  >
    <v-card
      width="400"
      height="374"
      variant="flat"
      color="white"
      class="overflow-visible rounded-xl"
    >
      <div
        class="d-flex justify-center"
        style="
          position: absolute;
          top: -77.5px;
          left: 50%;
          transform: translateX(-50%);
        "
      >
        <v-avatar size="155">
          <v-img :src="`/img/Team/${team.img}`"></v-img>
        </v-avatar>
      </div>

      <div style="margin-top: 80px" class="">
        <v-card-title class="text-center"
          ><h5 class="text-h4 font-weight-medium">
            {{ team?.name }}
          </h5></v-card-title
        >
        <v-card-subtitle
          class="text-center"
          style="opacity: 1 !important ; color: #a52a2a"
        >
          <p class="text-h6 font-weight-medium text-capitalize">
            {{ team?.posation }}
          </p>
        </v-card-subtitle>
        <v-card-subtitle class="text-center mt-8">
          <p class="text-wrap text-body-1 font-weight-medium">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in
          </p>
        </v-card-subtitle>
        <v-card variant="flat" class="mt-16">
          <a :href="team?.linkedin" target="_blank">
            <v-img :height="30" src="@/assets/icon/linkedin.svg"></v-img>
          </a>
        </v-card>
      </div>
    </v-card>
  </v-card>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { smAndUp } = useDisplay();

const props = defineProps({
  team: Object,
});
</script>

<style scoped></style>
