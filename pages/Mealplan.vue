<template>
  <div>
    <v-header title="Mealplan" button="Change Mealplan">
      <span class="material-icons-outlined">
        trending_flat
      </span>
    </v-header>
    <div v-for="y in ['Breakfast','Lunch','Diner']" :key="y" class="mb-6">
      <v-dropdown :is-open="true">
        <template #title>
          <div class="">
            <h3 class="font-extrabold capitalize title-3">
              {{ y }}
            </h3>
          </div>
        </template>
        <div class="grid grid-cols-2 gap-y-2 gap-x-4">
          <v-mealplan-card
            v-for="x in [1,2,3,4,5,6]"
            :key="x"
            class="flex-shrink-0 w-36"
            img-link="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            recipe="porc"
            author-slug="mathieu_gendron"
            :recipe-slug="x"
            author="Mathieu Gendron"
          />
        </div>
      </v-dropdown>
    </div>
  </div>
</template>

<script>
import MealplanCard from '~/components/cards/MealplanCard.vue'
import HeaderVue from '~/components/generic/Header.vue'
import DropdownVue from '~/components/generic/Dropdown.vue'
export default {
  components: {
    'v-mealplan-card': MealplanCard,
    'v-dropdown': DropdownVue,
    'v-header': HeaderVue
  }
}
</script>

<style>

</style>
