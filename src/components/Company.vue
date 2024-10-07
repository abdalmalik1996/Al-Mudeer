<template>
  <v-card color="transparent" lass="rounded-0">
    <v-card class="py-5 text-white rounded-0" color="transparent">
      <!-- style="
        background: linear-gradient(
            180deg,
            rgba(57, 23, 18, 0.3) 21.5%,
            rgba(57, 23, 18, 0) 100%
          ),
          linear-gradient(
            0deg,
            rgba(192, 122, 120, 0.4),
            rgba(192, 122, 120, 0.4)
          ),
          linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
      " -->
      <v-row class="ma-0" justify="center">
        <v-col cols="11">
          <v-card-title class="text-center">
            <h4 class="text-h4 font-weight-bold">
              {{ $t("Departments.OurDepartments") }}
            </h4>
          </v-card-title>
          <!-- <v-card-subtitle
            class="text-center mt-2"
            style="opacity: 1 !important"
          >
            <p class="text-h6 font-weight-regular">
              The company's departments in <br />
              Al-Mudeer Company
            </p>
          </v-card-subtitle> -->
          <v-sheet
            color="transparent"
            class="d-flex flex-wrap justify-center ga-10 py-4 align-center"
            style="min-height: 550px !important"
          >
            <v-card
              variant="flat"
              color="transparent"
              v-for="(item, index) in items"
              data-aos="zoom-in"
              :data-aos-delay="index * 2 + '00'"
              :key="index"
            >
              <CompanyCard :item="item" />
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup>
import CompanyCard from "./CompanyCard.vue";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();
import { useDisplay } from "vuetify/lib/framework.mjs";
const { mdAndUp } = useDisplay();
const items = [
  {
    imgBac: "/img/company/1.webp",
    img: "/1.webp",
    icon: "/img/company/OAM.png",
    title: "DepartmentsTitleOne",
    des: "DepartmentsDesOne",
  },
  {
    imgBac: "/img/company/2.webp",
    img: "/2.png",
    icon: "/img/company/RE.png",
    title: "DepartmentsTitleTwo",
    des: "DepartmentsDesTwo",
  },
  {
    imgBac: "/img/company/3.webp",
    img: "/3.png",
    icon: "/img/company/PM.png",
    title: "DepartmentsTitleThree",
    des: "DepartmentsDesThree",
  },
  {
    imgBac: "/img/company/it-2.png",
    img: "/4.webp",
    icon: "/img/company/IT.png",
    title: "DepartmentsTitleFour",
    des: "DepartmentsDesFour",
  },
];
</script>

<style scoped></style>
