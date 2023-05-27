<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Foot from "./components/Foot.vue";
import { ref, provide } from "vue";

const isLogoVisible = ref(true);
provide("isLogoVisible", isLogoVisible);
</script>

<template>
  <Header />
  <Main />
  <Foot />
</template>

<style scoped></style>
