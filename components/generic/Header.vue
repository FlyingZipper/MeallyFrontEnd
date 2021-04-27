<template>
  <div class="flex items-center justify-between mt-4 mb-8">
    <div>
      <h1 class="title-1">
        {{ title }}
      </h1>
    </div>
    <div v-if="button !== null">
      <v-button v-if="link === null" class="text-sm" :text="button" @click.native="clicked">
        <slot />
      </v-button>
      <nuxt-link v-else :to="link">
        <v-button class="text-sm" :text="button" @click.native="clicked">
          <slot />
        </v-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import ButtonVue from '../Buttons/MainButton.vue'
export default {
  components: {
    'v-button': ButtonVue
  },
  props: {
    title: {
      type: String,
      required: true
    },
    button: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: String,
      required: false,
      default: null
    }
  },
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>

<style>

</style>
