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

    <SectionComponent :options="sections.info" />
    <SectionComponent :options="sections.socials" />
    <SectionComponent :options="sections.hobbies">
      <template v-slot:item="{ item }">
        <q-chip color="grey">
          <q-avatar>
            <q-icon :name="item.icon" />
          </q-avatar>
          {{ item.text }}
        </q-chip>
      </template>
    </SectionComponent>
    <SectionComponent :options="sections.languages">
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
import AvatarComponent from "components/Avatar";
import SectionComponent from "components/section/Section";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    AvatarComponent,
    SectionComponent,
  },
  setup() {
    return {
      sections: ref({
        info: {
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
              text: "10 de Dezembro de 1988",
            },
            {
              name: "Endereço",
              icon: "info",
              text: "Itaquaquecetuba, São Paulo",
            },
          ],
        },
        socials: {
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
            }
          ],
        },
        hobbies: {
          title: "HOBBIES",
          items: [
            {
              icon: "info",
              text: "Getting out of Safe Zone",
            },
            {
              icon: "info",
              text: "Challenges",
            },
            {
              icon: "info",
              text: "Cycling",
            },
            {
              icon: "info",
              text: "Nature",

              icon: "info",
              text: "Sports",
            },
            {
              icon: "info",
              text: "Music",
            },

            {
              icon: "info",
              text: "Books",
            },
          ],
        },
        languages: {
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
        },
      }),
    };
  },
});
</script>
