<template>
  <q-page>
    <HeaderComponent class="full-height" />
    <div class="col-auto" style="margin-top: -47px;">
      <div class="row justify-center">
        <ResumeComponent style="max-width: 1440px" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import HeaderComponent from "components/header/Header";
import ResumeComponent from "components/resume/Resume";

export default defineComponent({
  name: "IndexPage",
  components: {
    HeaderComponent,
    ResumeComponent,
  },
});
</script>
