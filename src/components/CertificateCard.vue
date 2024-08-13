<template>
  <v-card
    variant="flat"
    color="#303C43
"
    class="pa-5 text-white d-flex flex-column align-center rounded-xl"
    width="345"
    height="480"
  >
    <v-img
      width="100%"
      :height="214"
      :src="`/img/Certificate/${item.img}.png`"
    ></v-img>
    <v-card-title class="text-center">
      <h5 class="text-h5">Excellence Award</h5>
    </v-card-title>
    <v-card-subtitle class="text-center">
      <p class="text-h6">{{ item.date }}</p>
    </v-card-subtitle>
  </v-card>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style scoped></style>
