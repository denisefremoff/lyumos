<script setup>
import { DataPortfolio } from "@/stores/data-portfolio.js";
import IconCard from "@/components/icons/IconCard.vue";
import { RouterLink } from "vue-router";

const dataPortfolio = DataPortfolio();
</script>

<template>
  <RouterLink :to="`/portfolio/${portfolioExample.url}`" class="portfolio_example" v-for="portfolioExample in dataPortfolio.filter" :key="portfolioExample.id">
    <div class="portfolio_example_header">
      <img :src="portfolioExample.img" alt="Portfolio" />
      <div class="link_prod">
        <IconCard />
      </div>
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
  </RouterLink>
</template>
