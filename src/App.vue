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
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
.slide-enter-active,
.slide-leave-active{
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30);
}
</style>
