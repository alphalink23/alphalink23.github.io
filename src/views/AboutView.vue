<script setup>
import NavBar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
</script>

<template>
    
    <div class="section bg-main text-white pt-3">
      <NavBar />
    <div class="text-center mt-5 w-75 m-auto">
      <h1 class="display-5 w-75 m-auto fw-semibold">About</h1>
      <p class="text-primary fw-bold fs-4">This is about D4 IT A</p>

      <div class="hero-height-filler w-100">
        <br />
      </div>
    </div>
    <!-- end navbar  -->
    <!-- content -->
    <div class="container">
      <div class="row d-flex">
        <div class="col-md-6">
          <img
            class="d-block w-75"
            src="https://i.ytimg.com/vi/Tt-6Q5ri2H4/mqdefault.jpg"
            alt="Class picture"
          />
        </div>
        <div class="col-md-6">
          <div
            class="container text-white d-flex flex-column align-items-center"
          >
            <h3 style="text-align: center">D4 IT A</h3>
            <p style="text-align: justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              posuere lobortis libero ac viverra. Proin massa massa, dapibus
              dictum leo vel, maximus lobortis nunc. Integer ut efficitur metus,
              non posuere magna. Morbi tempor nibh ex, non feugiat tortor
              tristique eget. Nullam laoreet nulla et mi dignissim, in fringilla
              ex placerat. Nulla nec malesuada massa, eu sollicitudin arcu.
            </p>
            <button type="button" class="btn btn-light rounded-5 fs-5 fw-bold">
              Our Members
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <Footer />
</template>
