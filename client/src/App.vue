<template>
  <div class="hero">
    <Navbar/>
    <router-view/>
  </div>
  
</template>

<style lang="scss">
   .hero {
        background: rgb(40, 1, 55) center / cover;
    }
</style>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  }
}
</script>
