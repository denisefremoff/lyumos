<template>
  <swiper
    :slidesPerGroup="3"
    :slides-per-view="3"
    :space-between="12"
    @swiper="onSwiper"
  >
    <swiper-slide
      v-for="(categoryLi, index) in dataPortfolio.categoryUl"
      :key="categoryLi.id"
    >
      <li
        :class="{ active_nav_category: isActive(index) }"
        @click="toggleActiveCategory(index)"
      >
        {{ categoryLi.title }}
        <p>
          <span>
            {{
              {
                1: dataPortfolio.totalPortfolioCount,
                2: dataPortfolio.totalAnalyticsCount,
                3: dataPortfolio.totalDocumentationCount,
                4: dataPortfolio.totalSiteCount,
                5: dataPortfolio.totalCustomMadeCount,
                6: dataPortfolio.totalProductCount,
                7: dataPortfolio.totalUiUxCount,
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

const onSwiper = (swiper) => {
  console.log(swiper);
};
</script>
<script>
export default {
  data() {
    return {
      activeCategories: [],
      dataPortfolio: {
        categoryUl: [],
      },
    };
  },
  created() {
    this.activeCategories.push(0);
  },
  methods: {
    toggleActiveCategory(index) {
      if (index === 0) {
        this.clearActiveCategories();
      } else if (this.isActive(0)) {
        this.activeCategories.splice(this.activeCategories.indexOf(0), 1);
      }

      const indexInArray = this.activeCategories.indexOf(index);

      if (indexInArray === -1) {
        this.activeCategories.push(index);
      } else {
        this.activeCategories.splice(indexInArray, 1);
      }

      if (this.activeCategories.length === 0) {
        this.activeCategories.push(0);
      }
    },
    isActive(index) {
      return this.activeCategories.includes(index);
    },
    clearActiveCategories() {
      this.activeCategories = [];
    },
  },
};
</script>
<style scoped>
.swiper {
  margin-left: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.8333333vw;

  padding-top: 4.1666667vw;
  width: 48.3333333vw;
}
.swiper-slide {
  font-size: 1.4583333vw;
  font-weight: 400;
  line-height: 140%;
  padding: 0.625vw;
  border: 2px solid transparent;
  position: relative;
  z-index: 3;
  column-gap: 0.8333333vw;
}
.swiper-slide span {
  font-size: 1.0416667vw;
  font-weight: 500;
  line-height: 140%;
  position: relative;
  top: 1px;
}
.swiper-slide p {
  border-radius: 100px;
  background: #dbdbdb;
  width: 1.7708333vw;
  height: 1.7708333vw;
  position: relative;
  z-index: 3;
}
.swiper-slide:nth-child(2)::before {
  content: "";
  background: linear-gradient(134deg, #f5d6fc -58.55%, #fcf2d3 158.08%);
  border-radius: 6px;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 2px;
  top: -2px;
  right: 0;
  bottom: 0;
  left: -2px;
  z-index: -1;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
  opacity: 0;
}

/* .swiper-slide-active {
  border-radius: 8px;
  border: 2px solid #3c3c3c;
} */
@media (max-width: 530px) {
  .swiper {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    width: 2000px;
  }
}
</style>
