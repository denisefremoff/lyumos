<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheSpotsFore from "@/components/TheSpotsFore.vue";
import PageTitle from "@/components/PageTitle.vue";

import PageSteps from "@/components/PageSteps.vue";
import TheExpertise from "@/components/TheExpertise.vue";
import DevCase from "@/components/DevCase.vue";

import { DataDev } from "@/stores/data-dev";
import { onMounted } from "vue";
import { useHead } from "@unhead/vue";

import { DataTitleDesc } from "@/stores/data-titleDesc.js";

const titleDesc = DataTitleDesc();
const dataDev = DataDev();

onMounted(() => {
  dataDev.getDevData();
  titleDesc.getDevTitDesc();
});

// useHead({
//   title: () => titleDesc.devTitleDesc.title,
//   meta: [
//     {
//       name: "description",
//       content: () => titleDesc.devTitleDesc.description,
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
  <main class="development">
    <PageTitle :pageTitles="dataDev.pageTitle" />

    <TheSpotsFore :pageSlogans="dataDev.spotsFores" />

    <div class="wrapper">
      <div
        v-for="devView in dataDev.devViews"
        :key="devView.id"
        class="content product_dev"
      >
        <h4 class="product_h4">{{ devView.attributes.h4 }}</h4>
        <PageSteps
          :arcHeaders="dataDev.arcHeaders"
          :stepsDev="dataDev.stepsDev"
          :arcFooters="dataDev.arcFooters"
        />

        <div class="experience">
          <!-- <h5>Иновационные решения</h5>
          <p>
            Решения на основе инновационных технологий и ИИ, индивидуально
            адаптированные под Вас для увеличения эффективности бизнеса и
            прибыли компании
          </p>-->
          <h3>{{ devView.attributes.h3 }}</h3>
          <TheExpertise />
        </div>

        <section class="word_case">
          <h2>{{ devView.attributes.wordCaseh2 }}</h2>
          <h3>{{ devView.attributes.wordCaseh3 }}</h3>
          <div class="cases">
            <DevCase />
          </div>
        </section>
      </div>
    </div>
  </main>

  <TheFooter />
</template>
