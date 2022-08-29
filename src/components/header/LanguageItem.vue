<template>
  <q-circular-progress
    show-value
    class="text-light-white q-ma-sm"
    :value="value"
    size="90px"
    font-size="12px"
    :thickness="0.1"
    color="white"
    >{{ text }}
  </q-circular-progress>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LanguageItemComponent",
  props: {
    value: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
});
</script>
