import { defineComponent, ref } from "vue";
import { date } from "quasar";
import SectionComponent from "components/resume/section/Section.vue";
import WhoAmIItemComponent from "components/resume/who-am-i/WhoAmIItem.vue";
import MyAchievementsItemComponent from "components/resume/achievement/MyAchievementsItem.vue";
import EducationItemComponent from "components/resume/education/EducationItem.vue";
import SoftSkilltemComponent from "components/resume/soft-skill/SoftSkillItem.vue";
import HardSkillItemComponent from "components/resume/hard-skill/HardSkillItem.vue";
import ExperienceItemComponent from "components/resume/experience/ExperienceItem.vue";

export default defineComponent({
  name: "ResumeComponent",
  components: {
    SectionComponent,
    WhoAmIItemComponent,
    MyAchievementsItemComponent,
    EducationItemComponent,
    SoftSkilltemComponent,
    HardSkillItemComponent,
    ExperienceItemComponent,
  },
  computed: {
    whoAmI() {
      let schoolEnded = new Date(2014, 11, 10);
      let now = Date.now();
      let unit = "years";
      let diff = date.getDateDiff(now, schoolEnded, unit);
      return {
        title: this.$t("RESUME.WHO_AM_I.TITLE", 1),
        content: this.$t("RESUME.WHO_AM_I.CONTENT", { diff }),
      };
    },
    myAchievements() {
      return {
        title: this.$t("RESUME.MY_ACHIEVEMENTS.TITLE", 1),
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
        title: this.$t("RESUME.EDUCATION.TITLE", 1),
        items: [
          {
            period: "2022",
            name: "Inglês",
            text: "SmartUP",
          },
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
    softSkills() {
      return {
        title: this.$t("RESUME.SOFT_SKILLS.TITLE", 1),
        subTitle: this.$t("RESUME.SOFT_SKILLS.SUB_TITLE", 1),
        items: [
          {
            title: this.$t("RESUME.SOFT_SKILLS.COMMUNICATIVE", 1),
            icon: "record_voice_over",
            value: 80,
          },
          {
            title: this.$t("RESUME.SOFT_SKILLS.PROACTIVE", 1),
            icon: "work_history",
            value: 100,
          },
          {
            title: this.$t("RESUME.SOFT_SKILLS.LEADERSHIP", 1),
            icon: "groups",
            value: 60,
          },
          {
            title: this.$t("RESUME.SOFT_SKILLS.CRITICAL_THINKING", 1),
            icon: "mdi-information",
            value: 65,
          },
          {
            title: this.$t("RESUME.SOFT_SKILLS.PROBLEM_SOLVING", 1),
            icon: "mdi-information",
            value: 80,
          },
          {
            title: this.$t("RESUME.SOFT_SKILLS.CREATIVITY", 1),
            icon: "mdi-information",
            value: 45,
          },
        ],
      };
    },
    hardSkills() {
      return {
        title: this.$t("RESUME.HARD_SKILLS.TITLE", 1),
        subTitle: this.$t("RESUME.HARD_SKILLS.SUB_TITLE", 1),
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
            value: 70,
          },
          {
            title: "Node",
            icon: "mdi-nodejs",
            value: 55,
          },
          {
            title: "Dart",
            icon: "mdi-information",
            value: 45,
          },
          {
            title: "Flutter Framework",
            icon: "mdi-information",
            value: 55,
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
            value: 25,
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
            value: 60,
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
    experience() {
      return {
        title: this.$t("RESUME.EXPERIENCE.TITLE", 1),
        actionTitle: this.$t("RESUME.EXPERIENCE.ACTION_DETAILS", 1),
        items: [
          {
            company: "Central de Registros CRDC",
            location: "Sé - SP",
            onlyTI: true,
            functions: [
              {
                function: "Arquiteto de software",
                startDate: "2021/05",
                endDate: "Atualmente",
                descriptions: [
                  "Liderar e coordenar as atividades e artefatos técnicos dos projetos (Registro de ativos e Seguros).",
                  "Garantir que a arquitetura contemple os atributos de qualidade.",
                  "Ajudar a garantir que a arquitetura seja aplicada nos projetos.",
                  "Ajudar na definição e decisão da melhor solução.",
                  "Guardião de boas práticas implementadas dentro dos projetos.",
                  "Oferecer suporte aos demais projetos dentro da empresa.",
                  "Definir e documentar estratégias, padrões, guias, etc, para direcionar a construção dos sistemas internos.",
                  "Oferecer melhoria continua dos processos, frameworks, metodologias utilizadas dentro da empresa.",
                ],
              },
              {
                function: "Analista Desenvolvedor Senior",
                startDate: "2019/10",
                endDate: "2021/05",
                descriptions: [
                  "Portal de Registros: seu objetivo é registrar e centralizar ativos financeiros (Duplicata Mercantil, Duplicata de Serviço, Cheque pós datado, Contrato ESC e diversos, Empréstimo Consignado e Nota Fiscal) para assim garantir a unicidade do ativo.",
                  "Tecnologias e Ferramentas utilizadas: Java 8, JPA, AngularJS 6, Spring Boot, HTML5, CSS3, JavaScript, Maven, Gradle, JSON, Postman, SQLSERVER, Git, Bitbucket, SourceTree, Putty, Cloud (IBM, AWS), Jira, Jenkins",
                  "Scrum como metodologia ágil.",
                  "",
                  "Duplicata Digital: seu objetivo é facilitar a relação entre agentes financeiros como bancos, FIDC’s, factoring e empresários que buscam crédito com base em seus recebíveis, garantindo seu lastro e sua unicidade dos títulos, proporcionando a emissão, endosso, aceite, aval e guarda do título de crédito.",
                  "Tecnologias e Ferramentas utilizadas: Java, Hibernate, JSF, PrimeFaces, JasperReports, Spring, HTML, CSS, JavaScript, Maven, JBoss 6, EJB, Tomcat 6, WildFly 8, JSON, SOAP, SVN, PostgreSQL, DB2, Putty, Cloud (IBM, AWS), Jira.",
                  "Scrum como metodologia ágil.",
                  "",
                  "SRO: Seu objetivo é registrar operações do segmento de Seguros para todos os grupos de ramos como por exemplo Riscos Financeiros, Pessoas, Rural, Automóveis e etc... Garantir a unicidade das operações através da interoperabilidade das registradoras homologadas pela SUSEP. Garantir a integridade dos dados registrados e oferecer insights dos dados.",
                  "Tecnologias e Ferramentas utilizadas: Java 8, JPA, AngularJS 6, Spring Boot, HTML5, CSS3, JavaScript, Maven, JSON, Postman, SQLSERVER, Git, Bitbucket, Putty, Cloud (IBM, AWS), Jira, Jenkins",
                  "Scrum como metodologia ágil.",
                  "Papel de Líder Técnico + Scrum Master + Arquiteto de Software",
                ],
              }
            ]
          },
          {
            company: "Spread Tecnologia",
            location: "Santo Amaro - SP",
            onlyTI: true,
            functions: [
              {
                function: "Analista/Desenvolvedor Pleno",
                startDate: "2019/04",
                endDate: "2019/10",
                descriptions: [
                  "Analisar/Desenvolver demandas para serem aplicadas no sistema de ATM da Caixa Econômica Federal.",
                  "Tecnologias e Ferramentas utilizadas: Java (SE e EE), Hibernate, Maven, EJB, JSP, Spring, ActiveMQ, Firebird, Linux, PostgreSQL, ClearCase, Jira, Reflection, SVN, Quartz, Jenkins, Eclipse."
                ],
              }
            ]
          },
          {
            company: "Sintel Tecnologia e Informação S.A.",
            location: "Ana Rosa - SP",
            onlyTI: true,
            functions: [
              {
                function: "Analista/Desenvolvedor de Software Java",
                startDate: "2012/10",
                endDate: "2019/01",
                descriptions: [
                  "Realização de manutenções no sistema Sintel Plan (logísticas do setor automotivo)",
                  "Aplicando boas praticas de desenvolvimento como: Design Pattern.",
                  "Teste Unitário utilizando JUnit e TDD. ",
                  "Automação de build com apache Ant e Maven.",
                  "Controle de repositório de código com Team Fundation (Microsoft).",
                  "Desenvolvimento na linguagem Java e Delphi 5.",
                  "Utilização de banco de dados como: Oracle e SQL Server.",
                  "Analise de Código usando SonarQube.",
                  "Repositório de Library Sonatype Nexus.",
                  "Analise de Sistemas.",
                  "Requisitos de Software (Solução e Especificação funcional).",
                  "Priorizar, Planejar e acompanhar as demandas junto as áreas clientes.",
                  "Definir e Manter processos da área.",
                  "Criação do site da Empresa utilizando CMS: Joomla 2.5+ com customizações em JavaScript, CSS, Ajax, Jquery e PHP.",
                ],
              }
            ]
          },
          {
            company: "Sitel",
            location: "Mooca - SP",
            onlyTI: false,
            functions: [
              {
                function: "Analista de Suporte Pleno – L2 Consumer",
                startDate: "2011/03",
                endDate: "2012/10",
                descriptions: [
                  "Verificar chamados técnicos dos analistas L1, para averiguar se o mesmo poderá ser resolvido com a peça solicitada e se os testes realizados são suficientes para identificar o problema do equipamento do cliente.",
                  "Prestar suporte aos analistas L1 em caso de duvidas técnicas e procedimentos interno.",
                  "Montar planilhas das performance dos analistas para verificar as maiores dificuldades, para poder oferecer treinamentos dos procedimentos em gerais.",
                  "Execução de tarefas extras bem como: analisar chamados pendentes(eticket), recriação dos chamados por motivos específicos(exceção) e testando novas ferramentas Dell."
                ],
              }
            ]
          },
          {
            company: "Geminni Com. e Serviço Têxtil Ltda",
            location: "Ferraz de Vasconcelos - SP",
            onlyTI: false,
            functions: [
              {
                function: "Calandrista",
                startDate: "2008/07",
                endDate: "2010/07",
                descriptions: [
                  "Liderança de sessão, modificação de gramatura e largura conforme solicitação do cliente, produção de brilho no tecido e vaporização"
                ],
              }
            ]
          },
          {
            company: "Styllus Lan House",
            location: "Ferraz de Vasconcelos - SP",
            onlyTI: false,
            functions: [
              {
                function: "Auxiliar de Manutenção de Microcomputador",
                startDate: "2007/10",
                endDate: "2008/08",
                descriptions: [
                  "Atendimento e manutenção nos computadores"
                ],
              }
            ]
          },
        ],
      };
    }
  },
  setup() {},
});