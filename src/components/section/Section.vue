<template>
  <q-card-section>
    <div>{{ options.title }}</div>
    <q-separator dark size="2px" />
    <template v-if="slots.item">
      <div class="q-py-xs row justify-center">
        <slot v-for="item in options.items" name="item" :item="item" />
      </div>
    </template>
    <div v-else class="row justify-center">
      <SectionItemComponent
        v-for="item in options.items"
        :key="item.text"
        :item="item"
      />
    </div>
  </q-card-section>
</template>

<script>
import { defineComponent } from "vue";
import { useSlots } from "vue";
import SectionItemComponent from "components/section/SectionItem";

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
