import { defineStore } from "pinia";

export const DataPortfolio = defineStore("data-portfolio", {
  state: () => ({
    activeCategories: [0],
    dataPortfolio: {
      categoryUl: [],
    },
    categoryUl: [
      { id: 1, title: "Все" },
      { id: 2, title: "Аналитика" },
      { id: 3, title: "Разработка документации" },
      { id: 4, title: "Разработка сайта" },
      { id: 5, title: "Заказная разработка" },
      { id: 6, title: "Разработка продукта" },
      { id: 7, title: "UI/UX" },
    ],

    portfolioExamples: [
      {
        id: 1,
        img: "src/assets/img/portfolio-example-1.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Аналитика", "Разработка сайта"],
      },
      {
        id: 2,
        img: "src/assets/img/portfolio-example-2.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Заказная разработка", "Разработка продукта"],
      },
      {
        id: 3,
        img: "src/assets/img/portfolio-example-2.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["UI/UX"],
      },
      {
        id: 4,
        img: "src/assets/img/portfolio-example-2.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: [
          "Разработка документации",
          "Разработка продукта",
          "Аналитика",
        ],
      },
      {
        id: 5,
        img: "src/assets/img/portfolio-example-3.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Разработка документации", "Аналитика"],
      },
      {
        id: 6,
        img: "src/assets/img/portfolio-example-1.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Разработка продукта", "UI/UX"],
      },
      {
        id: 7,
        img: "src/assets/img/portfolio-example-2.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: [
          "Аналитика",
          "UI/UX",
          "Разработка документации",
          "Разработка продукта",
        ],
      },
      {
        id: 8,
        img: "src/assets/img/portfolio-example-2.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Разработка сайта", "UI/UX"],
      },
      {
        id: 9,
        img: "src/assets/img/portfolio-example-3.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: [
          "Разработка документации",
          "Аналитика",
          "Разработка продукта",
        ],
      },
      {
        id: 10,
        img: "src/assets/img/portfolio-example-2.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Разработка сайта", "Разработка документации", "UI/UX"],
      },
      {
        id: 11,
        img: "src/assets/img/portfolio-example-3.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Разработка сайта", "Разработка продукта"],
      },
      {
        id: 12,
        img: "src/assets/img/portfolio-example-1.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Заказная разработка"],
      },
      {
        id: 13,
        img: "src/assets/img/portfolio-example-3.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Заказная разработка", "Аналитика"],
      },
      {
        id: 14,
        img: "src/assets/img/portfolio-example-2.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Разработка документации"],
      },
      {
        id: 15,
        img: "src/assets/img/portfolio-example-1.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: [
          "UI/UX",
          "Аналитика",
          "Разработка сайта",
          "Заказная разработка",
        ],
      },
      {
        id: 16,
        img: "src/assets/img/portfolio-example-2.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["UI/UX", "Заказная разработка", "Разработка сайта"],
      },
      {
        id: 17,
        img: "src/assets/img/portfolio-example-3.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: [
          "Разработка документации",
          "Разработка продукта",
          "Заказная разработка",
        ],
      },
      {
        id: 18,
        img: "src/assets/img/portfolio-example-1.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Аналитика", "Разработка сайта"],
      },
      {
        id: 19,
        img: "src/assets/img/portfolio-example-2.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Аналитика", "Разработка продукта"],
      },
      {
        id: 20,
        img: "src/assets/img/portfolio-example-2.webp",
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Заказная разработка", "Разработка сайта"],
      },
    ],
  }),

  getters: {
    totalPortfolioCount() {
      return this.portfolioExamples.length;
    },
    totalAnalyticsCount() {
      const analyticsExamples = this.portfolioExamples.filter((example) =>
        example.categories.includes("Аналитика")
      );
      return analyticsExamples.length;
    },
    totalDocumentationCount() {
      const documentationExamples = this.portfolioExamples.filter((example) =>
        example.categories.includes("Разработка документации")
      );
      return documentationExamples.length;
    },
    totalSiteCount() {
      const siteExamples = this.portfolioExamples.filter((example) =>
        example.categories.includes("Разработка сайта")
      );
      return siteExamples.length;
    },
    totalCustomMadeCount() {
      const customMadeExamples = this.portfolioExamples.filter((example) =>
        example.categories.includes("Заказная разработка")
      );
      return customMadeExamples.length;
    },
    totalProductCount() {
      const productExamples = this.portfolioExamples.filter((example) =>
        example.categories.includes("Разработка продукта")
      );
      return productExamples.length;
    },
    totalUiUxCount() {
      const uiUxExamples = this.portfolioExamples.filter((example) =>
        example.categories.includes("UI/UX")
      );
      return uiUxExamples.length;
    },
  },
  actions: {
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
});
