<template>
  <HeaderSection />
  <router-view />
</template>

<script>
import HeaderSection from "./components/Header.vue";
import Hero from "./components/Hero.vue";

export default {
  components: {
    HeaderSection,
    Hero,
  },
};
</script>

<style scoped></style>
