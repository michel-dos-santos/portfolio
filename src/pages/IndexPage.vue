<template>
  <q-page class="flex justify-center">
    <div style="width:1440px;">
      <HeaderComponent />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import HeaderComponent from "components/Header";

export default defineComponent({
  name: "IndexPage",
  components: {
    HeaderComponent,
  },
});
</script>
