<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

import galleryData from "../data/galleryData.json";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      autoplayOpts: {
        delay: 5000,
      },
    };
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
      galleryData,
    };
  },
};
</script>

<template>
  <swiper :modules="modules" class="mySwiper">
    <SwiperSlide v-for="item in galleryData">
      <img class="rounded mb-0" :src="item.imgPath" />
      <div
        class="d-flex mx-auto justify-content-center align-items-center w-50"
      >
        <h4 class="my-auto mt-3 text-white">{{ item.title }}</h4>
      </div>
    </SwiperSlide>
  </swiper>
</template>

<style scoped>
.swiper {
  width: 70vw;
}

img {
  margin: 30px 0;
  width: 60%;
  transition: 0.5s;
  border: none;
}

img:hover {
  transform: scale(1.05);
  border: none;
}
</style>

