import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PortfolioComponent",
  components: {
  },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    }
  },
  computed: {
    content() {
      return {
        title: this.$t("PORTFOLIO.TITLE", 1),
        subTitle: this.$t("PORTFOLIO.SUB_TITLE", 1),
        items: [
          { index: 1, imgSrc: 'img/portfolio/the-cat-api.png', title: 'The Cat API', link: 'https://github.com/michel-dos-santos/cat-data-miner' }
        ]
      }
    }
  }
});