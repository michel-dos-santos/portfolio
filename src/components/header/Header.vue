<template>
  <q-card dark bordered class="bg-grey-9 q-pb-xl">
    <q-card-section class="col">
      <AvatarComponent class="row justify-center" />
      <div class="col q-pt-md">
        <div class="row justify-center text-h3 text-bold">Michel dos Santos</div>
        <div class="row justify-center text-h5 text-primary">
          Um desenvolvedor web amante dos desafios
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
        <LanguageItemComponent :value="item.value" :text="item.text" />
      </template>
    </SectionComponent>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";
import AvatarComponent from "components/header/Avatar";
import SectionComponent from "components/header/section/Section";
import HobbyItemComponent from "components/header/HobbyItem";
import LanguageItemComponent from "components/header/LanguageItem";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    AvatarComponent,
    SectionComponent,
    HobbyItemComponent,
    LanguageItemComponent
  },
  computed: {
    info() {
      let birthday = new Date(1988, 12, 10);
      let now = Date.now();
      let unit = "years";
      let diff = date.getDateDiff(now, birthday, unit);
      return {
        title: "INFO",
        items: [
          {
            name: "Email",
            icon: "mdi-email",
            text: "michel.ds.santos@gmail.com",
          },

          {
            name: "Data de Nascimento",
            icon: "mdi-cake-variant",
            text: `10 de Dezembro de 1988 (${diff} anos)`,
          },
          {
            name: "Endereço",
            icon: "mdi-map-marker",
            text: "Itaquaquecetuba, São Paulo",
          },
        ],
      };
    },
    socials() {
      return {
        title: "REDES",
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
        title: "HOBBIES",
        items: [
          {
            icon: "mdi-arrow-left",
            text: "Sair da zona de conforto",
          },
          {
            icon: "mdi-puzzle",
            text: "Desafios",
          },
          {
            icon: "mdi-bike",
            text: "Ciclismo",
          },
          {
            icon: "mdi-microsoft-xbox-controller",
            text: "Jogar Games",
          },
          {
            icon: "mdi-book-open-variant",
            text: "Ler Livros",
          },
          {
            icon: "mdi-playlist-music",
            text: "Ouvir Musica",
          },
        ],
      };
    },
    languages() {
      return {
        title: "IDIOMAS",
        items: [
          {
            text: "Português",
            value: 100,
          },
          {
            text: "English",
            value: 45,
          },
        ],
      };
    },
  },
  setup() {},
});
</script>
