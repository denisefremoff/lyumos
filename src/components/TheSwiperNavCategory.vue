<template>
  <swiper :slidesPerView="'auto'" :space-between="12">
    <swiper-slide
      v-for="(categoryLi, index) in dataPortfolio.filterCategory"
      :key="categoryLi.id"
    >
      <li
        :class="{ active_nav_category: dataPortfolio.isActive(index) }"
        @click="dataPortfolio.toggleActiveCategory(index, categoryLi.value)"
      >
        {{ categoryLi.title }}
        <p>
          <span>
            {{
              {
                1: dataPortfolio.totalPortfolioCount,
                2: dataPortfolio.totalDevelopmentCount,
                3: dataPortfolio.totalAiCount,
                4: dataPortfolio.totalModernizationItCount,
              }[categoryLi.id] || null
            }}
          </span>
        </p>
      </li>
    </swiper-slide>
  </swiper>
</template>

<script setup>
// swiper
import { Swiper, SwiperSlide } from "swiper/vue";

import { DataPortfolio } from "@/stores/data-portfolio.js";
const dataPortfolio = DataPortfolio();
</script>
<style scoped>
.swiper-slide {
  width: auto !important;
}

.swiper-slide:last-child {
  margin-right: 0 !important;
}

.swiper {
  width: 100%;
  z-index: 5;
}

.swiper-wrapper {
  column-gap: 12px !important;
}
</style>
