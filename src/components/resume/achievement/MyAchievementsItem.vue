<template>
  <q-item v-for="item in items" :key="item.name" :item="item">
    <q-item-section avatar>
      <q-icon :name="item.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ item.name }}</q-item-label>
      <q-item-label caption class="text-grey">{{ item.text }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyAchievementsItemComponent",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
