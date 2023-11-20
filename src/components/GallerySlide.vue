<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import './style.css';

// import required modules
import { Navigation } from "swiper/modules";

import galleryData from "../data/galleryData.json";

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
      <img class="rounded" :src="item.imgPath" />
      <p class="mt-5 text-white">{{ item.date }}</p>
      <h4 class="text-white">{{ item.title }}</h4>
    </SwiperSlide>
  </swiper>
</template>

<style scoped>
.swiper{
  width: 70vw;
}

img{
  margin: 30px 0;
  width: 80%;
  transition: 0.5s;
  border: 2px solid #0d6efd;
}

img:hover{
  transform: scale(1.05);
  border: 2px solid white;

}
</style>