<template>
  <v-card
    width="250"
    height="550"
    class="d-flex flex-column justify-end rounded-xl"
    color="transparent"
    variant="text"
  >
    <v-hover>
      <template v-slot="{ isHovering, props }">
        <v-card
          variant="flat"
          width="250"
          height="350"
          class="d-flex align-end rounded-0 cursor-pointer rounded-lg overflow-visible"
          v-bind="props"

          style="transition: 0.5s"
          color="rgba(7, 5, 15, 0.8)"
        >
          <v-img width="250"  :src="item?.img" :style="isHovering ? 'transform: scale(1.2) translateY(-40px);' : ''">
            <!-- <template v-slot:placeholder>
              <v-skeleton-loader
                class="mx-auto border"
                height="350"
                color="#a52a2a45"
                theme="image"
              ></v-skeleton-loader>
            </template> -->
          </v-img>
        </v-card>
        <v-card-title
          :style="isHovering ? 'opacity: 0.5;' : 'opacity: 0'"
          class="text-center mt-2"
        >
          <h4 class="text-h5 text-capitalize text-white">{{ item?.title }}</h4>
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
