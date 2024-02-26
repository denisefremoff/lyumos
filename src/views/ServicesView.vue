<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheSpots from "@/components/TheSpots.vue";
import SerApplications from "@/components/SerApplications.vue";

import { useHead } from "@unhead/vue";
import { onMounted } from "vue";
import { DataServices } from "@/stores/data-services.js";

import { DataTitleDesc } from "@/stores/data-titleDesc.js";

const dataServices = DataServices();
const titleDesc = DataTitleDesc();

onMounted(() => {
  dataServices.getServices();
  titleDesc.getServTitleDesc();
});

// useHead({
//   title: () => titleDesc.mvpTitleDesc.title,
//   meta: [
//     {
//       name: "description",
//       content: () => titleDesc.mvpTitleDesc.description,
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
