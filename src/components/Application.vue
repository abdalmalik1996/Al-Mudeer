<template>
  <v-card
    class="pa-0 ma-0 text-white py-15 rounded-0"
    variant="flat"
    image="@/assets/img/Application-bac.png"
    hight="100vh"
  >
    <v-row justify="center">
      <v-col cols="12">
        <v-card-title class="text-center">
          <h4 class="text-h3 font-weight-bold">Our Application</h4>
        </v-card-title>
        <v-card-subtitle style="opacity: 1" class="text-center">
          <p class="text-h5 font-weight-medium">Features of al-mudeer app</p>
        </v-card-subtitle>
      </v-col>
      <v-col cols="10">
        <v-row>
          <v-col cols="12" md="4" class="pl-0 d-flex align-center">
            <v-list bg-color="transparent" class="pl-0">
              <v-list-item
                class="py-5 pl-0"
                v-for="(item, index) in itemsLeft"
                :key="index"
              >
                <v-list-item-title class="text-end"
                  ><h4
                    class="text-h5 font-weight-bold pb-3"
                    style="color: #4682b4; border-bottom: 1px solid white"
                  >
                    {{ item.title }}
                  </h4></v-list-item-title
                >
                <v-list-item-text class="">
                  <p class="mt-3 text-h6">
                    {{ item.text }}
                  </p>
                </v-list-item-text>
                <template v-slot:append>
                  <v-icon size="60">
                    <v-img :src="`/icon/${item.icon}.svg`"></v-img>
                  </v-icon>
                </template>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="4">
            <v-img src="@/assets/img/phone.png" height="804"></v-img>
          </v-col>
          <v-col cols="12" md="4" class="d-flex align-center">
            <v-list bg-color="transparent" class="pl-0">
              <v-list-item
                class="py-5 pl-0"
                v-for="(item, index) in itemsRight"
                :key="index"
              >
                <v-list-item-title class="text-start"
                  ><h4
                    class="text-h5 font-weight-bold pb-3"
                    style="color: #4682b4; border-bottom: 1px solid white"
                  >
                    {{ item.title }}
                  </h4></v-list-item-title
                >
                <v-list-item-text class="">
                  <p class="mt-3 text-h6">
                    {{ item.text }}
                  </p>
                </v-list-item-text>
                <template v-slot:prepend>
                  <v-icon size="60">
                    <v-img :src="`/icon/${item.icon}.svg`"></v-img>
                  </v-icon>
                </template>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
const itemsLeft = [
  {
    title: "Design",
    text: "Stunning design that suits the nature of the work",
    icon: "design",
  },
  {
    title: "Ease of Use ",
    text: "Ease of use for all segments of society",
    icon: "touch",
  },

  {
    title: "Real Time",
    text: "Instant and real-time tracking feature for your property",
    icon: "Time",
  },
  {
    title: "Live Update",
    text: "Live update of all property events to follow them moment by moment",
    icon: "LiveUpdate",
  },
];
const itemsRight = [
  {
    title: "Pay",
    text: "Ability to pay your financial obligations with the click of a button",
    icon: "Pay",
  },
  {
    title: "Laws and Regulations",
    text: "Review all new laws and regulations regulating the property",
    icon: "LawsAndRegulations",
  },
  {
    title: "Live Chat",
    text: "Live chat service to answer any inquiry or submit any complaint",
    icon: "Chat",
  },
];
</script>

<style scoped></style>
