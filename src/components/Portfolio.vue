<template>
  <div class="container text-h6 text-white" :style="`padding: 50px ${!$q.platform.is.mobile ? 150 : 50}px`">
    <p class="text-h1 text-orange">Portfolio</p>
    <p class="text-h5 text-italic text-orange">Alguns dos meus desafios</p>
    <p>Estou atualizando os meus repositórios de códigos fontes para trazer os meus portfolios com imagens, videos e uma documentação :)</p>
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
    background-color: rgba(51, 101, 114, 0.3)
</style>
