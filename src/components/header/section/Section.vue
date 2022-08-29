<template>
  <q-card-section>
    <div class="row justify-center text-h6 text-bold">{{ options.title }}</div>
    <q-separator dark spaced size="2px"/>
    <template v-if="slots.item">
      <div class="q-py-xs row justify-center">
        <slot v-for="item in options.items" name="item" :item="item" />
      </div>
    </template>
    <div v-else :class="`row justify-${$q.platform.is.mobile ? 'start' : 'center'}`">
      <SectionItemComponent
        v-for="item in options.items"
        :key="item.text"
        :item="item"
      />
    </div>
  </q-card-section>
</template>

<script>
import { defineComponent, useSlots } from "vue";
import SectionItemComponent from "components/header/section/item/SectionItem";

export default defineComponent({
  name: "SectionComponent",
  components: { SectionItemComponent },
  props: {
    options: {
      type: Object,
      default: () => {},
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
