<script setup>
import Project from './components/Project.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Maintenance from './components/Maintenance.vue';
</script>

<template>
  <header>
  </header>

  <main>
    <router-view></router-view>
    <Maintenance />
  </main>
</template>

<style scoped>

</style>
