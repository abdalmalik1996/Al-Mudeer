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
          <h4 class="text-h4 font-weight-bold">
            {{ $t("Application.OurApplication") }}
          </h4>
        </v-card-title>
        <v-card-subtitle style="opacity: 1" class="text-center">
          <p class="text-body-1 font-weight-medium">
            {{ $t("Application.OurApplicationSubtitle") }}
          </p>
        </v-card-subtitle>
      </v-col>
      <v-col cols="11">
        <v-row justify="center">
          <v-col cols="12" md="4" class="pl-0 d-flex align-center">
            <v-list bg-color="transparent" class="pl-md-0 pl-3">
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
                    {{ $t(`Application.${item.title}`) }}
                  </h4></v-list-item-title
                >
                <v-list-item-text class="">
                  <p class="mt-1 text-body-1">
                    {{ $t(`Application.${item.text}`) }}
                  </p>
                </v-list-item-text>
                <template v-slot:append>
                  <v-icon size="50">
                    <v-img :src="`/img/app/${item.icon}.png`"></v-img>
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
                    {{ $t(`Application.${item.title}`) }}
                  </h4></v-list-item-title
                >
                <v-list-item-text class="">
                  <p class="mt-1 text-body-1">
                    {{ $t(`Application.${item.text}`) }}
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
    title: "ServiceCharge",
    text: "ServiceChargeText",
    icon: "ServiceCharge",
  },
  {
    title: "DailyHelp",
    text: "DailyHelpText",
    icon: "help",
  },

  {
    title: "Product",
    text: "ProductText",
    icon: "market",
  },
  {
    title: "Services",
    text: "ServicesText",
    icon: "Services",
  },
];
const itemsRight = [
  {
    title: "BuyAndSell",
    text: "BuyAndSellText",
    icon: "saleandbuy",
  },
  {
    title: "SocialGroups",
    text: "SocialGroupsText",
    icon: "SocialGroups",
  },
  {
    title: "InviteGuest",
    text: "InviteGuestText",
    icon: "inviteguest",
  },
  {
    title: "CommonFacilities",
    text: "CommonFacilitiesText",
    icon: "Common",
  },
  {
    title: "Helpdesk",
    text: "HelpdeskText",
    icon: "helpdesk",
  },
];
</script>

<style scoped></style>
