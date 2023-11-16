<template>
  <h1 class="text-center text-white display-5 w-75 mb-5 m-auto fw-semibold">Members</h1>
  <div class="container photo">
    <div class="photo-grid">
      <div v-for="(member, index) in members" :key="index" class="col-sm-7 mx-3 ">
        <img @click="openModal(member)" :src="member.photoSrc" class="img-fluid rounded-2" style="width: 221px;" alt="...">
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
.photo {
  color: white;
}

.photo-grid {
  margin-left: 5%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  /* Sesuaikan jarak antar foto sesuai kebutuhan */
}
</style>
