<template>
  <q-card dark bordered class="bg-grey-9 q-pb-xl">
    <q-card-section class="col">
      <AvatarComponent class="row justify-center" />
      <div class="col q-pt-md">
        <div class="row justify-center text-h3 text-bold">
          {{ $t("HEADER.NAME", 1) }}
        </div>
        <div class="row justify-center text-h5 text-primary">
          {{ $t("HEADER.MY_PHRASE", 1) }}
        </div>
      </div>
    </q-card-section>

    <SectionComponent :options="info" />
    <SectionComponent :options="socials" />
    <SectionComponent :options="hobbies">
      <template v-slot:item="{ item }">
        <HobbyItemComponent :icon="item.icon" :text="item.text" />
      </template>
    </SectionComponent>
    <SectionComponent :options="languages">
      <template v-slot:item="{ item }">
        <LanguageItemComponent :value="item.value" :text="item.text" :language="item.language" />
      </template>
    </SectionComponent>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
import packageInfo from "../../../package.json"
import { date } from "quasar";
import AvatarComponent from "components/header/avatar/Avatar.vue";
import SectionComponent from "components/header/section/Section.vue";
import HobbyItemComponent from "components/header/hobby/HobbyItem.vue";
import LanguageItemComponent from "components/header/language/LanguageItem.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    AvatarComponent,
    SectionComponent,
    HobbyItemComponent,
    LanguageItemComponent,
  },
  setup() {
    return {
      appVersion: packageInfo.version
    }
  },
  computed: {
    info() {
      let birthday = new Date(1988, 12, 10);
      let now = Date.now();
      let unit = "years";
      let diff = date.getDateDiff(now, birthday, unit);

      let updateDays = date.getDateDiff(now, date.extractDate(this.appVersion, "YY.MM.DD"), 'days');
      let updateWas = `${updateDays} ${this.$t('DAYS', (updateDays > 1 ? 0 : 1))}`
      
      return {
        title: this.$t("HEADER.INFO.TITLE", 1),
        items: [
          {
            name: this.$t("HEADER.INFO.EMAIL", 1),
            icon: "mdi-email",
            text: "michel.ds.santos@gmail.com",
          },

          {
            name: this.$t("HEADER.INFO.BIRTHDAY", 1),
            icon: "mdi-cake-variant",
            text: `10 de Dezembro de 1988 (${diff} anos)`,
          },
          {
            name: this.$t("HEADER.INFO.ADDRESS", 1),
            icon: "mdi-map-marker",
            text: "Itaquaquecetuba, São Paulo",
          },
          {
            name: this.$t("HEADER.INFO.UPDATE_WAS", 1),
            icon: "mdi-update",
            text: `${updateWas}`,
          },
        ],
      };
    },
    socials() {
      return {
        title: this.$t("HEADER.SOCIALS.TITLE", 1),
        items: [
          {
            icon: "mdi-github",
            text: "github.com/michel-dos-santos",
            link: "https://github.com/michel-dos-santos",
          },
          {
            icon: "mdi-linkedin",
            text: "www.linkedin.com/in/michel-dos-santos-8487634a",
            link: "https://www.linkedin.com/in/michel-dos-santos-8487634a/",
          },
        ],
      };
    },
    hobbies() {
      return {
        title: this.$t("HEADER.HOBBIES.TITLE", 1),
        items: [
          {
            icon: "mdi-arrow-left",
            text: this.$t("HEADER.HOBBIES.GET_OUT_OF_THE_COMFORT_ZONE", 1),
          },
          {
            icon: "mdi-puzzle",
            text: this.$t("HEADER.HOBBIES.CHALLENGES", 1),
          },
          {
            icon: "mdi-bike",
            text: this.$t("HEADER.HOBBIES.BIKE", 1),
          },
          {
            icon: "mdi-microsoft-xbox-controller",
            text: this.$t("HEADER.HOBBIES.PLAY_GAMES", 1),
          },
          {
            icon: "mdi-book-open-variant",
            text: this.$t("HEADER.HOBBIES.READ_BOOKS", 1),
          },
          {
            icon: "mdi-playlist-music",
            text: this.$t("HEADER.HOBBIES.LISTEN_MUSIC", 1),
          },
          {
            icon: "mdi-weight-lifter",
            text: this.$t("HEADER.HOBBIES.BODY_BUILDING", 1),
          },
        ],
      };
    },
    languages() {
      return {
        title: this.$t("HEADER.LANGUAGES.TITLE", 1),
        items: [
          {
            text: this.$t("HEADER.LANGUAGES.PORTUGUESE", 1),
            value: 100,
            language: 'pt-BR'
          },
          {
            text: this.$t("HEADER.LANGUAGES.ENGLISH", 1),
            value: 45,
            language: 'en-US'
          },
        ],
      };
    },
  },
});
</script>
