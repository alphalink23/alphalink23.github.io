<script setup>
import GallerySlide from "../components/GallerySlide.vue";
import MemberSlide from "../components/MemberSlide.vue";
import image from "/gallery/3.jpg";

</script>
<template>
  <div class="content">
    <div class="hero text-white pt-3">
      <div class="text-center pt-5 w-75 m-auto">
        <h1 class="mt-5 pt-5 display-5 w-75 m-auto fw-semibold">
          Kelas ter-paling sepuh ngoding asik di PENS
        </h1>
        <p class="text-primary fw-bold fs-4">D4 IT A PENS 2023</p>
        <a href="#gallery">
          <button type="button" class="btn btn-primary rounded-5 fs-5 fw-bold">
            See More
          </button>
        </a>
        <div class="hero-height-filler w-100">
          <br />
        </div>
      </div>
    </div>
    <div class="section bg-primary text-center" id="gallery">
      <h1 class="pt-5 display-1 w-75 m-auto text-white fw-semibold">Gallery</h1>
      <p class="text-white-50 fw-bold fs-4 mb-5">Kenangan-kenangan Kami.</p>
      <!-- Gallery -->
      <GallerySlide />

      <RouterLink
        to="/gallery"
        class="btn btn-dark bg-main text-white rounded-5 mt-5 mb-5 fs-5 fw-bold"
        >More Pictures</RouterLink
      >
    </div>
    <div class="section bg-main text-center">
      <h1 class="pt-5 display-1 w-75 m-auto text-white fw-semibold">Members</h1>
      <p class="text-white-50 fw-bold fs-4 mb-5">
        d4ita > (nct && itzy && twice && bts) = True.
      </p>

      <MemberSlide />

      <RouterLink
        to="/members"
        active-class="fw-bold"
        class="btn btn-primary text-white rounded-5 mt-5 fs-5 fw-bold"
        >More Members</RouterLink>
    </div>
    <div class="bg-main text-center">
      <h1 class="pt-5 display-1 w-75 m-auto text-white fw-semibold">About</h1>
      <p class="text-white-50 fw-bold fs-4 mb-5">This is about D4 IT A</p>
      <div class="container mx-auto row d-flex">
        <div class="col-md-6">
          <img class="d-block w-75" :src="image" alt="Class picture" />
        </div>
        <div class="col-md-6 mb-5 pb-5">
          <div
            class="container text-white d-flex flex-column align-items-center"
          >
            <h3 style="text-align: center">D4 IT A</h3>
            <p style="text-align: justify">
              Kami adalah kelas D4 Teknik Informatika A angkatan 2023 di
              Politeknik Elektronika Negeri Surabaya. Kami memiliki anggota 21
              mahasiswa dan 9 mahasiswi. Kelas D4 IT A adalah kelas yang sangat
              pintar ngoding dan rajin mengerjakan tugas. Alhamdulillah di kelas
              kami tidak ada anggota yang suka ngaret dan bolos. Terbukti kan
              kami raji dan pintar?? Semoga D4 IT A lulus cumlaude semua aamiin
            </p>

            <RouterLink
              to="/about"
              active-class="fw-bold"
              class="btn btn-light rounded-5 mt-5 fs-5 fw-bold"
              >More about us</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
