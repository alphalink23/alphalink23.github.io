<script setup>
import galleryData from "../data/galleryData.json";
import GallerySlide from "../components/GallerySlide.vue";
</script>

<template>
  <div class="section bg-main text-white content">
    <div class="text-center mt-5 w-75 m-auto">
      <h1 class="display-5 w-75 m-auto mb-5 fw-semibold">Gallery</h1>
    </div>
    <div class="container">
        <div class="row d-flex justify-content-center">
        <div class="col-md-4" v-for="item in galleryData" :key="index">
          <img
            class="d-block w-100 rounded"
            :src="`${item.imgPath}`"
          />
          <p class="text-end">{{ item.date }}</p>
          <h4 class="mb-5 text-center">{{ item.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
