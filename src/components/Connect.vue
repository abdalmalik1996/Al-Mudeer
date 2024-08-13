<template>
  <v-card
    image="@/assets/img/Connect-bac.png"
    min-height="100vh"
    class="text-white rounded-0"
  >
    <v-card class="h-100 w-100 text-white py-15 rounded-0" color="#07050fe5">
      <v-row class="ma-0" justify="center">
        <v-col cols="12" md="10">
          <v-card-title class="text-center">
            <h3 class="text-h3 font-weight-bold">
              Let’s <span style="color: #4682b4"> Connect </span>
            </h3>
          </v-card-title>
          <v-card-subtitle
            class="text-center d-flex justify-center mt-3"
            style="opacity: 1"
          >
            <p class="text-h5 font-weight-bold w-75 text-wrap">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC
            </p>
          </v-card-subtitle>
          <v-row justify="space-between" class="ma-0 py-9">
            <v-col cols="12" md="6">
              <v-card-title class="pl-0 pb-3">
                <h4 class="text-h3 font-weight-bold">
                  Our Office <span style="color: #4682b4">Info</span>
                </h4>
              </v-card-title>
              <v-list bg-color="transparent">
                <v-list-item
                  class="mb-4 rounded-lg pa-4"
                  v-for="(item, index) in items"
                  :key="index"
                  style="background-color: rgba(255, 255, 255, 0.1)"
                >
                  <v-list-item-title>
                    <h4 class="text-h6 font-weight-bold">{{ item.title }}</h4>
                  </v-list-item-title>
                  <v-list-text>
                    <p class="mt-2 text-body-1">{{ item.text }}</p>
                  </v-list-text>
                  <template v-slot:append>
                    <v-btn variant="text" icon="mdi-arrow-top-right"></v-btn>
                  </template>
                </v-list-item>
              </v-list>
              <v-card-title class="pl-0 mt-1 pb-1">
                <h4 class="text-h3 font-weight-bold">
                  Connect <span style="color: #4682b4">With US</span>
                </h4>
              </v-card-title>
              <v-card-actions class="pl-0 mt-3">
                <v-btn
                  style="background-color: rgba(255, 255, 255, 0.1)"
                  icon="mdi-facebook"
                  class="text-h6 rounded-lg"
                  size="56"
                  href="https://www.facebook.com/AlMudeerOAM"
                  target="_blank"
                ></v-btn>

                <v-btn
                  style="background-color: rgba(255, 255, 255, 0.1)"
                  icon="mdi-instagram"
                  class="text-h6 rounded-lg"
                  size="56"
                  href="https://www.instagram.com/almudeeroam/"
                  target="_blank"
                ></v-btn>
                <v-btn
                  style="background-color: rgba(255, 255, 255, 0.1)"
                  icon="mdi-linkedin"
                  class="text-h6 rounded-lg"
                  size="56"
                  href="https://www.linkedin.com/company/al-mudeer-owners-association-management-services"
                  target="_blank"
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
            <v-col cols="12" md="5">
              <v-card
                class="pa-10 w-100 h-100 text-white d-flex align-center"
                style="background-color: rgba(255, 255, 255, 0.1)"
              >
                <v-form class="w-100">
                  <div class="mb-2 pl-1">
                    <label class="text-h5 text-capitalize" for="full name"
                      >full name</label
                    >
                  </div>
                  <v-text-field variant="outlined" name="full name" />
                  <div class="mb-2 pl-1">
                    <label class="text-h5 text-capitalize" for="full name"
                      >email</label
                    >
                  </div>
                  <v-text-field variant="outlined" name="email" />
                  <div class="mb-2 pl-1">
                    <label class="text-h5 text-capitalize" for="full name"
                      >Message</label
                    >
                  </div>
                  <v-textarea
                    variant="outlined"
                    placeholder="Type your message....."
                    auto-grow
                    rows="5"
                  ></v-textarea>
                  <v-btn block color="#4682B4" size="x-large">Submit</v-btn>
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
const items = [
  {
    title: "You can email us here",
    text: "info@almudeer.ae",
    type: "email",
  },
  {
    title: "Or just call us",
    text: "+971 6 530 2080",
    type: "phoneNumber",
  },
  {
    title: "Location",
    text: "UAE, Sharjah, Al Khan, Beach Tower 1, G-01",
    type: "location",
  },
  {
    title: "Business Hours",
    text: "9:00 am - 6:00pm",
    type: "time",
  },
];
</script>

<style scoped></style>
