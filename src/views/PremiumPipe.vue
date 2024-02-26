<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheAboutProject from "@/components/TheAboutProject.vue";
import TheConceptVue from "@/components/TheConcept.vue";

import { useHead } from "@unhead/vue";
import { onMounted } from "vue";
import { DataPremiumPipe } from "@/stores/data-premium-pipe.js";

import { DataTitleDesc } from "@/stores/data-titleDesc.js";

const titleDesc = DataTitleDesc();
const dataPremiumPipe = DataPremiumPipe();

onMounted(() => {
  dataPremiumPipe.getPermiumPipe();
  titleDesc.getPremPipeTitDecs();
});

// useHead({
//   title: () => titleDesc.premPipeTitleDesc.title,
//   meta: [
//     {
//       name: "description",
//       content: () => titleDesc.premPipeTitleDesc.description,
//     },
//   ],
// });
useHead({
  title: () => titleDesc.titleDesc.title,
  meta: [
    {
      name: "description",
      content: () => titleDesc.titleDesc.description,
    },
  ],
});
</script>
<template>
  <main>
    <div class="swap_icons">
      <img
        v-for="swapIcon in dataPremiumPipe.getSwapIcons"
        :key="swapIcon.id"
        :src="swapIcon.attributes.swapIcon"
        :alt="swapIcon.attributes.swapAlt"
      />
    </div>

    <div class="wrapper">
      <div
        v-for="contentPremiumPipe in dataPremiumPipe.getContentPremiumPipe"
        :key="contentPremiumPipe.id"
        class="content premium_pipe"
      >
        <h1>{{ contentPremiumPipe.attributes.h1 }}</h1>
        <ul>
          <li
            v-for="contentPremiumPipeUl in dataPremiumPipe.getContentPremiumPipeUl"
            :key="contentPremiumPipeUl.id"
          >
            {{ contentPremiumPipeUl.attributes.li }}
          </li>
        </ul>

        <TheAboutProject />

        <TheConceptVue />

        <section class="we_used">
          <h2>{{ dataPremiumPipe.getWeUse }}</h2>
          <div class="technology_logos">
            <img
              v-for="technologyLogo in dataPremiumPipe.getTechLogo"
              :key="technologyLogo.id"
              :src="technologyLogo.attributes.techLogo"
              :alt="technologyLogo.attributes.techAlt"
            />
          </div>
        </section>
      </div>
    </div>

    <section
      v-for="designSystem in dataPremiumPipe.getDesineSystem"
      :key="designSystem.id"
      class="design_system"
    >
      <h2>{{ designSystem.attributes.h2 }}</h2>
      <p>
        {{ designSystem.attributes.p }}
      </p>

      <img
        :src="designSystem.attributes.fotoConcept2Img"
        :alt="designSystem.attributes.fotoConcept2Alt"
      />
    </section>
  </main>
  <TheFooter />
</template>
