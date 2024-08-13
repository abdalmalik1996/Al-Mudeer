<template>
  <router-view />
</template>

<script setup>
import { register } from "swiper/element/bundle";
import "swiper/element/css/thumbs";
import "swiper/css/navigation";
register();
</script>
