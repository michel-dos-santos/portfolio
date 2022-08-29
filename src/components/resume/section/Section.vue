<template>
  <q-card-section>
    <div>
      <q-item-label class="text-h6 text-bold">{{ title }}</q-item-label>
      <q-item-label caption>{{ subTitle }}</q-item-label>
    </div>
    <q-separator spaced size="2px" />
  </q-card-section>
  <q-card-section class="q-pt-none">
    <slot />
  </q-card-section>
</template>

<script>
import { defineComponent } from "vue";
import { useSlots } from "vue";

export default defineComponent({
  name: "SectionComponent",
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
  },
  setup() {
    const slots = useSlots();

    return {
      slots,
    };
  },
});
</script>
