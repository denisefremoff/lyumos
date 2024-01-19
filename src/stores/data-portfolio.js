import { defineStore } from "pinia";
import img_1 from "@/assets/img/premium-pipe.webp";

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

    portfolioExamples: [
      {
        id: 1,
        url: "premium-pipe",
        img: img_1,
        title: "Разработка корпоративного сайта “Охрана труда”",
        categories: ["Заказная разработка"],
      },
      // {
      //   id: 2,
      //   img: 2,
      //   title: "Разработка корпоративного сайта “Охрана труда”",
      //   categories: ["Заказная разработка", "Внедрение ИИ"],
      // },
      // {
      //   id: 3,
      //   img: 2,
      //   title: "Разработка корпоративного сайта “Охрана труда”",
      //   categories: ["Внедрение ИИ"],
      // },
      // {
      //   id: 4,
      //   img: 3,
      //   title: "Разработка корпоративного сайта “Охрана труда”",
      //   categories: ["Заказная разработка"],
      // },
      // {
      //   id: 5,
      //   img: img_3,
      //   title: "Разработка корпоративного сайта “Охрана труда”",
      //   categories: ["Доработка и модернизация IT-продукта"],
      // },
      // {
      //   id: 6,
      //   img: img_1,
      //   title: "Разработка корпоративного сайта “Охрана труда”",
      //   categories: ["Доработка и модернизация IT-продукта", "Внедрение ИИ"],
      // },
      // {
      //   id: 7,
      //   img: img_2,
      //   title: "Разработка корпоративного сайта “Охрана труда”",
      //   categories: ["Заказная разработка", "Внедрение ИИ"],
      // },
      // {
      //   id: 8,
      //   img: img_2,
      //   title: "Разработка корпоративного сайта “Охрана труда”",
      //   categories: ["Внедрение ИИ", "Доработка и модернизация IT-продукта"],
      // },
      // {
      //   id: 9,
      //   img: 2,
      //   title: "Разработка корпоративного сайта “Охрана труда”",
      //   categories: [
      //     "Доработка и модернизация IT-продукта",
      //     "Заказная разработка",
      //   ],
      // },
      // {
      //   id: 10,
      //   img: 1,
      //   title: "Разработка корпоративного сайта “Охрана труда”",
      //   categories: ["Заказная разработка"],
      //},
    ],
  }),

  getters: {
    getCategory() {
      return this.category
        .map((value) => `"${value}"`)
        .join(", ")
        .slice(1, -1);
    },
    filter() {
      return this.category.length === 0 || this.category[0] === undefined
        ? this.portfolioExamples
        : this.portfolioExamples.filter((example) => {
            return example.categories.some((element) =>
              this.getCategory.includes(element)
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
      return this.portfolioExamples.length;
    },
    totalDevelopmentCount() {
      const developmentExamples = this.portfolioExamples.filter((example) =>
        example.categories.includes("Заказная разработка")
      );
      return developmentExamples.length;
    },
    totalAiCount() {
      const aiExamples = this.portfolioExamples.filter((example) =>
        example.categories.includes("Внедрение ИИ")
      );
      return aiExamples.length;
    },
    totalModernizationItCount() {
      const modernizationExamples = this.portfolioExamples.filter((example) =>
        example.categories.includes("Доработка и модернизация IT-продукта")
      );
      return modernizationExamples.length;
    },
  },
  actions: {
    getTmpArrCategory() {
      const categoriesSet = new Set();
      this.portfolioExamples.forEach((el) => {
        el.categories.forEach((category) => {
          categoriesSet.add(category);
        });
      });
      this.tmpArrCategory = Array.from(categoriesSet);
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
  },
});
