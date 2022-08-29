<template>
  <q-circular-progress
    show-value
    class="text-light-white q-ma-sm cursor-pointer"
    :value="value"
    size="90px"
    font-size="12px"
    :thickness="0.1"
    color="white"
    @click="changeLanguage"
    >{{ text }}
  </q-circular-progress>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "LanguageItemComponent",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: "",
    },
  },
  methods: {
    changeLanguage() {
      this.locale = this.language
    }
  },
  setup() {
    const { locale } = useI18n({ useScope: "global" });

    return {
      locale,
    };
  },
});
</script>
