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
            <v-card-title class="text-center py-15">
              <h4 class="text-h4 text-white font-weight-bold">
                About <span style="color: #61312a">Company</span>
              </h4>
            </v-card-title>
            <v-row class="ma-0">
              <v-col>
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
                  <v-card-subtitle style="opacity: 1" class="w-75 text-wrap">
                    <p class="text-body-1 font-weight-regular">
                      {{ item.content }}
                    </p>
                  </v-card-subtitle>
                </v-card>
              </v-col>
              <v-col class="d-flex justify-center align-center">
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
      "The first owner’s association management company in Sharjah with an experience difference that is the largest in the market due to our absolute seniority over all companies.",
    icon: "",
  },
  {
    title: "Where does it come from",
    content:
      "The perfect mix of services provided by our company is considered the greatest challenge for any competitor, as the company’s branches provide real estate services, property management, and even the management of owners’ associations and building developers, in addition to providing software that helps in following up on all of the previous at the same time. ",
    icon: "",
  },
  {
    title: "Where does it come from",
    content:
      "The accreditation of our company by government agencies and their reliance on us will always remain one of our greatest points of pride and the emergence of our strength and our serious presence in major projects that demonstrate how proud we are of our pivotal role in the United Arab Emirates.",
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
