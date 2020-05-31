<template>
  <q-page padding class="background">
    <q-scroll-area style="height: 100vh; width: 100vw">
      <home />
      <about />
      <services />
      <portfolio />
      <blog />
      <contact />
    </q-scroll-area>
  </q-page>
</template>

<script>
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

export default {
  components: {
    Home,
    About,
    Services,
    Portfolio,
    Contact
  }
}
</script>

<style lang="sass">
  .background
    background-image: url('~assets/ImageBackground.jpg')
    height: 100vh
    background-size: cover
  .q-drawer
    position: fixed
    top: 30vh
    bottom: 0
    background: transparent
    height: 200px
  .q-item__section--avatar
    color: inherit
    min-width: 45px
  .item-menu
    overflow: hidden
    margin: 0 0 4px 0
    border-radius: 0 5px 5px 0
</style>
