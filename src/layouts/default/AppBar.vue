<template>
  <v-toolbar
    style="position: absolute; top: 0; z-index: 9999"
    class="px-5 decore-bac"
    color="transparent"
    flat
    height="100"
  >
    <v-row justify="center">
      <v-col cols="12" class="d-flex">
        <v-img height="4vh" max-width="84" src="/logo-white.svg" />
        <v-spacer />
        <template #append></template>
        <v-app-bar-nav-icon
          v-if="$vuetify.display.smAndDown"
          class="text-white"
          @click="drawer = !drawer"
        />
        <template v-if="$vuetify.display.mdAndUp">
          <VBtnToggle mandatory v-model="value">
            <VBtn
              variant="text"
              class="text-white text-body-1"
              v-for="(item, i) in items"
              :key="i"
              flat
              :value="item.text"
              :href="`/#${item.icon}`"
            >
              <span>{{ item.text }}</span>

              <template v-slot:prepend>
                <v-icon>
                  <v-img
                    width="40"
                    height="40"
                    :src="`/icon/${item.icon}.svg`"
                  ></v-img>
                </v-icon>
              </template>
            </VBtn>
          </VBtnToggle>
        </template>
      </v-col>
    </v-row>
  </v-toolbar>
</template>
<script setup>
import { ref } from "vue";
import { shallowRef } from "vue";
const drawer = shallowRef(false);

const items = [
  {
    text: "Real Estate",
    icon: "RealEstate",
  },
  {
    text: "Projects",
    icon: "Projects",
  },
  {
    text: "About Us",
    icon: "About",
  },
  {
    text: "Cotact Us",
    icon: "CotactUs",
  },
];
const value = ref("");
</script>
