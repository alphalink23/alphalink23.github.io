<template>
  <div class="section bg-main text-white content">
    <div>
      <div class="text-center w-75 m-auto">
        <h1 class="display-5 w-75 m-auto fw-semibold">About</h1>
        <p class="text-primary fw-bold fs-4">This is about D4 IT A</p>

        <div class="hero-height-filler w-100">
          <br />
        </div>
      </div>
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-6">
            <img class="d-block w-75" :src="image" alt="Class picture" />
          </div>
          <div class="col-md-6">
            <div
              class="container text-white d-flex flex-column align-items-center"
            >
              <h3 style="text-align: center">D4 IT A</h3>
              <p style="text-align: justify">
                Kami adalah kelas D4 Teknik Informatika A angkatan 2023 di
                Politeknik Elektronika Negeri Surabaya. Kami memiliki anggota 21
                mahasiswa dan 9 mahasiswi. Kelas D4 IT A adalah kelas yang
                sangat pintar ngoding dan rajin mengerjakan tugas. Alhamdulillah
                di kelas kami tidak ada anggota yang suka ngaret dan bolos.
                Terbukti kan kami raji dan pintar?? Semoga D4 IT A lulus
                cumlaude semua aamiin
              </p>
              <RouterLink
                to="/members"
                active-class="fw-bold"
                class="btn btn-light rounded-5 mt-5 fs-5 fw-bold"
                >More Members</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import image from "/gallery/3.jpg";
</script>
