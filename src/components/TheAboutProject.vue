<script setup>
import { onMounted } from "vue";
import { DataPremiumPipe } from "@/stores/data-premium-pipe.js";
const detaAboutProject = DataPremiumPipe();
onMounted(() => {
  detaAboutProject.getPermPipeAbout();
});
</script>

<template>
  <template
    v-for="aboutProject in detaAboutProject.aboutProjects"
    :key="aboutProject.attributes.id"
  >
    <div class="about_project">
      <h2>{{ aboutProject.attributes.h2 }}</h2>
      <p>{{ aboutProject.attributes.p }}</p>
    </div>
  </template>
</template>
