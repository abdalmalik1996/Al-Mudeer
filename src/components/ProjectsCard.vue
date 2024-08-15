<template>
  <v-card
    width="380"
    height="613"
    class="d-flex flex-column justify-end"
    color="transparent"
    variant="text"
  >
    <v-hover>
      <template v-slot="{ isHovering, props }">
        <v-card
          variant="flat"
          width="380"
          height="400"
          color="#0D1519"
          class="clip-right d-flex align-end"
          v-bind="props"
        >
          <v-img :src="item.img"></v-img>
        </v-card>

        <v-card-title class="text-center" style="border: white 1px solid">
          <h4 class="text-h4 text-capitalize text-white">{{ item?.title }}</h4>
        </v-card-title>
      </template>
    </v-hover>
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
