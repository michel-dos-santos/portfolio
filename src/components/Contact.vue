<template>
  <div class="container text-h6 text-white" :style="`padding: 50px ${!$q.platform.is.mobile ? 150 : 50}px`">
    <p :class="`text-h${$q.screen.width < 398 ? 2 : 1} text-orange`">Contato</p>
    <p class="text-h5 text-italic text-orange q-pb-lg">Vamos conversar, entre em contato comigo como quiser</p>
    <br>
    <div class="q-pt-lg">
      <p class="row justify-center">Estou ansioso para conversarmos, entre em contato, estou quase sempre online :)</p>
      <div class="row justify-center">
        <q-btn flat no-wrap no-caps class="text-h6" type="a" href="https://wa.me/5511982913435" target="__blank" label="WhatsApp: (11) 98291-3435" color="white" />
      </div>
      <div class="row justify-center q-pb-lg">
        <p>michel.ds.santos@gmail.com</p>
      </div>
      <footer class="row justify-center q-pt-lg">
        <small>&copy; Copyright {{currentYear}}</small>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
