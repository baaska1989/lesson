<template>
  <div>
    <Navigation />
      <div class="h-96">
        <router-view />
      </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
