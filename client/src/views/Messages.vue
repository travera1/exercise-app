<template>
  <div class="hero is-fullheight">
    <div class="hero-head">
      <div class="columns is-centered is-vcentered">
        <div class="column has-text-centered is-three-quarters-mobile is-two-thirds-tablet is-half-desktop">
          <div class="notification">
            <div class="columns">
              <h1 class="column title has-text-dark has-text-centered">Messages</h1>
            </div><br>
            <div class="columns buttons is-v-centered">
              <h1 class="column button" @click="selectInbox()">INBOX</h1>
              <h1 class="button column" @click="selectSent()"> SENT</h1>
            </div>
            <div><br>
              <p v-if="inboxSelected && !messages" class="my-4 has-text-grey">Your messages will appear here.</p>
              <div v-else >
                <div class="columns is-centered">
                  <div class="icon-text">
                    <span class="pt-2 subtitle has-text-weight-bold">Sent Messages</span>
                    <span class=" column icon is-large">
                      <i class="far fa-lg fa-paper-plane"></i>
                    </span>
                  </div>
                </div>
                <p class="my-4 has-text-grey">You'll see all your sent messages to friends here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
    name: 'Messages', 
    components: {
        
    },
    data() {
      return {
        inboxSelected: true,
        sentSelected: false,
        inbox: {},
        sent: {},
      }
    },
    methods: {
      selectInbox() {
        this.inboxSelected = true;
        this.sendSelected = false;
      },
      selectSent() {
        this.sentSelected = true;
        this.inboxSelected = false;
      }
    }
}
</script>

<style>

</style>