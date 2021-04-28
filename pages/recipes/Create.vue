<template>
  <div>
    <v-header title="Recipe" />
    <div class="space-y-4">
      <v-dropdown :is-open="true" class="">
        <template #title>
          <div class="">
            <h3 class="title-2">
              Information
            </h3>
          </div>
        </template>
        <div>
          <div class="mb-2">
            <v-text-input v-model="name" placeholder="Name" />
          </div>
          <div class="mb-2">
            <v-textarea v-model="description" placeholder="Description" />
          </div>
        </div>
      </v-dropdown>
      <v-dropdown :is-open="true">
        <template #title>
          <div class="">
            <h3 class="title-2">
              Ingredients
            </h3>
          </div>
        </template>
        <div>
          <div v-for="(ingredient, index) in ingredients" :key="'ingredients-'+index" class="flex mb-3">
            <v-text-input v-model="ingredients[index]" class="flex flex-grow" :placeholder="index+1 + ' - ingredient'" />
            <button class="flex items-center p-2 my-auto ml-2 rounded-full material-icons" @click="removeIngredient(index)">
              close
            </button>
          </div>
          <v-black-button text="Add ingredient" @click.native="addIngredient()" />
        </div>
      </v-dropdown>
      <v-dropdown :is-open="true">
        <template #title>
          <div class="">
            <h3 class="title-2">
              Instructions
            </h3>
          </div>
        </template>
        <div>
          <div v-for="(ingredient, index) in instructions" :key="'instructions-'+index+1" class="flex mb-3">
            <v-text-input v-model="instructions[index]" class="flex flex-grow" :placeholder="index+1 + ' - instruction'" />
            <button class="flex items-center p-2 my-auto ml-2 rounded-full material-icons" @click="removeInstruction(index)">
              close
            </button>
          </div>
          <v-black-button text="Add instruction" @click.native="addInstruction()" />
        </div>
      </v-dropdown>
      <v-dropdown :is-open="true">
        <template #title>
          <div class="">
            <h3 class="mb-2 title-2">
              Images
            </h3>
          </div>
        </template>
        <div>
          <div class="mb-2">
            <v-image-drop v-model="images" />
          </div>
        </div>
      </v-dropdown>
      <v-main-button text="Save recipe" />
    </div>
  </div>
</template>

<script>
import BlackButton from '~/components/Buttons/BlackButton.vue'
import MainButton from '~/components/Buttons/MainButton.vue'
import DropdownVue from '~/components/generic/Dropdown.vue'
import HeaderVue from '~/components/generic/Header.vue'
import ImageDropVue from '~/components/inputs/ImageDrop.vue'
import TextVue from '~/components/inputs/Text.vue'
import TextareaVue from '~/components/inputs/Textarea.vue'

export default {
  components: {
    'v-header': HeaderVue,
    'v-text-input': TextVue,
    'v-textarea': TextareaVue,
    'v-dropdown': DropdownVue,
    'v-black-button': BlackButton,
    'v-image-drop': ImageDropVue,
    'v-main-button': MainButton
  },
  data () {
    return {
      name: '',
      description: '',
      ingredients: [''],
      instructions: [''],
      images: []
    }
  },
  methods: {
    console () {
      console.log(this.$data)
    },
    addIngredient () {
      this.ingredients.push('')
    },
    addInstruction () {
      this.instructions.push('')
    },
    removeInstruction (index) {
      this.instructions.splice(index, 1)
    },
    removeIngredient (index) {
      this.ingredients.splice(index, 1)
    }
  }

}
</script>

<style>

</style>
