<template>
  <v-card variant="flat" image="@/assets/img/About-bac.png">
    <v-card min-height="100vh" style="background: rgba(48, 60, 67, 0.4)">
      <v-row justify="center">
        <v-col cols="10">
          <v-card variant="flat" color="transparent" class="py-9">
            <v-card-title class="text-center py-15">
              <h4 class="text-h3 text-white font-weight-bold">
                About <span style="color: #4682b4">Company</span>
              </h4>
            </v-card-title>
            <v-row>
              <v-col>
                <v-card
                  v-for="(item, index) in items"
                  :key="index"
                  class="mb-4 py-4 text-white"
                  variant="text"
                >
                  <v-card-title>
                    <h5 class="text-h4 font-weight-bold">
                      {{ item.title }}
                    </h5>
                  </v-card-title>
                  <v-card-subtitle style="opacity: 1" class="w-75 text-wrap">
                    <p class="text-h6 font-weight-regular">
                      {{ item.content }}
                    </p>
                  </v-card-subtitle>
                </v-card>
              </v-col>
              <v-col class="d-flex align-center">
                <v-img :height="400" src="@/assets/icon/logo-almudeer.svg">
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
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    icon: "",
  },
  {
    title: "Where does it come from",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    icon: "",
  },
  {
    title: "Where does it come from",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
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
