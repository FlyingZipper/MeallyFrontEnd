<template>
  <div class="mb-2">
    <div>
      <div class="relative">
        <div>
          <img class="rounded-lg" src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="">
        </div>
        <div :class="[completed ? 'text-white': 'text-gray-600 hover:text-gray-800', 'absolute top-0 right-0 z-30 mt-2 mr-2 rounded-full hover:shadow-lg']">
          <button class="focus:outline-none" @click="toggle()">
            <span :class="[completed ? 'bg-gray-400 border-gray-400' : 'border-gray-400 hover:border-gray-500 bg-white', 'flex items-center justify-center w-8 h-8 p-2 text-base border rounded-full material-icons']">
              done
            </span>
          </button>
        </div>
        <div v-if="completed" class="absolute top-0 w-full h-full bg-white rounded-lg opacity-50" />
      </div>
    </div>
    <div class="pt-2">
      <div class="flex">
        <div class="w-full">
          <nuxt-link :to="recipeSlug" class="text-base capitalize hover:underline">
            {{ recipe }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <nuxt-link :to="authorSlug" class="text-xs text-gray-500 hover:underline">
      Par: {{ author }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: String,
      required: true
    },
    recipeSlug: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    authorSlug: {
      type: String,
      required: true
    },
    imgLink: {
      type: String,
      required: true
    }
    // completed: {
    //   type: Boolean,
    //   required: false,
    //   default: false
    // }
  },
  data () {
    return {
      displayOptions: false,
      completed: false
    }
  },
  methods: {
    toggle () {
      console.log('kek')
      this.completed = !this.completed
      this.$emit('toggle', this.completed)
    }
  }
}
</script>

<style>

</style>
