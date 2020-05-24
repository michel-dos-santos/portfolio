<template>
  <div class="container text-h6 text-white" :style="`padding: 50px ${!$q.platform.is.mobile ? 150 : 50}px`">
    <p :class="`text-h${$q.screen.width < 398 ? 2 : 1} text-orange`">Blog</p>
    <p class="text-h5 text-italic text-orange">Bora ficar antenado sobre Programação</p>
    <br>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>

<style lang="sass" scoped>
  .container
    background-color: rgba(102, 172, 159, 0.3)
</style>
