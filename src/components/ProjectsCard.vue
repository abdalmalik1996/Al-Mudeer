<template>
  <v-card
    width="380"
    height="613"
    class="d-flex align-end"
    color="transparent"
    variant="text"
  >
    <v-card
      variant="flat"
      width="380"
      height="520"
      color="#0D1519"
      class="clip-right"
    >
      <v-img height="362" :src="item.img"></v-img>
      <v-card-title class="text-center py-9 mt-5">
        <h4 class="text-h4 text-capitalize">{{ item?.title }}</h4>
      </v-card-title>
    </v-card>
  </v-card>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style scoped>
.clip-right {
  clip-path: polygon(
    50% 0%,
    89% 0,
    100% 11%,
    100% 70%,
    100% 100%,
    50% 100%,
    0 100%,
    0% 70%,
    0% 35%,
    0 0
  );
}
</style>
