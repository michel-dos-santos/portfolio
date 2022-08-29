<template>
  <q-item>
    {{ text }}
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WhoAmIItemComponent",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
});
</script>
