<script setup>
import { RouterLink } from "vue-router";
import IconCard from "@/components/icons/IconCard.vue";
import { DataServices } from "@/stores/data-services.js";
import { onMounted } from "vue";

const dataServices = DataServices();
onMounted(() => {
  dataServices.getServices();
});
</script>

<template>
  <section
    class="applications"
    v-for="applicationSer in dataServices.applicationSers"
    :key="applicationSer.id"
  >
    <div class="left_applications">
      <h2>{{ applicationSer.attributes.heading }}</h2>
      <p>{{ applicationSer.attributes.subtitle }}</p>
      <div
        v-if="applicationSer.attributes.sectionicon"
        class="icon_left_applications"
        v-html="applicationSer.attributes.sectionicon"
      ></div>
    </div>
    <div
      class="right_applications"
      :class="applicationSer.attributes.gridclass"
    >
      <RouterLink
        :to="`/services/${type.attributes.url}`"
        class="border_right_applications"
        :class="applicationSer.attributes.colorclass"
        v-for="(type, index) in applicationSer.attributes.service_types.data"
        :key="index"
      >
        <div class="box_right_applications">
          <div class="header_right_applications">
            <h6>{{ type.attributes.title }}</h6>
            <div class="svg_box">
              <IconCard />
            </div>
          </div>
          <div class="footer_right_applications">
            <p>{{ type.attributes.descriprion }}</p>
            <span>от {{ type.attributes.price }} ₽</span>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
