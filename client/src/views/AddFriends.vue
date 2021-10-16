<template>
  <div class="hero is-fullheight">
    <div class="hero-head">
      <div class="columns is-centered is-vcentered">
        <div class="column has-text-centered is-three-quarters-mobile is-two-thirds-tablet is-half-desktop">
          <div class="notification">
            <div class="columns">
              <h1 class="column title has-text-dark has-text-centered">Add Friends</h1>
            </div>
            <div class="columns buttons is-v-centered">
              <h1 class="button column" @click="selectUsername()"> ADD BY USERNAME</h1>
              <h1 class="column button" @click="selectEmail()">ADD BY EMAIL</h1>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddFriends', 
  components: {
    
  },
  data() {
      return {
          usernameSelected: true,
          emailSelected: false,
          users: {}
      }
  },
  methods: {
      selectEmail() {

      },
      selectUsername() {

      }
  }
}
</script>

<style>

</style>