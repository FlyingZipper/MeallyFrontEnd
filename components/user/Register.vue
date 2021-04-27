<template>
  <div>
    <div class="mb-8">
      <h1 class="mb-8 text-center title-1">
        Register
      </h1>
      <form @submit.prevent="submit()">
        <div class="mb-4">
          <v-input v-model="username" name="username" placeholder="Username" />
        </div>
        <div class="mb-4">
          <v-input v-model="email" name="email" placeholder="Email" />
        </div>
        <div class="mb-6">
          <v-input v-model="password" name="password" placeholder="Password" type="password" />
        </div>
        <div class="mb-6">
          <v-input v-model="confirmPassword" name="Confirm Password" placeholder="Confirm Password" type="password" />
        </div>
        <div class="flex flex-col justify-center mx-8">
          <v-button text="Continue" class="w-full" />
          <div class="py-4 text-sm text-center text-gray-800">
            <span>Already have an account ?</span> <nuxt-link class="text-main-400 hover:text-main-500 hover:underline" to="/login">
              Log in
            </nuxt-link>
          </div>
        </div>
      </form>
    </div>
    <div class="mb-8">
      <v-or />
    </div>
    <div class="mb-8">
      Google N stuff
    </div>
  </div>
</template>

<script>
import MainButtonVue from '../Buttons/MainButton.vue'
import OrVue from '../generic/Or.vue'
import TextVue from '../inputs/Text.vue'

export default {
  components: {
    'v-or': OrVue,
    'v-input': TextVue,
    'v-button': MainButtonVue
  },
  data () {
    return {
      username: null,
      email: null,
      password: null,
      confirmPassword: null
    }
  },
  methods: {
    submit () {
      console.log('submitted')
    }
  }
}
</script>

<style>

</style>
