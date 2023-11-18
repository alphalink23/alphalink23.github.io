<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import './style.css';

// import required modules
import { Navigation } from "swiper/modules";

import galleryData from "../data/galleryData.js";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
      galleryData,
    };
  },
};
</script>
<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <SwiperSlide v-for="item in galleryData">
      <img class="rounded" :src="`src/assets/gallery/${item.imgPath}`" />
      <p class="mt-5 text-white">{{ item.date }}</p>
      <h4 class="text-white">{{ item.title }}</h4>
    </SwiperSlide>
  </swiper>
</template>
