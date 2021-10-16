<template>
  <div class="hero">
    <Navbar/>
    <router-view/>
  </div>
  
</template>

<style lang="scss">
   .hero {
        background: rgb(97, 38, 38) center / cover;
        //purple: rbg(40 1 55)
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
