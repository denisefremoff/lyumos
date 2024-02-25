<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheSpots from "@/components/TheSpots.vue";
import SerApplications from "@/components/SerApplications.vue";
import { ref } from "vue";
import { useHead } from "@unhead/vue";
import { onMounted } from "vue";
import { DataServices } from "@/stores/data-services.js";
const dataServices = DataServices();
onMounted(() => {
  dataServices.getServices();
});
const title = ref("Сервис");
const descriptionContent = ref({ description: "Моя страница сервиса" });
useHead({
  title,
  meta: [
    {
      name: "description",
      content: () => descriptionContent.value.description,
    },
  ],
});
</script>
<template>
  <main>
    <TheSpots />
    <div class="wrapper">
      <div
        v-for="servicesView in dataServices.servicesViews"
        :key="servicesView.id"
        class="content amenities"
      >
        <h1 class="title_amenities">{{ servicesView.attributes.h1 }}</h1>
        <h4 class="description_amenities">
          {{ servicesView.attributes.h4 }}
        </h4>
        <SerApplications />
      </div>
    </div>
  </main>
  <TheFooter />
</template>
