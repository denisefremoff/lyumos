import { defineStore } from "pinia";
import img_1 from "@/assets/img/premium-pipe.webp";
import axios from "axios";
export const DataPortfolio = defineStore("data-portfolio", {
  state: () => ({
    category: [],
    activeCategories: [0],
    dataPortfolio: {
      categoryUl: [],
    },
    tmpArrCategory: [],
    categoryUl: [
      { id: 1, title: "Всё" },
      { id: 2, title: "Заказная разработка", value: "Заказная разработка" },
      { id: 3, title: "Внедрение ИИ", value: "Внедрение ИИ" },
      {
        id: 4,
        title: "Доработка и модернизация IT-продукта",
        value: "Доработка и модернизация IT-продукта",
      },
    ],
    portfolioExample: [],
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "portfolioExample",
        storage: localStorage,
        paths: ["portfolioExample"],
      },
    ],
  },
  getters: {
    getCategory() {
      return this.category
        .map((value) => `"${value}"`)
        .join(", ")
        .slice(1, -1);
    },
    filter() {
      return this.category.length === 0 || this.category[0] === undefined
        ? this.portfolioExample
        : this.portfolioExample.filter((example) => {
            const exampleCategories = example.attributes.categories.split(", ");
            return exampleCategories.some((category) =>
              this.category.includes(category.trim())
            );
          });
    },

    filterCategory() {
      this.getTmpArrCategory();
      return this.categoryUl.filter((example) => {
        return (
          example.title.includes("Всё") ||
          this.tmpArrCategory.some((category) => example.title === category)
        );
      });
    },

    totalPortfolioCount() {
      return this.portfolioExample.length;
    },
    totalDevelopmentCount() {
      const developmentExamples = this.portfolioExample.filter((example) =>
        example.attributes.categories.includes("Заказная разработка")
      );
      return developmentExamples.length;
    },
    totalAiCount() {
      const aiExamples = this.portfolioExample.filter((example) =>
        example.attributes.categories.includes("Внедрение ИИ")
      );
      return aiExamples.length;
    },
    totalModernizationItCount() {
      const modernizationExamples = this.portfolioExample.filter((example) =>
        example.attributes.categories.includes(
          "Доработка и модернизация IT-продукта"
        )
      );
      return modernizationExamples.length;
    },
  },
  actions: {
    getTmpArrCategory() {
      let tmp = [];
      this.portfolioExample.forEach((el) => {
        tmp.push(el.attributes.categories);
      });
      this.tmpArrCategory = tmp
        .join(",")
        .split(",")
        .filter((category) => category.trim() !== " ");
      this.tmp = [];
    },

    toggleActiveCategory(index, category) {
      if (index === 0) {
        this.clearActiveCategories();
      } else if (this.isActive(0)) {
        this.activeCategories.splice(this.activeCategories.indexOf(0), 1);
      }

      const indexInArray = this.activeCategories.indexOf(index);

      if (indexInArray === -1) {
        this.activeCategories.push(index);
        if (index > 0) {
          this.category.push(category);
        }
      } else {
        this.activeCategories.splice(indexInArray, 1);
        this.category.splice(indexInArray, 1);
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
      this.category = [];
    },

    async getPortfolio() {
      try {
        const response = await axios({
          url: "http://localhost:1337/api/portfolios",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.portfolioExample = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
