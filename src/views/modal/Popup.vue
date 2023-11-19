<template>
  <div class="modal" :class="{ 'is-active': isOpen }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
        <img v-if="photoSrc" :src="photoSrc" alt="Member Photo" class="modal-photo rounded-2">
        <div>
          <p>Nama:</p>
          <h1 class="title">{{ modalContent }}</h1>
          <p>NRP:</p>
          <h1 class="title">{{ modalNrp }}</h1>
          <p>Tempat, Tanggal Lahir :</p>
          <h1 class="title">{{ modalTitle }}</h1>
          <p>No. HP:</p>
          <h1 class="title">{{ modalContent }}</h1>
          <p>Asal:</p>
          <h1 class="title">{{ modalContent }}</h1>
          <p>Instagram:</p>
          <h1 class="title">{{ modalContent }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    modalTitle: {
      type: String,
      required: true,
    },
    modalContent: {
      type: Object,
      required: true,
    },
    modalNrp: {
      type: String,
      required: true,
    },
    photoSrc: {
      type: String,
      default: "",
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
h1 {
  color: black;
  font-size: 30px;
  font-weight: bold;
}

p {
  font-weight: 600;
  font-size: small;
  color: black;
  margin-bottom: 0%;

}

.box {
  display: grid;
  grid-template-columns: auto 1fr;
  /* Satu kolom untuk tombol, satu kolom untuk konten */
  grid-gap: 20px;
}

.modal-photo {
  width: 400px;
  height: 533px;
  margin-bottom: 10px;
}

.modal {
  display: none;
}

.modal.is-active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-background {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.modal-content {
  background-color: rgb(225, 223, 223);
  max-width: 700px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.modal-close {
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #333;
  font-weight: bolder;
}

.modal-close:before {
  content: 'X';
}
</style>
