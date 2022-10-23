<template>
  <q-page>
    <HeaderComponent class="full-height" />
    <div class="col-auto" style="margin-top: -47px;">
      <div class="row justify-center">
        <ResumeComponent style="max-width: 1440px" />
      </div>
    </div>
    <PortfolioComponent style="margin-top: -70px;" class="full-height"/>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import HeaderComponent from "components/header/Header.vue";
import ResumeComponent from "components/resume/ResumeComponent.vue";
import PortfolioComponent from "components/portfolio/Portfolio.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    HeaderComponent,
    ResumeComponent,
    PortfolioComponent,
  },
});
</script>
