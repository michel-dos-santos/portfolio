<template>
  <div class="row q-col-gutter-x-xs">
    <div v-for="(item, index) in items" :key="index" class="col-xs-12 col-sm-6">
      <div class="q-px-md">
        <q-item class="q-pa-none">
          <q-item-section avatar>
            <q-icon :name="item.icon" color="grey" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item-section>
          <q-linear-progress
            :value="item.value / 100"
            rounded
            color="primary"
          />
        </q-item-section>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HardSkillItemComponent",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
