<template>
  <v-toolbar
    style="position: absolute; top: 0; z-index: 9999"
    class="px-5 decore-bac"
    color="transparent"
    flat
    height="100"
  >
    <v-row justify="center">
      <v-col cols="10" class="d-flex align-center">
        <v-img height="4vh" max-width="84" src="/logo.svg" />
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
              :href="`/#${item.path}`"
            >
              <span>{{ $t(`appBar.${item.text}`) }}</span>

              <template v-slot:prepend>
                <v-icon>
                  <v-img
                    width="40"
                    height="40"
                    :src="`/icon/${item.icon}`"
                  ></v-img>
                </v-icon>
              </template>
            </VBtn>
          </VBtnToggle>
        </template>
        <v-menu location="center" style="z-index: 999">
          <template v-slot:activator="{ props }">
            <v-btn class="text-body-1" v-bind="props">
              <v-img
                height="25"
                width="25"
                src="@/assets/icon/language-light.svg"
              ></v-img>
            </v-btn>
          </template>
          <v-list class="mt-15">
            <v-list-item class="pa-0">
              <v-list-item-title class="mb-1"
                ><v-btn
                  variant="text"
                  @click="changeLang('ar')"
                  block
                  class="d-flex justify-center"
                  >العربية</v-btn
                ></v-list-item-title
              >
              <v-list-item-title class="mt-2 px-0"
                ><v-btn variant="text" block @click="changeLang('en')"
                  >English</v-btn
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-toolbar>
</template>
<script setup>
import { ref } from "vue";
import { shallowRef } from "vue";
import { useLocale } from "vuetify/lib/framework.mjs";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
const { locale } = useI18n();
const { current } = useLocale();
import { useGlobalStore } from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const drawer = shallowRef(false);
const router = useRouter();
function changeLang(lang) {
  locale.value = lang;
  globalStore.changeCurrentLocale(lang);
  router.go();
}
const items = [
  {
    text: "RealEstate",
    icon: "house-bar.png",
    path: "real-estate",
  },
  {
    text: "Projects",
    icon: "RealEstate.svg",
    path: "projects",
  },
  {
    text: "AboutUs",
    icon: "About.svg",
    path: "about-Us",
  },
  {
    text: "CotactUs",
    icon: "CotactUs.svg",
    path: "cotact-us",
  },
];
const value = ref("");
</script>
