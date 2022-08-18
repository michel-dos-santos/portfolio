<template>
  <q-card dark bordered class="bg-grey-9 q-ma-lg">
    <q-card-section class="col">
      <AvatarComponent class="row justify-center" />
      <div class="col q-pt-md">
        <div class="row justify-center text-h3">Michel dos Santos</div>
        <div class="row justify-center text-h5">
          Um desenvolvedor web amante de desafios
        </div>
      </div>
    </q-card-section>

    <SectionComponent :options="info" />
    <SectionComponent :options="socials" />
    <SectionComponent :options="hobbies">
      <template v-slot:item="{ item }">
        <q-chip color="grey">
          <q-avatar>
            <q-icon :name="item.icon" />
          </q-avatar>
          {{ item.text }}
        </q-chip>
      </template>
    </SectionComponent>
    <SectionComponent :options="languages">
      <template v-slot:item="{ item }">
        <q-circular-progress
          show-value
          class="text-light-white q-ma-sm"
          :value="item.value"
          size="90px"
          font-size="12px"
          :thickness="0.1"
          color="white"
          >{{ item.text }}
        </q-circular-progress>
      </template>
    </SectionComponent>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";
import AvatarComponent from "components/Avatar";
import SectionComponent from "components/section/Section";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    AvatarComponent,
    SectionComponent,
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
            icon: "email",
            text: "michel.ds.santos@gmail.com",
          },

          {
            name: "Data de Nascimento",
            icon: "info",
            text: `10 de Dezembro de 1988 (${diff} anos)`,
          },
          {
            name: "Endereço",
            icon: "info",
            text: "Itaquaquecetuba, São Paulo",
          },
        ],
      };
    },
    socials() {
      return {
        title: "SOCIALS",
        items: [
          {
            icon: "info",
            text: "github.com/michel-dos-santos",
            link: "https://github.com/michel-dos-santos",
          },
          {
            icon: "info",
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
            icon: "info",
            text: "Sair da zona de conforto",
          },
          {
            icon: "info",
            text: "Desafios",
          },
          {
            icon: "info",
            text: "Ciclismo",
          },
          {
            icon: "info",
            text: "Jogar Games",

            icon: "info",
            text: "Ler Livros",
          },
          {
            icon: "info",
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
