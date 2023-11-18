<script setup>
import Footer from "./components/footer.vue";
import NavBar from "./components/navbar.vue";
</script>

<template>
  <div>
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<style scoped lang="css">
*{
  background-color: #000623;
}
.slide-enter-active,
.slide-leave-active{
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30);
}

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
