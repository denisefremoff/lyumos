<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheSpotsFore from "@/components/TheSpotsFore.vue";
import PageTitle from "@/components/PageTitle.vue";
import PageSteps from "@/components/PageSteps.vue";
import { DataIi } from "@/stores/data-li";
import { onMounted } from "vue";

import { ref } from "vue";
import { useHead } from "@unhead/vue";

const title = ref("Ии");
const descriptionContent = ref({ description: "Моя страница Ии" });
useHead({
  title,
  meta: [
    {
      name: "description",
      content: () => descriptionContent.value.description,
    },
  ],
});
const dataIi = DataIi();
onMounted(() => {
  dataIi.getIiData();
});
</script>
<template>
  <main class="ii">
    <PageTitle :pageTitles="dataIi.pageTitle" />

    <TheSpotsFore :pageSlogans="dataIi.spotsFores" />

    <div v-for="iiView in dataIi.iiViews" :key="iiView.id" class="wrapper">
      <div class="content product_dev">
        <h4 class="product_h4">{{ iiView.attributes.h4 }}</h4>
        <PageSteps
          :arcHeaders="dataIi.arcHeaders"
          :stepsDev="dataIi.stepsDev"
          :arcFooters="dataIi.arcFooters"
        />
      </div>

      <div class="content">
        <div class="service_description">
          <h2>{{ iiView.attributes.h2 }}</h2>
          <p>
            {{ iiView.attributes.p }}
          </p>
        </div>
      </div>
    </div>
  </main>

  <TheFooter />
</template>
