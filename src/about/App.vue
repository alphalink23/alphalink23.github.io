<script setup>
import NavBar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <NavBar />

  <div class="section bg-main text-white pt-3">
    <nav class="navbar navbar-expand-lg">
      <div class="container w-75">
        <a
          class="navbar-brand bg-primary rounded-circle px-2 fs-1 fw-bold text-white"
          href="#"
          >ITA</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse w justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav justify-content-evenly w-75 fw-light fs-4">
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Members</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bold" href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
