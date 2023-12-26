<template>
  <swiper :slides-per-view="2.5" :space-between="12">
    <swiper-slide
      v-for="(categoryLi, index) in dataPortfolio.categoryUl"
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
</script>
<script>
export default {
  // data() {
  //   return {
  //     activeCategories: [],
  //     dataPortfolio: {
  //       categoryUl: [],
  //     },
  //   };
  // },
  // created() {
  //   this.activeCategories.push(0);
  // },
  // methods: {
  //   toggleActiveCategory(index) {
  //     if (index === 0) {
  //       this.clearActiveCategories();
  //     } else if (this.isActive(0)) {
  //       this.activeCategories.splice(this.activeCategories.indexOf(0), 1);
  //     }
  //     const indexInArray = this.activeCategories.indexOf(index);
  //     if (indexInArray === -1) {
  //       this.activeCategories.push(index);
  //     } else {
  //       this.activeCategories.splice(indexInArray, 1);
  //     }
  //     if (this.activeCategories.length === 0) {
  //       this.activeCategories.push(0);
  //     }
  //   },
  //   isActive(index) {
  //     return this.activeCategories.includes(index);
  //   },
  //   clearActiveCategories() {
  //     this.activeCategories = [];
  //   },
  // },
};
</script>
<style scoped>
.swiper-slide {
  width: auto !important;
}
.swiper {
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  width: 530px;
}
.swiper-slide:nth-child(2) li::before {
  content: "";
  background: linear-gradient(134deg, #f5d6fc -58.55%, #fcf2d3 158.08%);
  border-radius: 3px;
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

.swiper-slide:nth-child(2) li:hover::before {
  opacity: 1;
}
.swiper-slide:nth-child(2) p::before {
  content: "";
  border-radius: 100px;
  background: linear-gradient(134deg, #ea8bfd -58.55%, #fddf83 158.08%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
  opacity: 0;
}

.swiper-slide:nth-child(2):hover p::before {
  opacity: 1;
}

.swiper-slide:nth-child(3) li::before {
  content: "";
  background: #fcf2d3;
  border-radius: 3px;
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
.swiper-slide:nth-child(3) li:hover::before {
  opacity: 1;
}

.swiper-slide:nth-child(3) p::before {
  content: "";
  border-radius: 100px;
  background: #fddf83;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
  opacity: 0;
}

.swiper-slide:nth-child(3):hover p::before {
  opacity: 1;
}

.swiper-slide:nth-child(4) li::before {
  content: "";
  background: linear-gradient(
    137deg,
    #d3e1fc -63.86%,
    #f5d6fc 49.56%,
    #fcd6d8 162.99%
  );
  border-radius: 3px;
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
.swiper-slide:nth-child(4) li:hover::before {
  opacity: 1;
}

.swiper-slide:nth-child(4) p::before {
  content: "";
  border-radius: 100px;
  background: linear-gradient(
    137deg,
    #83acfd -63.86%,
    #ea8bfd 49.56%,
    #fd8b93 162.99%
  );
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
  opacity: 0;
}
.swiper-slide:nth-child(4):hover p::before {
  opacity: 1;
}
.swiper-slide:nth-child(5) li::before {
  content: "";
  background: linear-gradient(134deg, #f5d6fc -62.41%, #fcd6d8 161.2%);
  border-radius: 3px;
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
.swiper-slide:nth-child(5) li:hover::before {
  opacity: 1;
}
.swiper-slide:nth-child(5) p::before {
  content: "";
  border-radius: 100px;
  background: linear-gradient(134deg, #ea8bfd -62.41%, #fd8b93 161.2%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
  opacity: 0;
}
.swiper-slide:nth-child(5):hover p::before {
  opacity: 1;
}
/* Разработка продукта */
.swiper-slide:nth-child(6) li::before {
  content: "";
  background: #dbdbdb;
  border-radius: 3px;
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
.swiper-slide:nth-child(6) li:hover::before {
  opacity: 1;
}
.swiper-slide:nth-child(6) p::before {
  content: "";
  border-radius: 100px;
  background: #f5f5f5;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
  opacity: 0;
}
.swiper-slide:nth-child(6):hover p::before {
  opacity: 1;
}
/* UI/UX */
.swiper-slide:nth-child(7) li::before {
  content: "";
  background: linear-gradient(135deg, #f5d6fc -18.38%, #d3e1fc 113.23%);
  border-radius: 3px;
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
.swiper-slide:nth-child(7) li:hover::before {
  opacity: 1;
}
.swiper-slide:nth-child(7) p::before {
  content: "";
  border-radius: 100px;
  background: linear-gradient(135deg, #ea8bfd -18.38%, #83acfd 113.23%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
  opacity: 0;
}
.swiper-slide:nth-child(7):hover p::before {
  opacity: 1;
}
</style>
