<template>
  <v-card
    width="338"
    height="516"
    :image="item.imgBac"
    class="d-flex flex-column align-center py-9 rounded-lg px-5"
    variant="flat"
    color="transparent"
  >
    <div style="width: 160px">
      <v-img :height="160" :src="item?.icon"></v-img>
    </div>
    <v-card-title
      style="border: 2px solid white; border-radius: 5px"
      class="py-5 text-center px-15 text-wrap mt-5 w-100"
    >
      <h6 class="text-body-1 font-weight-medium">{{ item?.title }}</h6>
    </v-card-title>
    <!-- <v-card-title class="align-self-start position-relative decore mt-8">
      <h6 class="text-h6" style="padding-left: 25px">Company Address</h6>
    </v-card-title> -->
    <!-- <v-avatar class="align-self-start mt-15" style="border: 1px solid white">
      <v-icon class="text-white"> mdi-arrow-top-right </v-icon>
    </v-avatar> -->
  </v-card>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

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
