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

<template>
  <div class="wrapper-pl">
    <div
      v-for="pageTitle in pageTitles"
      :key="pageTitle.id"
      class="product_dev header_product_dev"
    >
      <div class="left_product_dev">
        <h1 class="title_product_dev">{{ pageTitle.attributes.pageTitle }}</h1>
        <h4 class="description_product_dev">
          {{ pageTitle.attributes.pageDescription }}
        </h4>
      </div>
      <div
        class="right_product_dev"
        :v-html="pageTitle.attributes.pageIcon"
      ></div>
    </div>
  </div>
</template>
