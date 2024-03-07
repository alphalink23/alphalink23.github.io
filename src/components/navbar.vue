<template>
  <nav class="navbar navbar-expand-lg w-100">
    <div class="container w-75">
      <RouterLink
        to="/"
        class="text-white h2 text-decoration-none letter nav-title"
        >ALPHALINK</RouterLink
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
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
        <ul class="navbar-nav justify-content-evenly w-75 fw-light fs-5">
          <li class="nav-item">
            <RouterLink
              to="/"
              active-class="fw-bold"
              class="nav-link text-white"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              to="/members"
              active-class="fw-bold"
              class="nav-link text-white"
              >Members</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              to="/gallery"
              active-class="fw-bold"
              class="nav-link text-white"
              >Gallery</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              to="/about"
              active-class="fw-bold"
              class="nav-link text-white"
              >About</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              to="/jadwal"
              active-class="fw-bold"
              class="nav-link text-white"
              >Jadwal</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
