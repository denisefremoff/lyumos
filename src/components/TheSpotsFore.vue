<script>
export default {
  props: {
    pageSlogans: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <section class="product_dev product_dev_slogan">
    <h2 v-for="pageSlogan in pageSlogans" :key="pageSlogan.id">
      {{ pageSlogan.attributes.pageSlogan }}
    </h2>
    <div class="dev_ring_1"></div>
    <div class="dev_ring_2"></div>
    <div class="dev_ring_3"></div>
    <div class="dev_ring_4"></div>
  </section>
</template>
