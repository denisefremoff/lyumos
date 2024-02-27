<script setup>
import { RouterLink } from "vue-router";
import IconCard from "@/components/icons/IconCard.vue";
import { DataServices } from "@/stores/data-services.js";

const dataServices = DataServices();
</script>

<template>
  <section
    class="applications"
    v-for="applicationServ in dataServices.getApplicationServs"
    :key="applicationServ.id"
  >
    <div class="left_applications">
      <h2>{{ applicationServ.attributes.heading }}</h2>
      <p>{{ applicationServ.attributes.subtitle }}</p>
      <div
        v-if="applicationServ.attributes.sectionicon"
        class="icon_left_applications"
        v-html="applicationServ.attributes.sectionicon"
      ></div>
    </div>
    <div
      class="right_applications"
      :class="applicationServ.attributes.gridclass"
    >
      <RouterLink
        :to="`/services/${type.attributes.url}`"
        class="border_right_applications"
        :class="applicationServ.attributes.colorclass"
        v-for="(type, index) in applicationServ.attributes.service_types.data"
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
