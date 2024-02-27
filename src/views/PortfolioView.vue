<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheSpots from "@/components/TheSpots.vue";

import PorUl from "@/components/PorUl.vue";
import PorPortfollo from "@/components/PorPortfollo.vue";
import SwiperNav from "@/components/TheSwiperNavCategory.vue";

import { onMounted } from "vue";
import { DataPortfolio } from "@/stores/data-portfolio.js";
import { DataTitleDesc } from "@/stores/data-titleDesc.js";

import { useHead } from "@unhead/vue";

const titleDesc = DataTitleDesc();
const dataPortfolio = DataPortfolio();

onMounted(() => {
  dataPortfolio.getPortfolio();
  titleDesc.getPortfolioTitDecs();
});

// useHead({
//   title: () => titleDesc.portfolioTitleDesc.title,
//   meta: [
//     {
//       name: "description",
//       content: () => titleDesc.portfolioTitleDesc.description,
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

<script>
export default {
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      this.isMobile = window.innerWidth <= 530;
    },
  },
};
</script>

<template>
  <main>
    <TheSpots />
    <div class="wrapper">
      <div class="content portfolio">
        <h1 class="title_portfolio">{{ dataPortfolio.getPageTitle }}</h1>
        <div class="nav_category">
          <ul>
            <SwiperNav v-if="isMobile" />
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
