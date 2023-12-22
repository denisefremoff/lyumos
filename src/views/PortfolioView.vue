<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheSpots from "@/components/TheSpots.vue";

import PorUl from "@/components/PorUl.vue";
import PorPortfollo from "@/components/PorPortfollo.vue";
import SwiperNav from "@/components/TheSwiperNavCategory.vue";
</script>
<script>
export default {
  data() {
    return {
      width: 0,
    };
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
};
</script>
<template>
  <TheHeader />
  <main>
    <TheSpots />
    <div class="wrapper">
      <div class="content portfolio">
        <h1 class="title_portfolio">Портфолио</h1>
        <div class="nav_category">
          <ul>
            <SwiperNav v-if="this.width < 529" />
            <PorUl v-else />
          </ul>
        </div>
        <div class="portfolio_box">
          <PorPortfollo />
        </div>
      </div>
    </div>
  </main>
  <TheFooter />
</template>
<style scoped>
@media (max-width: 530px) {
  .nav_category ul {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    width: 530px;
  }
}
</style>
