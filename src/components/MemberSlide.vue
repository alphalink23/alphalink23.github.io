<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import './style.css';

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import membersData from "../data/membersData";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    };
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
      membersData,
    };
  },
};
</script>
<template>
  <swiper
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    :slides-per-view="3"
    :breakpoints="breakpoints"
    autoplay
  >
    <SwiperSlide v-for="member in membersData">
      <img class="rounded" :src="member.photoSrc" />
      <p class="text-white h5">{{ member.subtitle }}</p>
    </SwiperSlide>
  </swiper>
</template>

<style scoped>
.swiper {
  width: 80vw;
}

.swiper-slide img {
  width: 180px;
  height: 250px;
  transition: 0.5s;
  margin: 30px 0;
  border: 2px solid #000623;
}

.swiper-slide img:hover {
  transform: scale(1.1);
  border: 2px solid #0d6efd;
}
</style>

