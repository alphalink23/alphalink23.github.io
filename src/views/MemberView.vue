<script>
import Modal from "./modal/Popup.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<template>
  <div class="section bg-main text-white content">
    <div class="mt-5 w-75 m-auto">
      <div class="text-center mt-5 w-75 m-auto">
        <h1 class="display-5 w-75 m-auto fw-semibold mb-5">Members</h1>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-2">
          <img src="../../assets/foto members/ita1.jpeg" class="img-fluid rounded-2" alt="...">
          <h3 class="card-title">Ketua</h3>
          <h5 class="card-title">Muhammad Rafi Rizaldi</h5>
          <p class="card-number">1</p>
        </div>
      </div>
    </div>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Modal Header</h3>
      <p slot="body">Modal Body Content</p>
    </Modal>
  </div>
</template>
