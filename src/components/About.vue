<template>
  <div class="container text-h6 text-white" :style="`padding: 50px ${!$q.platform.is.mobile ? 150 : 50}px`">
    <p :class="`text-h${$q.screen.width < 398 ? 2 : 1} text-orange`">Sobre mim</p>
    <p class="text-h5 text-italic text-orange">Um pouquinho da minha história</p>
    <p>Sou analista desenvolvedor fullstack, tenho mais de 7 anos na área de desenvolvimento de software e sou simplesmente apaixonado por T.I e no que ela nos possibilita fazer.</p>
    <p>Comecei trabalhando em uma Lan house, depois fui trabalhar em uma loja de manutenção de computadores onde comecei a ficar curioso em como funcionava os programas e sites: como eram armazenados todas as informações, a interação entre o software e hardware e principalmente a lógica por trás.</p>
    <p>Lembram a época que algumas escolas de informática iam nas escolas pra falar e vender os cursos de informática, então, eu fui uma dessas pessoas que fez um desses cursos kkkk, na época era demais, porém não foi o bastante e queria mais conhecimento e foi aí que tive a certeza de qual área queria seguir.</p>
    <p>Bacharel em Ciência da Computação pela universidade Cidade de São Paulo (UNICID), trabalhei em algumas empresas e nelas tive muitos desafios e conquistas, comecei como estagiário e fui adquirindo experiência e ao longo do tempo cheguei até liderar uma equipe.</p>
    <p>Tive ótimas experiências trabalhando em uma das melhores empresas como Sintel, Spread e atualmente na CRDC.</p>
    <p>Aqui vai meus sinceros agradecimentos por todas as pessoas que tive contato direto, todas sem exceção foram e sempre farão parte da minha história, muito obrigado. Em especial são os amigos que fiz, valeu pessoal.</p>
    <div class="q-pt-md">
      <q-intersection transition="scale" style="min-height: 300px">
        <vue-word-cloud
          style="min-height: 300px"
          :words="words"
          :font-family="fontFamily"
          :color="() => picker(colorItems)"
          :animationDuration="15000"
          :animationOverlap="5"
          :spacing="0.5"
          ></vue-word-cloud>
      </q-intersection>
    </div>
  </div>
</template>

<script>
import VueWordCloud from 'vuewordcloud'

export default {
  components: {
    [VueWordCloud.name]: VueWordCloud
  },
  data () {
    return {
      words: [
        ['João', 10],
        ['Kelvin', 9],
        ['Vinicius', 8],
        ['Ricardo', 7],
        ['Thiago', 6],
        ['Tony', 3],
        ['Estefanio', 3],
        ['Luis', 4],
        ['Danielle', 5],
        ['Caroline', 6],
        ['Alexandre', 7],
        ['Anderson', 8],
        ['Claudio', 9],
        ['Danilo', 10],
        ['Debora', 10],
        ['Rogerio', 9],
        ['Diogenes', 8],
        ['Egídio', 7],
        ['Elaine', 6],
        ['Elton', 5],
        ['Rodrigo', 4],
        ['Telma', 3],
        ['Emerson', 3],
        ['Fabiane', 4],
        ['Flávio', 5],
        ['Gleidson', 6],
        ['Jhon', 7],
        ['Jorge', 8],
        ['Juliana', 9],
        ['Kevin', 10],
        ['Leandro', 9],
        ['Marcelo', 8],
        ['Marcia', 7],
        ['Marcos', 6],
        ['Matheus', 5],
        ['Mauricio', 4],
        ['Monica', 3],
        ['Fabio', 3],
        ['Bruno', 4],
        ['Renata', 5],
        ['Roger', 6],
        ['Renan', 7],
        ['Mauro', 8],
        ['Ellis', 9],
        ['Wilson', 10],
        ['Tatiane', 9],
        ['Beatriz', 8],
        ['Severino', 7],
        ['Cinthia', 6],
        ['Jaimar', 5],
        ['Ivan', 4],
        ['Fernando', 3],
        ['Andrea', 3],
        ['Daniel', 3],
        ['Rafael', 3],
        ['Thiago', 3]
      ],
      fontFamily: 'Fredericka the Great',
      colorItems: ['#ffd077', '#3bc4c7', '#3a9eea', '#ff4e69', '#461e47'],
      animationDurationValues: [0, 1000, 5000, 10000]
    }
  },
  methods: {
    picker: list => {
      var chosenNumber = Math.floor(Math.random() * list.length)
      return list[chosenNumber]
    }
  }
}
</script>

<style lang="sass" scoped>
  .container
    background-color: rgba(255, 0, 0, 0.3)
</style>
