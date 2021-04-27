<template>
  <div>
    <v-header title="Groceries" button="Add an Item" @clicked="toggleModal">
      <span class="material-icons-outlined">
        add
      </span>
    </v-header>
    <div>
      <div v-for="y in ['Martel','mouton','Pipo']" :key="y" class="my-3">
        <v-dropdown>
          <template #title class="text-gray-600">
            <div>
              <h3 class="capitalize title-3">
                {{ y }}
              </h3>
            </div>
          </template>
          <div v-for="x in ['riz','poulet','shish taouk','penis', 'T gé', 'hummus', 'sauce a l\'ail', 'ya 7mar']" :key="x+'-card-'+y" class="mb-4 child">
            <v-groceries-tile :title="x" />
          </div>
        </v-dropdown>
      </div>
    </div>
    <v-modal :opened="modalOpened" @close="toggleModal">
      <div class="py-2">
        <h3 class="mb-4 title-2">
          Add an item
        </h3>
        <div class="py-4">
          <v-input focused name="ingredient" placeholder="Item" type="text" />
        </div>
        <v-button text="Add" class="w-full" />
      </div>
    </v-modal>
  </div>
</template>

<script>
import DropdownVue from '~/components/generic/Dropdown.vue'
import GroceriesTileVue from '~/components/tiles/Groceries.vue'
import HeaderVue from '~/components/generic/Header.vue'
import ModalVue from '~/components/generic/Modal.vue'
import TextVue from '~/components/inputs/Text.vue'
import MainButtonVue from '~/components/Buttons/MainButton.vue'

export default {
  components: {
    'v-groceries-tile': GroceriesTileVue,
    'v-dropdown': DropdownVue,
    'v-header': HeaderVue,
    'v-modal': ModalVue,
    'v-input': TextVue,
    'v-button': MainButtonVue
  },
  data () {
    return {
      modalOpened: false
    }
  },
  methods: {
    toggleModal () {
      console.log('kek')
      this.modalOpened = !this.modalOpened
    }
  }
}
</script>

<style>

</style>
