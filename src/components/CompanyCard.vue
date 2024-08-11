<template>
  <v-card
    width="338"
    height="516"
    image="@/assets/img/company-card-1.png"
    class="d-flex flex-column align-center py-9 rounded-lg px-5"
    variant="flat"
    color="transparent"
  >
    <v-avatar
      color="#303C43"
      size="160"
      class="flex-column d-flex justify-center align-center pa-0"
    >
      <div style="width: 102px">
        <v-img :height="58" src="@/assets/icon/logo-M.svg"></v-img>
      </div>
      <h6 class="body-2 text-center mt-2">OWNERS ASSOCIATION</h6>
    </v-avatar>
    <v-card-title
      style="border: 2px solid white; border-radius: 5px"
      class="py-5 text-center px-15 text-wrap mt-5"
    >
      <h6 class="text-h6 font-weight-medium">Owners Association Management</h6>
    </v-card-title>
    <!-- <v-card-title class="align-self-start position-relative decore mt-8">
      <h6 class="text-h6" style="padding-left: 25px">Company Address</h6>
    </v-card-title> -->
    <v-avatar class="align-self-start mt-15" style="border: 1px solid white">
      <v-icon class="text-white"> mdi-arrow-top-right </v-icon>
    </v-avatar>
  </v-card>
</template>

<script setup></script>

<style scoped>
.decore::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 34px;
  height: 40px;
  background-color: white;
  clip-path: polygon(
    15px 0,
    50% 0,
    100% calc(100% - 100%),
    calc(100% - 15px) 100%,
    0 100%,
    0 40px
  );
}
</style>
