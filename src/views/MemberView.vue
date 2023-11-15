<template>
  <div class="section bg-main text-white content">
    <!-- ... (existing code) ... -->

    <div class="row justify-content-center">
      <div class="col-sm-2">
        <!-- Add a click event to trigger the modal -->
        <img @click="openModal" src="../../assets/foto members/ita1.jpeg" class="img-fluid rounded-2" alt="...">
        <h3 class="card-title">Ketua</h3>
        <h5 class="card-title">Muhammad Rafi Rizaldi</h5>
        <p class="card-number">1</p>
      </div>
    </div>

    <!-- Modal Markup -->
    <div v-if="isModalOpen" class="modal-mask" @click="closeModal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!-- Modal Content -->
          <h2>Modal Title</h2>
          <p>Member details and additional information go here...</p>

          <!-- Close button -->
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    // Method to open the modal
    openModal() {
      this.isModalOpen = true;
    },
    // Method to close the modal
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped>
/* Add your modal styles here */
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-wrapper {
  width: 100%;
  max-width: 600px;
}

.modal-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.modal-header,
.modal-body,
.modal-footer {
  margin-bottom: 15px;
}
</style>
