<template>
  <v-card variant="flat" class="rounded-0" color="transparent">
    <v-card
      class="rounded-0"
      min-height="100vh"
      style="background: rgba(48, 60, 67, 0.4)"
    >
      <v-row justify="center">
        <v-col cols="11">
          <v-card variant="flat" color="transparent" class="py-9">
            <v-card-title class="text-center py-md-15 py-5">
              <h4 class="text-h4 text-white font-weight-bold">
                {{ $t("About.AboutCompany") }}
              </h4>
            </v-card-title>
            <v-row class="ma-0">
              <v-col cols="12" md="6">
                <v-card
                  v-for="(item, index) in items"
                  :key="index"
                  class="mb-3 py-1 text-white"
                  variant="text"
                >
                  <!-- <v-card-title>
                    <h5 class="text-h4 font-weight-bold">
                      {{ item.title }}
                    </h5>
                  </v-card-title> -->
                  <v-card-subtitle
                    style="opacity: 1"
                    class="text-wrap"
                    :style="mdAndUp ? 'width : 75%' : 'width : 100%'"
                  >
                    <p style="font-size: 18px" class="font-weight-regular">
                      {{ $t(`About.${item.content}`) }}
                    </p>
                  </v-card-subtitle>
                </v-card>
              </v-col>
              <v-col
                cols="12"
                md="6"
                class="d-flex justify-center align-center"
              >
                <v-img :height="250" src="@/assets/icon/logo-almudeer.svg">
                </v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup>
const items = [
  {
    title: "Where does it come from",
    content: "AboutContentOne",
    icon: "",
  },
  {
    title: "Where does it come from",
    content: "AboutContentTwo",
    icon: "",
  },
  {
    title: "Where does it come from",
    content: "AboutContentThree",
    icon: "",
  },
];
</script>

<style scoped>
.bac::after {
  content: "";
  background-image: url(/src/assets/decors/about-decor-after.png);
  position: absolute;

  bottom: -300px;
  left: -235px;
  width: 641px;
  height: 641px;

  z-index: 999;
}
</style>
