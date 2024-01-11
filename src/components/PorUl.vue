<script setup>
import { DataPortfolio } from "@/stores/data-portfolio.js";
const dataPortfolio = DataPortfolio();
</script>

<template>
  <li v-for="(categoryLi, index) in dataPortfolio.categoryUl" :key="categoryLi.id"
    :class="{ active_nav_category: dataPortfolio.isActive(index) }"
    @click="dataPortfolio.toggleActiveCategory(index, categoryLi.value)">
    {{ categoryLi.title }}
    <p>
      <span>
        {{
          {
            1: dataPortfolio.totalPortfolioCount,
            2: dataPortfolio.totalDevelopmentCount,
            3: dataPortfolio.totalAiCount,
            4: dataPortfolio.totalModernizationItCount
          }[categoryLi.id] || null
        }}
      </span>
    </p>
  </li>
</template>
