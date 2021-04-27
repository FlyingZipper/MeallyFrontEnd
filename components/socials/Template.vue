<template>
  <a :href="href" class="w-5 h-5">
    <slot />
  </a>
</template>

<script>

export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>
