<template>
  <v-hover>
    <template v-slot="{ isHovering, props }">
      <v-card
        variant="flat"
        color="#303c4359"
        class="pa-5 text-white d-flex flex-column align-center rounded-xl cursor-pointer"
        width="300"
        height="350"
        v-bind="props"
        :style="isHovering ? 'transform : scale(0.99) ' : ''"
        style="transition: 0.8s"
        @click="openDialog(item.img)"
      >
        <v-img
          width="100%"
          :height="214"
          :src="`/img/Certificate/${item.img}.webp`"
        >
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="grey-lighten-4"
                indeterminate
              ></v-progress-circular>
            </div>
          </template>
        </v-img>
        <v-card-title class="text-center">
          <h5 class="text-h5">{{ $t("Certificate.ExcellenceAward") }}</h5>
        </v-card-title>
        <v-card-subtitle class="text-center">
          <p class="text-h6">{{ item.date }}</p>
        </v-card-subtitle>
      </v-card>
      <v-dialog v-model="dialog" max-width="800">
        <v-btn
          variant="text"
          style="transform: translate(15px, 60px); z-index: 999"
          icon="mdi-close"
          @click="dialog = false"
        ></v-btn>
        <v-img :src="`/img/Certificate/${item.img}.webp`" />
      </v-dialog>
    </template>
  </v-hover>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  item: Object,
});
const dialog = ref(false);
const dialogImage = ref("");
function openDialog(img) {
  dialog.value = true;
}
</script>

<style scoped></style>
