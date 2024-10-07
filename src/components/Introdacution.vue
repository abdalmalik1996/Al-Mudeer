<template>
  <v-sheet :height="mdAndUp ? '100vh' : '80vh'">
    <v-card
      class="position-relative pa-0 h-100 d-flex align-end rounded-0 card-img"
      image="@/assets/img/back-sky.png"
    >
      <div
        style="position: absolute; left: 0px; z-index: -1; width: 100%"
        class="d-flex justify-center"
        data-aos="fade-up"
        data-aos-duration="3000"
        :style="mdAndUp ? 'top: 15vh' : 'top: 30vh;'"
      >
        <v-img
          width="100%"
          :height="mdAndUp ? '35vh' : '20vw'"
          src="@/assets/icon/logo-group.svg"
        ></v-img>
        <!-- src="/img/almudeer_white-word.png" -->

        <!-- <v-parallax src="@/assets/icon/logo-group.svg"></v-parallax> -->
      </div>

      <v-img
        class="img-building img-fixed"
        style="z-index: 9"
        cover
        height="80vh"
        src="@/assets/img/Bg-cut.png"
      ></v-img>
      <!-- <v-parallax
        cover
        height="99vh"
        src="@/assets/img/buildings.png"
        class="test"
      ></v-parallax> -->
      <div
        style="
          z-index: 10;
          position: absolute;
          left: 50%;
          bottom: 10px;
          transform: translateX(-50%);
        "
      >
        <v-img width="50" height="50" src="@/assets/icon/mouse.svg"></v-img>
      </div>
    </v-card>
  </v-sheet>
</template>

<script setup>
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();
import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();
</script>

<style>
.img-building .v-img__img {
  object-position: bottom !important;
}
.test .v-img__img {
  object-position: top;
}
.img-fixed .v-img__img {
  position: fixed;
  top: 20vh;
}
.card-img .v-card__image .v-img__img {
  position: fixed;
}
</style>
