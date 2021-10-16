<template>
  <div class="hero is-fullheight">
    <div class="hero-head">
      <div class="columns is-centered is-vcentered">
        <div class="column has-text-centered is-three-quarters-mobile is-two-thirds-tablet is-half-desktop">
          <div class="notification">
            <div class="columns">
              <h1 class="mr-6 column title has-text-dark has-text-centered">Friends</h1>
              <div class="column">
                <span class="ml-6 icon is-large has-text-primary">
                  <router-link :to="{ name: 'AddFriends' }">
                <i class="fas fa-2x fa-user-plus"></i>
                  </router-link>
                </span>
              </div>
            </div>
            <div class="columns buttons is-v-centered">
              <h1 class="column button" @click="selectFriends()">FRIENDS (0)</h1>
              <h1 class="button column" @click="selectRequests()"> REQUESTS</h1>
              <h1 class="button column" @click="selectRequests()"> REQUESTS</h1>
            </div>
            <div><br>
              <p v-if="friendsSelected" class="my-4 has-text-grey">Users who add friends lose more weight on average.</p>
              <p v-else-if="requestsSelected && requests === null" class="my-4 has-text-grey">You have no pending requests.</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'Friends', 
  components: {
    
  }, data() {
    return {
      friendsSelected: true,
      requestsSelected: false,
      requests: null
    }
  },
  methods: {
    selectFriends() {
      this.friendsSelected = true;
      this.requestsSelected = false;
    },
    selectRequests() {
      this.friendsSelected = false;
      this.requestsSelected = true;
    }
  }
}
</script>

<style>

</style>