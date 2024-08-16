<template>
  <v-hover>
    <template v-slot="{ isHovering, props }">
      <v-card
        width="338"
        :height="isHovering ? '571' : '516'"
        :image="item.imgBac"
        class="d-flex flex-column align-center py-9 rounded-lg px-5 cursor-pointer transition"
        variant="flat"
        color="transparent"
        v-bind="props"
      >
        <v-avatar
          size="160"
          :color="isHovering ? '#FFFF' : '#303C43'"
          :style="isHovering ? 'transform: translateY(100px)' : ''"
          class="flex-column pa-0 transition"
        >
          <div style="height: 57px; width: 101px">
            <v-img
              :src="isHovering ? item?.icon : '/icon/logo-company.svg'"
            ></v-img>
          </div>
          <h6
            :class="isHovering ? 'mt-n3' : 'mt-3'"
            class="text-capitalize"
            style="letter-spacing: 0px !important; font-size: 10px !important"
          >
            {{
              item?.title === "OWNERS ASSOCIATION MANAGEMENT"
                ? "OWNERS ASSOCIATION"
                : item?.title
            }}
          </h6>
        </v-avatar>
        <div v-if="!isHovering">
          <v-card-title
            style="border: 2px solid white; border-radius: 5px"
            class="py-5 text-center px-15 text-wrap mt-5 w-100"
          >
            <h6 class="text-body-1 font-weight-medium">
              {{ item?.title }}
            </h6>
          </v-card-title>
        </div>
        <div
          v-if="isHovering"
          :style="isHovering ? 'transform: translateY(110px)' : ''"
        >
          <v-card-title class="text-center">
            <h6 class="text-h2 font-weight-bold">+ 120</h6>
          </v-card-title>
          <v-card-subtitle style="opacity: 1" class="text-center">
            <p class="text-body-1 font-weight-light">Properly</p>
          </v-card-subtitle>
        </div>
        <!-- <v-card-title class="align-self-start position-relative decore mt-8">
      <h6 class="text-h6" style="padding-left: 25px">Company Address</h6>
    </v-card-title> -->
        <!-- <v-avatar class="align-self-start mt-15" style="border: 1px solid white">
      <v-icon class="text-white"> mdi-arrow-top-right </v-icon>
    </v-avatar> -->
      </v-card>
    </template>
  </v-hover>
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
.filter-white {
  filter: brightness(100%) saturate(0%);
}
.transition {
  transition: 0.9s;
}
</style>
