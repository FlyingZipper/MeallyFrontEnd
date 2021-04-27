<template>
  <div class="fixed z-40 w-full bottom-4">
    <div class="flex items-center justify-between p-2 px-4 mx-4 bg-gray-100 border border-gray-100 rounded-full shadow-lg">
      <nuxt-link to="/Home" class="material-icons mobile-link">
        home
      </nuxt-link>
      <nuxt-link to="/recipes/favorites" class="material-icons mobile-link">
        favorite
      </nuxt-link>
      <nuxt-link to="/mealplan" class="material-icons mobile-link">
        restaurant_menu
      </nuxt-link>
      <nuxt-link to="/groceries" class="material-icons mobile-link">
        local_grocery_store
      </nuxt-link>
      <nuxt-link to="/profile" class="mobile-link">
        <img :src="imgLink" class="border-2 border-gray-300 rounded-full w-7 h-7" alt="">
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgLink: require('~/assets/images/blank-profile-picture.jpg')

    }
  }
}
</script>

<style>

</style>
