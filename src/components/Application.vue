<template>
  <v-card
    class="pa-0 ma-0 text-white py-4 rounded-0"
    variant="flat"
    image="@/assets/img/Application-bac.png"
    min-hight="100vh"
    style="background: rgba(7, 5, 15, 0.8)"

  >
    <v-row justify="center">
      <v-col cols="12">
        <v-card-title class="text-center">
          <h4 class="text-h4 font-weight-bold">Our Application</h4>
        </v-card-title>
        <v-card-subtitle style="opacity: 1" class="text-center">
          <p class="text-body-1 font-weight-medium">
            Features of al-mudeer app
          </p>
        </v-card-subtitle>
      </v-col>
      <v-col cols="11">
        <v-row justify="center">
          <v-col cols="12" md="4" class="pl-0 d-flex align-center">
            <v-list bg-color="transparent" class="pl-md-0 pl-3  ">
              <v-list-item
                class="py-1 pl-0 px-0"
                v-for="(item, index) in itemsLeft"
                :key="index"
              >
                <v-list-item-title class="text-end py-0"
                  ><h4
                    class="text-h6 font-weight-bold pb-0"
                    style="color: #d4cece; border-bottom: 1px solid white"
                  >
                    {{ item.title }}
                  </h4></v-list-item-title
                >
                <v-list-item-text class="">
                  <p class="mt-1 text-body-1">
                    {{ item.text }}
                  </p>
                </v-list-item-text>
                <template v-slot:append>
                  <v-icon size="50">
                    <v-img  :src="`/img/app/${item.icon}.png`"></v-img>
                  </v-icon>
                </template>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="3" class="d-flex align-center">
            <v-img
              data-aos="flip-left"
              data-aos-duration="3000"
              src="@/assets/img/phone.png"
              height="60vh"
            ></v-img>
          </v-col>
          <v-col cols="12" md="4" class="d-flex align-center">
            <v-list bg-color="transparent" class="pl-0">
              <v-list-item
                class="py-1 pl-0"
                v-for="(item, index) in itemsRight"
                :key="index"
              >
                <v-list-item-title class="text-start py-0"
                  ><h4
                    class="text-h6 font-weight-bold pb-0"
                    style="color: #d4cece; border-bottom: 1px solid white"
                  >
                    {{ item.title }}
                  </h4></v-list-item-title
                >
                <v-list-item-text class="">
                  <p class="mt-1 text-body-1">
                    {{ item.text }}
                  </p>
                </v-list-item-text>
                <template v-slot:prepend>
                  <v-icon size="50">
                    <v-img :src="`/img/app/${item.icon}.png`"></v-img>
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
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();
const itemsLeft = [
  {
    title: "Service Charge",
    text: "Owners will pay their service charge through this Application.",
    icon: "ServiceCharge",
  },
  {
    title: "Daily help",
    text: "Users will contact all the nearby daily help vendors and avail their offers through our application.",
    icon: "help",
  },

  {
    title: "Product",
    text: "User will see different product and can purchase this product through our application at very low prices.",
    icon: "market",
  },
  {
    title: "Services",
    text: "User will see different services like (Plumber, electrician, cleaner, etc.) and book these vendors through our application.",
    icon: "Services",
  },
];
const itemsRight = [
  {
    title: "Buy and sell",
    text: "These features allow all the users to buy and sell used or unused product within their tower.",
    icon: "saleandbuy",
  },
  {
    title: "Social Groups",
    text: "Create custom groups for functions, hobbies, and others.",
    icon: "SocialGroups",
  },
  {
    title: "Invite guest",
    text: "Can invite guest/groups using phonebook. you can send a “invitation card” via WhatsApp.",
    icon: "inviteguest",
  },
  {
    title: "Common Facilities",
    text: "Configure a list amenities/facilities like clubhouse, swimming pool, gym, etc. in a society.",
    icon: "Common",
  },
  {
    title: "Helpdesk",
    text: "Resident can log complaint choosing category, sub-category, type, etc. Residents can provide description and attach photos of issues.",
    icon: "helpdesk",
  },
];
</script>

<style scoped></style>
