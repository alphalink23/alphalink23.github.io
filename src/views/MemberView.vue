<template>
  <div class="section bg-main text-white content">
    <div class="photo-grid">
      <div v-for="(member, index) in members" :key="index" class="col-sm-2">
        <img @click="openModal(member)" :src="member.photoSrc" class="img-fluid rounded-2" alt="...">
        <h3 class="card-title">{{ member.title }}</h3>
        <h5 class="card-title">{{ member.subtitle }}</h5>
        <p class="card-number">{{ member.number }}</p>
      </div>
    </div>

    <!-- Modal Markup -->
    <Modal :isOpen="isModalOpen" @close="closeModal" :modalTitle="modalTitle" :modalContent="modalContent" />
  </div>
</template>

<script>
import Modal from "./modal/Popup.vue"; 
import membersData from "../data/Data.json"; 

export default {
  data() {
    return {
      isModalOpen: false,
      modalTitle: "",
      modalContent: "",
      members: membersData,
    };
  },
  methods: {
    openModal(member) {
      this.isModalOpen = true;
      this.modalTitle = "Modal Title";
      this.modalContent = `Member details for ${member.title}: ${member.subtitle}`;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px; /* Sesuaikan jarak antar foto sesuai kebutuhan */
}
</style>
