<template>
  <q-item class="q-pl-none">
    <q-item-section avatar>
      <q-icon :name="item.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ item.name }}</q-item-label>
      <a v-if="item.link" target="_blank" :href="item.link" class="text-grey">{{
        item.text
      }}</a>
      <q-item-label v-else caption class="text-grey">{{
        item.text
      }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionItemComponent",
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    hasIcon() {
      return !!this.item.icon;
    },
  },
  setup() {},
});
</script>
