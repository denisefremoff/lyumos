<script>
export default {
  props: {
    pageTitles: {
      type: Object,
      required: true,
    },
  },
};
</script>
<!-- <script setup>
defineProps(["pageIcon"]);
</script> -->

<template>
  <div class="wrapper-pl">
    <div class="product_dev header_product_dev">
      <div
        v-for="pageTitle in pageTitles"
        :key="pageTitle.id"
        class="left_product_dev"
      >
        <h1 class="title_product_dev">{{ pageTitle.attributes.pageTitle }}</h1>
        <h4 class="description_product_dev">
          {{ pageTitle.attributes.pageDescription }}
        </h4>
      </div>
      <div class="right_product_dev" v-html="pageIcon"></div>
    </div>
  </div>
</template>
