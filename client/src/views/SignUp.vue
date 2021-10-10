<template>
  <div class="hero is-fullheight">
    <div class="hero-head">
      <div class="columns is-centered is-vcentered">
        <div class="column is-half has-text-centered has-text-white"> 
          <router-link class="button is-warning is-rounded" :to="{ name: 'SignUpEmail' }">Sign Up With Email</router-link><br><br>
          <p class="">Already have an account?</p>
          <router-link class="has-text-white is-underlined" :to="{ name: 'LogIn' }">Log In</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SignUp',
    components: {
   
  }
}
</script>

<style>

</style>