<template>
  <div class="mb-2">
    <div>
      <div v-click-outside="hideOptions" :class="[displayOptions ? '': 'cursor-pointer', 'relative']" @click="toggleOptions">
        <div>
          <img class="rounded-lg" :src="imgLink" alt="">
        </div>
        <div v-if="displayOptions" class="absolute top-0 right-0 z-30 mt-2 mr-2 transition duration-1000 -translate-y-56 bg-gray-200 bg-opacity-75 rounded-full">
          <div class="flex items-center justify-between space-x-6">
            <button class="focus:outline-none" @click="toggleMealplan">
              <span class="flex items-center justify-center w-8 h-8 p-2 text-base text-gray-400 bg-white border border-gray-400 rounded-full shadow-lg material-icons">
                restaurant_menu
              </span>
            </button>
            <button class="focus:outline-none" @click="toggleFavoriteRecipe">
              <span class="flex items-center justify-center w-8 h-8 p-2 text-base text-gray-400 bg-white border border-gray-400 rounded-full shadow-lg material-icons">
                favorite
              </span>
            </button>
          </div>
        </div>
        <transition name="fade">
          <div v-if="displayOptions" class="absolute top-0 w-full h-full bg-black bg-opacity-25 rounded-lg" />
        </transition>
      </div>
    </div>
    <div class="pt-2">
      <div class="flex">
        <div :class="[discounted ? 'w-4/5': 'w-full']">
          <nuxt-link :to="recipeLink" class="text-base capitalize hover:underline">
            {{ recipe }}
          </nuxt-link>
        </div>
        <div v-if="discounted" class="flex items-center justify-center w-1/5">
          <div class="flex items-center justify-center text-white rounded-full w-7 h-7 bg-main-400">
            <span class="text-lg material-icons-outlined">
              money_off
            </span>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link :to="authorLink" class="text-xs text-gray-500 hover:underline">
      Par: {{ author }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'VRecipeCard',
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
    },
    discounted: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      displayOptions: false
    }
  },
  computed: {
    recipeLink () {
      return `/recipes/${this.recipeSlug}`
    },
    authorLink () {
      return `/profile/${this.authorSlug}`
    }
  },
  methods: {
    toggleOptions () {
      this.displayOptions = true
    },
    hideOptions () {
      this.displayOptions = false
    },
    toggleMealplan () {
      console.log('toggleMealplan')
    },
    toggleFavoriteRecipe () {
      console.log('toggleFavoriteRecipe')
    }

  }
}
</script>

<style>

</style>
