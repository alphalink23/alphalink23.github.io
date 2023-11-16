<template>
  <div v-if="isModalOpen" class="modal-mask" @click="closeModal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <!-- Close button -->
        <button class="close-button" @click="closeModal">X</button>
        <!-- Modal Content -->
        <h2>Modal Title</h2>
        <p>Member details and additional information go here...</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: Boolean,
    modalTitle: String,
    modalContent: String,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
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
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.modal-header,
.modal-body,
.modal-footer {
  margin-bottom: 15px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bolder;
  color: #000000; /* Sesuaikan warna teks sesuai kebutuhan */
}
</style>