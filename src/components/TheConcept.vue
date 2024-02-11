<script setup>
import { onMounted } from "vue";
import { DataPremiumPipe } from "@/stores/data-premium-pipe.js";
const dataConcept = DataPremiumPipe();
onMounted(() => {
  dataConcept.concepts == 0 ? dataConcept.getPermPipeConcepts() : "";
});
</script>

<template>
  <template v-for="concept in dataConcept.concepts" :key="concept.id">
    <section class="concept">
      <h2>{{ concept.attributes.h2 }}</h2>
      <p>{{ concept.attributes.p }}</p>
      <img :src="concept.attributes.img" alt="foto-concept" />
    </section>
  </template>
</template>
