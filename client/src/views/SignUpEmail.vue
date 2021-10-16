<template>
  <div class="hero is-fullheight">
    <div class="hero-head">
      <div class="columns is-centered is-vcentered">
        <div class="column  has-text-white  is-three-quarters-mobile is-two-thirds-tablet is-half-desktop">
          <div class="notification has-background-dark">
            <p class="title has-text-white has-text-centered">Sign up for free to start tracking.</p>
          <form action="signupEmail.html">
            <div class="field">
                <label class="label has-text-warning">What's your email?</label>
                <div class="control has-icons-left">
                  <input class="input" type="email" placeholder="Enter your email.">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div><br>
            </div>
            <div class="field">
                <label class="label  has-text-warning">Confirm your email</label>
                <div class="control has-icons-left">
                  <input class="input" type="email" placeholder="Enter your email again.">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div><br>
            </div>
            <div class="field">
                <label class="label has-text-warning">Create a password</label>
                <p class="control has-icons-left">
                  <input class="input" type="password" placeholder="Password">
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p><br>
            </div>
            <div class="field">
                <label class="label has-text-warning">What's your date of birth?</label>
                <p class="control">
                  <input class="input" type="date">
                </p><br>
            </div>
            <div class="control has-text-centered">
                <button class="button is-primary is-rounded  has-text-weight-bold" type="submit" style="width: 40%;">Sign Up</button>
              </div><br><br>
          </form>
          <div class="has-text-centered">
            <p class="">Already have an account?</p>
            <router-link class="has-text-warning is-underlined" :to="{ name: 'LogIn' }">Log In</router-link>
          </div>
          
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SignUpEmail',
    Components: {

    }
}
</script>

<style>

</style>