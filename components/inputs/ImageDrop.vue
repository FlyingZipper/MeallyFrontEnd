<template>
  <div
    :class="[isDragging ? 'bg-gray-200' : 'bg-white', 'duration-100 transition relative flex flex-col items-center justify-center w-full h-full px-2 py-4 border border-gray-600 border-dashed rounded-lg']"

    @dragover.prevent="dragOver"
    @dragleave.prevent="dragLeave"
    @drop.prevent="drop($event)"
  >
    <div
      v-if="isDragging"
      class="absolute flex flex-col space-y-4 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2"
    >
      <span class="text-7xl material-icons-outlined">
        file_upload
      </span>
      <span>Drop Here</span>
    </div>
    <div v-for="(img,index) in imageSources" :key="index" :class="[isDragging ? 'opacity-0': 'opacity-100', 'flex flex-col w-full h-full p-1']">
      <div class="flex justify-center">
        <div class="px-5" />
        <img :src="img" class="rounded-lg drag-drop-img">
        <button class="flex items-center p-2 my-auto ml-2 bg-gray-100 rounded-full material-icons" @click="removeImage(index)">
          close
        </button>
      </div>
    </div>
    <div v-if="imageSources.length == 0" :class="[isDragging ? 'opacity-0': 'opacity-100']">
      <div class="flex flex-col items-center justify-center space-y-4">
        <h2 class="title-3">
          Drag and Drop File Here
        </h2>
        <h2 class="text-5xl material-icons-outlined">
          cloud_upload
        </h2>
      </div>

      <div :class="[isDragging ? 'opacity-0': 'opacity-100', 'my-2 w-52']">
        <v-or />
      </div>
    </div>

    <div :class="[isDragging ? 'opacity-0': 'opacity-100', 'pt-4 bp-2']">
      <button class="px-4 py-2 text-gray-800 border border-gray-800 rounded-lg" @click="inputClick">
        <div class="flex items-center justify-center space-x-4">
          <span class="text-sm">
            Browse files
          </span>
        </div>
      </button>
      <input
        id="dis"
        ref="fileInputs"
        class="hidden"
        type="file"
        :accept="'image/*'"
        multiple
        @change="requestUploadFile"
      >
    </div>
  </div>
</template>

<script>
import OrVue from '../generic/Or.vue'
export default {
  components: {
    'v-or': OrVue
  },
  data () {
    return {
      isDragging: false,
      imageSources: []
    }
  },
  methods: {
    inputClick () {
      this.$refs.fileInputs.click()
    },
    removeImage (index) {
      this.imageSources.splice(index, 1)
    },
    dragOver () {
      this.isDragging = true
    },
    dragLeave () {
      this.isDragging = false
    },
    async drop (e) {
      const files = [...e.dataTransfer.files]
      const images = files.filter(file => file.type.includes('image/'))
      const promises = []
      images.forEach((file) => {
        promises.push(this.getBase64(file))
      })
      const sources = await Promise.all(promises)
      this.imageSources = this.imageSources.concat(sources)
      this.$emit('input', this.imageSources)
      this.isDragging = false
    },
    requestUploadFile () {
      const src = this.$refs.fileInputs
      this.drop({ dataTransfer: src })
    },
    getBase64 (file) {
      const reader = new FileReader()
      return new Promise((resolve) => {
        reader.onload = (ev) => {
          resolve(ev.target.result)
        }
        reader.readAsDataURL(file)
      })
    }
  }
}
</script>
