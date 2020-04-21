<template>
  <q-page padding class="background">
    <q-drawer
      show-if-above
      :mini="menuOver"
      :mini-width="32"
      :width="130"
      :breakpoint="200"
      content-style="background-color: transparent"
    >
      <q-list padding>
        <q-item
          clickable
          dense
          v-ripple
          v-for="menu in menus"
          :key="menu.name"
          class="bg-white q-pa-xs item-menu"
          :style="`width: ${!$q.platform.is.mobile ? 130 : 32}px`"
          @click="scrollToElement(menu.name)">
          <q-item-section avatar>
            <q-icon :name="menu.icon" />
          </q-item-section>

          <q-item-section>
            {{menu.label}}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <section :id="home">
      <home />
    </section>

    <section :id="about">
      <about />
    </section>

    <section :id="services">
      <services />
    </section>

    <section :id="portfolio">
      <portfolio />
    </section>

    <section :id="blog">
      <blog />
    </section>

    <section :id="contact">
      <contact />
    </section>
  </q-page>
</template>

<script>
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  components: {
    home: Home,
    about: About,
    services: Services,
    portfolio: Portfolio,
    blog: Blog,
    contact: Contact
  },
  data () {
    return {
      menuOver: false
    }
  },
  computed: {
    menus: {
      get () {
        return this.$store.state.header.menus
      }
    },
    home: {
      get () {
        return this.$store.getters.GET_HOME
      }
    },
    about: {
      get () {
        return this.$store.getters.GET_ABOUT
      }
    },
    services: {
      get () {
        return this.$store.getters.GET_SERVICES
      }
    },
    portfolio: {
      get () {
        return this.$store.getters.GET_PORTFOLIO
      }
    },
    blog: {
      get () {
        return this.$store.getters.GET_BLOG
      }
    },
    contact: {
      get () {
        return this.$store.getters.GET_CONTACT
      }
    }
  },
  methods: {
    scrollToElement (elementName) {
      const el = document.getElementById(elementName)
      const target = getScrollTarget(el)
      const offset = el.offsetTop
      const duration = 500
      setScrollPosition(target, offset, duration)
    }
  }
}
</script>

<style lang="sass">
  .background
    background-image: url('~assets/ImageBackground.jpg')
    background-attachment: scroll
    background-size: auto
  .q-drawer
    position: fixed
    top: 30vh
    bottom: 0
    background: transparent
  .q-item__section--avatar
    color: inherit
    min-width: 45px
  .item-menu
    overflow: hidden
    margin: 0 0 4px 0
    border-radius: 0 5px 5px 0
</style>
