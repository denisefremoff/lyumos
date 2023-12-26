<script setup>
import { DataPortfolio } from "@/stores/data-portfolio.js";

const dataPortfolio = DataPortfolio();
</script>

<template>
  <div
    class="portfolio_example"
    v-for="portfolioExample in dataPortfolio.filter"
    :key="portfolioExample.id"
  >
    <div class="portfolio_example_header">
      <img :src="portfolioExample.img" alt="Portfolio" />
    </div>
    <div class="portfolio_example_footer">
      <h6>{{ portfolioExample.title }}</h6>
      <ul>
        <li
          v-for="(category, index) in portfolioExample.categories"
          :key="index"
        >
          {{ category }}
        </li>
      </ul>
    </div>
  </div>
</template>
