<template>
  <div class="section bg-main text-white content">
    <div class="text-center mt-5 w-75 m-auto">
      <h1 class="display-5 w-75 m-auto fw-semibold">Members</h1>
    </div>

    <div class="row justify-content-center">
      <!-- Use v-for to iterate over rows -->
      <div v-for="(row, rowIndex) in members.length / 5" :key="rowIndex" class="row justify-content-center mt-5">
        <!-- Use v-for to iterate over members in the current row -->
        <div v-for="(member, colIndex) in members.slice(rowIndex * 5, (rowIndex + 1) * 5)" :key="colIndex" class="col-sm-2">
          <div class="card">
            <div class="card-body">
              <img :src="member.path" alt="">
              <!-- Display member information -->
              <h1 class="text-danger" stlye="margin-top: -20%">{{ member.nrp }}</h1>
              <h5 class="card-title">{{ member.name }}</h5>
              <p class="card-text">{{ member.jabatan }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h1 class="text-center text-white display-5 w-75 mb-5 m-auto fw-semibold">Members</h1>
  <div class="container photo">
    <div class="photo-grid">
      <div v-for="(member, index) in members" :key="index" class="col-sm-8 mx-3 ">
        <img @click="openModal(member)" :src="member.photoSrc" class="img-fluid rounded-2" style="width: 221px; max-height: 204px;" alt="...">
        <p class="card-title">{{ member.number }}</p>
        <h4 class="card-title">{{ member.subtitle }}</h4>
        <h5 class="card-number">{{ member.title }}</h5>
      </div>
    </div>

    <!-- Modal Markup -->
    <Modal :isOpen="isModalOpen" @close="closeModal" :modalTitle="modalTitle" :modalContent="modalContent" :photoSrc="modalPhotoSrc" />

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
      modalPhotoSrc: "", 
      members: membersData,
    };
  },
  methods: {
    openModal(member) {
      this.isModalOpen = true;
      this.modalTitle = member.title;
      this.modalContent = `${member.subtitle}`;
      this.modalPhotoSrc = member.photoSrc;
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
}
</style>