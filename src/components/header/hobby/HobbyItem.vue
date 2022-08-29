<template>
  <q-chip color="white">
    <q-avatar>
      <q-icon :name="icon" />
    </q-avatar>
    {{ text }}
  </q-chip>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HobbyItemComponent",
  props: {
    icon: {
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
