<template>
  <div :class="[completed ? 'text-gray-400 hover:text-gray-500 border-gray-300 hover:border-gray-400' : 'text-gray-800 border-gray-800 shadow-md', 'relative px-2 py-4 border rounded-lg cursor-pointer bg-white']">
    <div class="flex items-center justify-center">
      <div :class="[completed ? 'line-through text-gray-400' : 'text-gray-800' , 'capitalize']">
        {{ title }}
      </div>
    </div>
    <div class="check-position">
      <div>
        <button :class="[completed ? 'border-gray-400 hover:border-gray-500 bg-gray-400 hover:bg-gray-500' : 'border-gray-500 hover:border-gray-800 bg-white', 'cursor-pointer flex justify-center items-center border rounded-lg w-8 h-8 p-2 ']" @click="toggle()">
          <span v-if="completed" class="text-xl text-white material-icons-outlined">
            done
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
    // completed: {
    //   type: Boolean,
    //   required: true
    // }
  },
  data () {
    return {
      completed: false
    }
  },
  methods: {
    toggle () {
      this.completed = !this.completed // TODO remove
      this.$emit('ToggleCheck', this.completed)
    }
  }
}
</script>

<style>
    .check-position{
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(50%, -50%);
    }
</style>
