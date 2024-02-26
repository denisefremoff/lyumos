<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheSpotsFore from "@/components/TheSpotsFore.vue";
import PageTitle from "@/components/PageTitle.vue";

import PageSteps from "@/components/PageSteps.vue";
import { DataMod } from "@/stores/data-modification";
import { onMounted } from "vue";

import { DataTitleDesc } from "@/stores/data-titleDesc.js";
import { useHead } from "@unhead/vue";

const titleDesc = DataTitleDesc();
const dataMod = DataMod();

onMounted(() => {
  dataMod.getModData();
  titleDesc.getModTitDesc();
});

// useHead({
//   title: () => titleDesc.modTitleDesc.title,
//   meta: [
//     {
//       name: "description",
//       content: () => titleDesc.modTitleDesc.description,
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
  <main class="modification">
    <PageTitle :pageTitles="dataMod.pageTitle" />
    <TheSpotsFore :pageSlogans="dataMod.spotsFores" />
    <div v-for="modView in dataMod.modViews" :key="modView.id" class="wrapper">
      <div class="content product_dev">
        <h4 class="product_h4">{{ modView.attributes.h4 }}</h4>
        <PageSteps
          :arcHeaders="dataMod.arcHeaders"
          :stepsDev="dataMod.stepsDev"
          :arcFooters="dataMod.arcFooters"
        />
      </div>

      <div class="content">
        <div class="service_description">
          <h2>{{ modView.attributes.h2 }}</h2>
          <p>
            {{ modView.attributes.p }}
          </p>
        </div>
      </div>
    </div>
  </main>

  <TheFooter />
</template>
