<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-8">
      <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
  },
  setup () {
  }
})
</script>
