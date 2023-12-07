<script setup>
import { DataPortfolio } from '@/stores/data-portfolio.js';

const dataPortfolio = DataPortfolio();
</script>

<script>
export default {
    data() {
        return {
            activeCategories: [],
            dataPortfolio: {
                categoryUl: []
            }
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
        }
    }
};
</script>

<template>
    <li v-for="(categoryLi, index) in dataPortfolio.categoryUl" :key="categoryLi.id"
        :class="{ 'active_nav_category': isActive(index) }" @click="toggleActiveCategory(index)">
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
                        7: dataPortfolio.totalUiUxCount
                    }[categoryLi.id] || null
                }}
            </span>
        </p>
    </li>
</template>


  
 
  