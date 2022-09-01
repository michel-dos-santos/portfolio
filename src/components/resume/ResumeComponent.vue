<script lang="js" src="./ResumeComponent.js" />
<template>
  <q-card bordered class="bg-white-9 q-mb-lg shadow-up-20">
    <SectionComponent :title="whoAmI.title">
      <WhoAmIItemComponent :text="whoAmI.content" />
    </SectionComponent>

    <SectionComponent :title="myAchievements.title" v-if="false">
      <MyAchievementsItemComponent :items="myAchievements.items" />
    </SectionComponent>

    <SectionComponent :title="education.title">
      <EducationItemComponent :items="education.items" />
    </SectionComponent>

    <SectionComponent :title="softSkills.title" :subTitle="softSkills.subTitle">
      <SoftSkilltemComponent :items="softSkills.items" />
    </SectionComponent>

    <SectionComponent :title="hardSkills.title" :subTitle="hardSkills.subTitle">
      <HardSkillItemComponent :items="hardSkills.items" />
    </SectionComponent>

    <!--SectionComponent :title="experience.title">
      <ExperienceItemComponent :actionTitle="experience.actionTitle" :items="experience.items" />
    </!--SectionComponent-->
  </q-card>
</template>
