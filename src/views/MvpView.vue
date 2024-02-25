<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheSpotsFore from "@/components/TheSpotsFore.vue";
import PageTitle from "@/components/PageTitle.vue";
import PageSteps from "@/components/PageSteps.vue";
import { DataMvp } from "@/stores/data-mvp";
import { onMounted } from "vue";

import { ref } from "vue";
import { useHead } from "@unhead/vue";

const title = ref("МВП");
const descriptionContent = ref({ description: "Моя страница МВП" });
useHead({
  title,
  meta: [
    {
      name: "description",
      content: () => descriptionContent.value.description,
    },
  ],
});

const dataMvp = DataMvp();
onMounted(() => {
  dataMvp.getMvpData();
});
</script>
<template>
  <main class="mvp">
    <PageTitle :pageTitles="dataMvp.pageTitle" />
    <TheSpotsFore :pageSlogans="dataMvp.respSpotsFores" />
    <div class="wrapper">
      <div
        v-for="mvpView in dataMvp.mvpViews"
        :key="mvpView.id"
        class="content product_dev"
      >
        <h4 class="product_h4">{{ mvpView.attributes.h4 }}</h4>
        <PageSteps
          :arcHeaders="dataMvp.arcHeaders"
          :stepsDev="dataMvp.stepsDev"
          :arcFooters="dataMvp.arcFooters"
        />
        <p class="p_description">{{ mvpView.attributes.pDescription }}</p>
      </div>

      <div class="content">
        <div
          v-for="mvpView in dataMvp.mvpViews"
          :key="mvpView.id"
          class="service_description"
        >
          <h2>{{ mvpView.attributes.h2 }}</h2>
          <p>{{ mvpView.attributes.p }}</p>
        </div>
      </div>
    </div>
  </main>
  <TheFooter />
</template>
