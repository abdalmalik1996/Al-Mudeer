<template>
  <v-card
    image="@/assets/img/Connect-bac.png"
    min-height="100vh"
    class="text-white rounded-0"
  >
    <v-card
      min-height="100vh"
      class="h-100 w-100 text-white py-6 rounded-0 d-flex align-center"
      color="#07050fe5"
    >
      <v-row class="ma-0" justify="center">
        <v-col cols="12" md="10">
          <v-card-title class="text-center">
            <h3 class="text-h4 font-weight-bold">
              {{ $t("Connect.Lets") }}
              <span style="color: #a52a2a"> {{ $t("Connect.Connect") }} </span>
            </h3>
          </v-card-title>

          <!-- <v-card-subtitle
            class="text-center d-flex justify-center mt-2"
            style="opacity: 1"
          >
            <p class="text-h6 font-weight-bold w-75 text-wrap">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC
            </p>
          </v-card-subtitle> -->
          <v-row justify="space-between" class="ma-0 py-9">
            <v-col cols="12" md="6">
              <v-card-title class="pl-0 pb-3">
                <h4 class="text-h4 font-weight-bold">
                  {{ $t("Connect.OurOffice") }}
                  <span style="color: #a52a2a">{{ $t("Connect.Info") }}</span>
                </h4>
              </v-card-title>
              <v-list bg-color="transparent" style="height: auto !important">
                <v-list-item
                  class="mb-3 rounded-lg pa-3"
                  v-for="(item, index) in items"
                  :key="index"
                  style="background-color: rgba(255, 255, 255, 0.1)"
                  data-aos="fade-down-right"
                  data-aos-anchor-placement="top-bottom"
                  :data-aos-delay="index * 2 + '00'"
                >
                  <v-list-item-title>
                    <h4 class="text-body-1 font-weight-bold">
                      {{ $t(`Connect.${item.title}`) }}
                    </h4>
                  </v-list-item-title>
                  <v-list-text>
                    <p
                      class="mt-1 text-body-2"
                      v-if="item.type !== 'phoneNumber'"
                    >
                      {{ $t(`Connect.${item.text}`) }}
                    </p>
                    <p
                      class="mt-1 text-body-2"
                      v-if="item.type === 'phoneNumber'"
                    >
                      <span dir="ltr" lang="ar" style="direction: ltr">
                        {{ $t(`Connect.${item.text}`) }}
                      </span>
                    </p>
                  </v-list-text>
                  <template v-slot:append>
                    <v-btn variant="text" icon="mdi-arrow-top-right"></v-btn>
                  </template>
                </v-list-item>
              </v-list>
              <!-- <v-card-title class="pl-0 mt-1 pb-1">
                <h4 class="text-h3 font-weight-bold">
                  Connect <span style="color: #a52a2a">With US</span>
                </h4>
              </v-card-title> -->
              <v-card-actions class="pl-0 mt-2">
                <v-btn
                  style="background-color: rgba(255, 255, 255, 0.1)"
                  icon="mdi-facebook"
                  class="text-body-1 rounded-lg"
                  size="56"
                  href="https://www.facebook.com/AlMudeerOAM"
                  target="_blank"
                  data-aos="fade-down-right"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="1000"
                ></v-btn>

                <v-btn
                  style="background-color: rgba(255, 255, 255, 0.1)"
                  icon="mdi-instagram"
                  class="text-body-1 rounded-lg"
                  size="56"
                  href="https://www.instagram.com/almudeeroam/"
                  target="_blank"
                  data-aos="fade-down-right"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="2000"
                ></v-btn>
                <v-btn
                  style="background-color: rgba(255, 255, 255, 0.1)"
                  icon="mdi-linkedin"
                  class="text-body-1 rounded-lg"
                  size="56"
                  href="https://www.linkedin.com/company/al-mudeer-owners-association-management-services"
                  target="_blank"
                  data-aos="fade-down-right"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="3000"
                ></v-btn>
              </v-card-actions>
              <!-- <v-card-text class="pl-0">
                <p class="text-h5">
                  Lorem ipsum dolor sit amet consectetur. Enim massa velit id
                  volutpat fermentum sed praesent. Orci a faucibus velit nisi
                  felis placerat quam diam diam.
                </p>
              </v-card-text> -->
            </v-col>
            <v-col cols="12" md="4">
              <v-card
                class="pa-5 w-100 h-100 text-white d-flex align-center"
                style="background-color: rgba(255, 255, 255, 0.1)"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <v-form class="w-100">
                  <div class="mb-2 pl-1">
                    <label class="text-h6 text-capitalize" for="full name">
                      {{ $t("Connect.fullName") }}
                    </label>
                  </div>
                  <v-text-field variant="outlined" name="full name" />
                  <div class="mb-2 pl-1">
                    <label class="text-h6 text-capitalize" for="full name">
                      {{ $t("Connect.email") }}
                    </label>
                  </div>
                  <v-text-field variant="outlined" name="email" />
                  <div class="mb-2 pl-1">
                    <label class="text-h6 text-capitalize" for="full name">{{
                      $t("Connect.Message")
                    }}</label>
                  </div>
                  <v-textarea
                    variant="outlined"
                    :placeholder="$t('Connect.Typeyourmessage')"
                    auto-grow
                    rows="5"
                  ></v-textarea>
                  <v-btn block color="#a52a2a" size="large">{{
                    $t("Connect.Submit")
                  }}</v-btn>
                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup>
import Aos from "aos";
import "aos/dist/aos.css";
const items = [
  {
    title: "ConnectOne",
    text: "emailInfo",
    type: "email",
  },
  {
    title: "ConnectTwo",
    text: "phoneNumber",
    type: "phoneNumber",
  },
  {
    title: "ConnectThree",
    text: "location",
    type: "location",
  },
  {
    title: "ConnectFour",
    text: "BusinessHours",
    type: "time",
  },
];
</script>

<style scoped></style>
