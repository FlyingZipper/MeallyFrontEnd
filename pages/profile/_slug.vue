<template>
  <div>
    <div>
      <div class="flex mb-4">
        <div class="w-1/3">
          <div class="inline-block w-24 h-24 overflow-hidden align-middle border border-gray-300 rounded-full">
            <img class="w-full" src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="">
          </div>
        </div>
        <div class="flex flex-col justify-between w-2/3">
          <div>
            <h1 class="title-2">
              {{ author.name }}
            </h1>
            <div class="flex mb-4 space-x-4 text-sm text-gray-600">
              <div>
                500 Followers
              </div>
              <div>
                240 following
              </div>
            </div>
          </div>
          <div class="flex space-x-4">
            <facebook href="https://www.youtube.com/watch?v=MZA38sKbBfE" />
            <twitter href="https://www.youtube.com/watch?v=MZA38sKbBfE" />
            <youtube href="https://www.youtube.com/watch?v=MZA38sKbBfE" />
          </div>
        </div>
      </div>
      <div class="mb-8 text-sm text-gray-700">
        {{ author.description }}
      </div>
    </div>
    <div>
      <div>
        <h3 class="title-3">
          Recipes
        </h3>
      </div>
      <div class="my-4">
        <v-recipes />
      </div>
    </div>
  </div>
</template>

<script>
import facebook from '~/components/socials/facebook.vue'
import Twitter from '~/components/socials/twitter.vue'
import Youtube from '~/components/socials/youtube.vue'
import recipesVue from '~/components/pageComponents/recipes.vue'

export default {
  components: { facebook, Twitter, Youtube, 'v-recipes': recipesVue },
  props: {
    profileSlug: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      author: null
    }
  },
  created () {
    // fetch with profileSlug
    this.author = {
      name: 'Mathieu Gendron',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in vestibulum sem, non lobortis odio. Sed sit amet nunc sit amet purus pretium porttitor.'
    }
  }
}
</script>

<style>

</style>
