<template>
  <q-card bordered class="bg-white-9 q-mb-lg shadow-up-20">
    <SectionComponent :title="whoAmI.title">
      <q-item>
        {{ whoAmI.content }}
      </q-item>
    </SectionComponent>

    <SectionComponent :title="myAchievements.title" v-if="false">
      <q-item
        v-for="item in myAchievements.items"
        :key="item.name"
        :item="item"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption class="text-grey">{{ item.text }}</q-item-label>
        </q-item-section>
      </q-item>
    </SectionComponent>

    <SectionComponent :title="education.title">
      <q-item v-for="item in education.items" :key="item.name" :item="item">
        <q-item-section avatar>
          <q-item-label>{{ item.period }}</q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption class="text-grey">{{ item.text }}</q-item-label>
        </q-item-section>
      </q-item>
    </SectionComponent>

    <SectionComponent :title="softSkills.title" :subTitle="softSkills.subTitle">
      <div class="row q-col-gutter-x-xs">
        <div
          v-for="(item, index) in softSkills.items"
          :key="index"
          class="col-xs-12 col-sm-6"
        >
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
    </SectionComponent>

    <SectionComponent :title="hardSkills.title" :subTitle="hardSkills.subTitle">
      <div class="row q-col-gutter-x-xs">
        <div
          v-for="(item, index) in hardSkills.items"
          :key="index"
          class="col-xs-12 col-sm-6"
        >
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
    </SectionComponent>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";
import SectionComponent from "components/resume/Section";

export default defineComponent({
  name: "ResumeComponent",
  components: {
    SectionComponent,
  },
  computed: {
    whoAmI() {
      let schoolEnded = new Date(2014, 11, 10);
      let now = Date.now();
      let unit = "years";
      let diff = date.getDateDiff(now, schoolEnded, unit);
      return {
        title: "Quem sou eu?",
        content:
          `Sou analista desenvolvedor fullstack, tenho mais de ${diff} anos na área de desenvolvimento de software e sou simplesmente apaixonado por T.I e no que ela nos possibilita fazer.`,
      };
    },
    myAchievements() {
      return {
        title: "Minhas conquistas",
        items: [
          {
            icon: "info",
            name: "AASLJLD",
            text: "asdffffdsasdfasdfasdfasf",
          },
          {
            icon: "info",
            name: "AASLJLD",
            text: "asdffffdsasdfasdfasdfasf",
          },
          {
            icon: "info",
            name: "AASLJLD",
            text: "asdffffdsasdfasdfasdfasf",
          },
          {
            icon: "info",
            name: "AASLJLD",
            text: "asdffffdsasdfasdfasdfasf",
          },
        ],
      };
    },
    education() {
      return {
        title: "Educação e Cursos",
        items: [
          {
            period: "2018",
            name: "Como Tornar-se um Gerente Extraordinário",
            text: "ESPM Escola Superior de Propaganda e Marketing",
          },
          {
            period: "2018",
            name: "Curso Completo do Desenvolvedor NodeJS e MongoDB",
            text: "Udemy",
          },
          {
            period: "2018",
            name: "React + Redux: Fundamentos e Duas Apps do Absoluto Zero",
            text: "Udemy",
          },
          {
            period: "2018",
            name: "Curso Desenvolvedor Web Completo 2018 + 10 de projetos",
            text: "Udemy",
          },
          {
            period: "2018",
            name: "JavaScript - Curso Completo com 6 Projetos Reais",
            text: "Udemy",
          },
          {
            period: "2018",
            name: "Curso Web Moderno com JavaScript 2019! COMPLETO + Projetos",
            text: "Udemy",
          },
          {
            period: "2016",
            name: "Scrum - Gestão Ágil de Projetos",
            text: "Ka Solution",
          },
          {
            period: "2014",
            name: "Bacharel em Ciência da Computação",
            text: "Universidade Cidade de São Paulo - UNICID",
          },
          {
            period: "2009",
            name: "Montagem e Configuração de Microcomputadores e Rede",
            text: "Senai",
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
    softSkills() {
      return {
        title: "SOFT SKILLS",
        subTitle: "(% são relativas)",
        items: [
          {
            title: "Comunicativo",
            icon: "record_voice_over",
            value: 80,
          },
          {
            title: "Proativo",
            icon: "work_history",
            value: 100,
          },
          {
            title: "Liderança",
            icon: "groups",
            value: 60,
          },
          {
            title: "Pensamento crítico",
            icon: "mdi-information",
            value: 65,
          },
          {
            title: "Resolução de problemas",
            icon: "mdi-information",
            value: 80,
          },
          {
            title: "Criatividade",
            icon: "mdi-information",
            value: 45,
          },
        ],
      };
    },
    hardSkills() {
      return {
        title: "HARD SKILLS",
        subTitle: "(% são relativas)",
        items: [
          {
            title: "Java 5+",
            icon: "mdi-language-java",
            value: 90,
          },
          {
            title: "PHP",
            icon: "mdi-language-php",
            value: 25,
          },
          {
            title: "JavaScript",
            icon: "mdi-language-javascript",
            value: 80,
          },
          {
            title: "Node",
            icon: "mdi-nodejs",
            value: 65,
          },
          {
            title: "Dart",
            icon: "mdi-information",
            value: 65,
          },
          {
            title: "Flutter Framework",
            icon: "mdi-information",
            value: 65,
          },
          {
            title: "Vue.js Framework",
            icon: "mdi-vuejs",
            value: 80,
          },
          {
            title: "Angular Framework",
            icon: "mdi-angular",
            value: 55,
          },
          {
            title: "React Framework",
            icon: "mdi-react",
            value: 45,
          },
          {
            title: "HTML5",
            icon: "mdi-language-html5",
            value: 85,
          },
          {
            title: "CSS3",
            icon: "mdi-language-css3",
            value: 55,
          },
          {
            title: "Git",
            icon: "mdi-git",
            value: 77,
          },
          {
            title: "Scrum",
            icon: "mdi-information",
            value: 85,
          },
          {
            title: "Jira",
            icon: "mdi-jira",
            value: 80,
          },
          {
            title: "CMS Joomla",
            icon: "mdi-information",
            value: 60,
          },
          {
            title: "CMS WordPress",
            icon: "mdi-wordpress",
            value: 55,
          },
          {
            title: "SQL",
            icon: "mdi-database-search",
            value: 70,
          },
          {
            title: "Oracle SQL",
            icon: "mdi-database-search",
            value: 55,
          },
          {
            title: "MongoDB",
            icon: "mdi-database-search",
            value: 35,
          },
          {
            title: "JUnit",
            icon: "mdi-information",
            value: 75,
          },
          {
            title: "Linux",
            icon: "mdi-linux",
            value: 55,
          },
          {
            title: "Spring MVC, Boot, Data, Security",
            icon: "mdi-information",
            value: 80,
          },
          {
            title:
              "Cloud AWS (S3, Lambda, Cognito, Amplify, Route 53, CloudFront, EC2, CodeBuild, CodeDeploy, CodePipeline, SQS, SNS)",
            icon: "mdi-aws",
            value: 75,
          },
          {
            title: "Jenkins",
            icon: "mdi-information",
            value: 80,
          },
          {
            title: "IReport",
            icon: "mdi-information",
            value: 40,
          },
        ],
      };
    },
  },
  setup() {},
});
</script>

<style lang="sass">
.itemSkill
  width: 100%
</style>
