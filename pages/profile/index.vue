<template>
  <div>
    Profile & settings default page with menu for settings
    <div>
      possible redirect to settings
    </div>
  </div>
</template>

<script>
export default {
  created () {
    if (this.$store.state.user.jwt === null) {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
