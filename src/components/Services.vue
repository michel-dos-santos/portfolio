<template>
  <div class="container text-h6 text-white" :style="`padding: 50px ${!$q.platform.is.mobile ? 150 : 50}px`">
    <p :class="`text-h${$q.screen.width < 398 ? 2 : 1} text-orange`">Serviços</p>
    <p class="text-h5 text-italic text-orange">Pronto para te servir em:</p>
    <div class="row justify-center">
      <div v-for="service in services" :key="service.id" class="q-px-lg">
          <q-card
            class="text-white q-mt-lg zoom"
            :style="$q.screen.width <= 905 ? `width: ${$q.screen.width - 100}px` : 'width: 560px'"
          >
            <q-intersection transition="scale" style="width: 100%; min-height: 30vh">
              <q-img width="100%" height="30vh" :src="service.url" basic>
                <div class="absolute-bottom text-h6">
                  <div class="text-h6">{{service.title}}</div>
                </div>
              </q-img>
            </q-intersection>

            <q-card-section class="q-pt-none">
              {{service.description}}
            </q-card-section>
          </q-card>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      services: [
        {
          id: 1,
          url: 'statics/ecommerce.jpg',
          title: 'Loja Virtual / Ecommerce',
          description: 'Criação de Loja Online, venda produtos ou receba pagamentos através da Internet.'
        },
        {
          id: 2,
          url: 'statics/blog.jpeg',
          title: 'WordPress / Blog / Joomla',
          description: 'Desenvolvedor WordPress e Joomla para criação de Sites e Blogs.'
        },
        {
          id: 3,
          url: 'statics/backend.jpg',
          title: 'Desenvolvedor Back-end',
          description: 'Utilizando as principais tecnologias de mercado: Java, NodeJS, Kotlin...'
        },
        {
          id: 4,
          url: 'statics/frontend.webp',
          title: 'Desenvolvedor Front-End',
          description: 'Utilizando as principais tecnologias de mercado: HTML5, JavaScript, CSS3, AngularJS, ReactS, Vue.js...'
        }
      ]
    }
  },
  computed: {
  }
}
</script>

<style lang="sass" scoped>
.container
  background-color: rgba(222, 160, 59, 0.3)

.zoom
  padding-bottom: 20px
  background: radial-gradient(circle, #353535 0%, #454545 100%)

.zoom:hover
  transform: scale(1.02)
</style>
