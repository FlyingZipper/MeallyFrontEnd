<template>
  <div>
    <div class="mb-8">
      <h1 class="mb-8 text-center title-1">
        Log in
      </h1>
      <form @submit.prevent="submit()">
        <div class="mb-4">
          <v-input v-model="username" name="username" placeholder="Username" />
        </div>
        <div class="mb-6">
          <v-input v-model="password" name="password" placeholder="Password" type="password" />
        </div>
        <div class="flex flex-col justify-center mx-8">
          <v-button text="Continue" class="w-full" />
          <div class="py-4 text-sm text-center text-gray-800">
            <span>Don't have an account yet ?</span> <nuxt-link class="text-main-400 hover:text-main-500 hover:underline" to="/register">
              Register
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
      password: null
    }
  },
  methods: {
    submit () {
      console.log(this.username)
      console.log(this.password)
      console.log('submitted')
    }
  }
}
</script>

<style>

</style>
