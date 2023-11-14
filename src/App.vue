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
</style>
