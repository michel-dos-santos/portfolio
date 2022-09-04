<template>
  <div>
    <q-toggle
      :label="actionTitle"
      v-model="onlyTI"
    />
    <q-item v-for="item in itemsFilter" :key="item.company">
      <q-item-section>
        <q-item-label class="text-h4 text-bold">{{ item.company }}</q-item-label>
        <q-item-label caption class="text-bold text-grey">{{ item.location }}</q-item-label>

        <q-item>
          <q-timeline color="primary">
            <q-timeline-entry
              v-for="func in item.functions" :key="func.function"
              :title="func.function"
              :subtitle="dateFormat(func.startDate, func.endDate)"
            >
              <div v-for="description in func.descriptions" :key="description">
                <ul>
                  <li>{{description}}</li>
                  <br v-if="!description">
                </ul>
              </div>
            </q-timeline-entry>
          </q-timeline>
        </q-item>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";

export default defineComponent({
  name: "ExperienceItemComponent",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    actionTitle: {
      type: String,
      default: ""
    }
  },
  beforeMount() {
    this.filterItems()
  },
  setup() {
    const onlyTI = ref(true)
    const itemsFilter = ref([])
    const totalItems = ref(3)

    return {
      onlyTI,
      itemsFilter,
      totalItems,
    }
  },
  watch: {
    onlyTI (val) {
      this.filterItems()
    },
    totalItems (val) {
      this.filterItems()
    }
  },
  methods: {
    filterItems() {
      this.itemsFilter = this.onlyTI ? this.items.filter(item => (item.onlyTI)) : this.items
    },
    dateFormat(start, end) {
      let diffYear = Number.parseInt(date.getDateDiff(end, start, 'months') / 12)
      let diffMonth = (date.getDateDiff(end, start, 'months') % 30)
      diffMonth = diffMonth < 12 ? diffMonth : (diffMonth % 12) 
      let dateStart = date.formatDate(start, 'MM/YYYY')
      let dateEnd = date.isValid(end) ? date.formatDate(end, 'MM/YYYY') : this.$t(end)

      let totalYears = diffYear > 0 ? `${diffYear} ${this.$t('YEARS', (diffYear > 1 ? 0 : 1))}` : ''
      let totalMonths = diffMonth > 0 ? `${diffMonth} ${this.$t('MONTHS', (diffMonth > 1 ? 0 : 1))}` : ''
      let separator = (diffYear > 0) && (diffMonth > 0) ? ' - ' : ''
      let details = date.isValid(end) ? `(${totalYears}${separator}${totalMonths})` : ''

      return `${dateStart} ${this.$t('UNTIL')} ${dateEnd} ${details}`;
    }
  },
});
</script>
