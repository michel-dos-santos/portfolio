<template>
  <div class="container text-h6 text-white" :style="`padding: 50px ${!$q.platform.is.mobile ? 150 : 50}px`">
    <p class="text-h1 text-orange">Serviços</p>
    <p class="text-h5 text-italic text-orange">Pronto para te servir em:</p>
    <div class="row justify-center">
      <div v-for="service in services" :key="service.id" class="q-px-lg">
        <q-card
          class="text-white q-mt-lg"
          :style="$q.screen.width <= 905 ? `width: ${$q.screen.width - 100}px` : 'width: 550px'"
          style="padding-bottom: 20px; background: radial-gradient(circle, #9B9B9B 0%, #4D4D4D 100%)"
        >
          <q-card-section>
            <div class="text-h6">{{service.title}}</div>
          </q-card-section>

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
          icon: 'store',
          title: 'Loja Virtual / Ecommerce',
          description: 'Criação de Loja Online, venda produtos ou receba pagamentos através da Internet.'
        },
        {
          id: 2,
          icon: 'store',
          title: 'WordPress / Blog / Joomla',
          description: 'Desenvolvedor WordPress e Joomla para criação de Sites e Blogs.'
        },
        {
          id: 3,
          icon: 'store',
          title: 'Desenvolvedor Back-end',
          description: 'Utilizando as principais tecnológias de mercado: Java, NodeJS, Kotlin...'
        },
        {
          id: 4,
          icon: 'store',
          title: 'Desenvolvedor Front-End',
          description: 'Utilizando as principais tecnológias de mercado: HTML5, JavaScript, CSS3, AngularJS, ReactS, Vue.js...'
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
</style>
