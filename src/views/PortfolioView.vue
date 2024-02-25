<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheSpots from "@/components/TheSpots.vue";

import PorUl from "@/components/PorUl.vue";
import PorPortfollo from "@/components/PorPortfollo.vue";
import SwiperNav from "@/components/TheSwiperNavCategory.vue";

import { onMounted } from "vue";
import { DataPortfolio } from "@/stores/data-portfolio.js";

import { ref } from "vue";
import { useHead } from "@unhead/vue";

const title = ref("Портфолио");
const descriptionContent = ref({ description: "Моя страница Портфолио" });
useHead({
  title,
  meta: [
    {
      name: "description",
      content: () => descriptionContent.value.description,
    },
  ],
});

const dataPortfolio = DataPortfolio();

onMounted(() => {
  dataPortfolio.getPortfolio();
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
        <h1 class="title_portfolio">Портфолио</h1>
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
