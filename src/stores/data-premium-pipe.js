import { defineStore } from "pinia";
import axios from "axios";
import img_1 from "@/assets/img/foto-concept.webp";
import img_2 from "@/assets/img/interactive-prototype.webp";
import img_3 from "@/assets/img/intuitive-interface.webp";

export const DataPremiumPipe = defineStore("data-premium-pipe", {
  state: () => ({
    // aboutProjects: [
    //   {
    //     id: 1,
    //     h2: "О проекте",
    //     p: "Premium Pipe – компания, по производству металлических изделий различной сложности для нефтяной, газовой и промышленной отраслей.",
    //   },
    //   {
    //     id: 2,
    //     h2: "Задача",
    //     p: "Для увеличения производительности и структуризации их деятельности мы разрабатываем для них систему автоматизации бизнес-процессов.",
    //   },
    // ],

    // concepts: [
    //   {
    //     id: 1,
    //     h2: "Концепция",
    //     p: "Мы создали систему, которая позволяет с самого начала подготовки заказа отслеживать процессы над каждой заготовкой или материалом, который используется в работе. Так как в документации используются данные которые и так хранятся в системе, мы их используем для подготовки и генерации документации.",
    //     img: img_1,
    //   },
    //   {
    //     id: 2,
    //     h2: "Интерактивный прототип",
    //     p: "Помог нам показать клиенту возможности системы и провести тесты на стадии UI дизайна.",
    //     img: img_2,
    //   },
    //   {
    //     id: 3,
    //     h2: "Понятный интерфейс",
    //     p: "Одной из главных задач было обеспечить удобство использования. Мы разработали интуитивно понятный интерфейс, который позволяет пользователям легко найти необходимую информацию.",
    //     img: img_3,
    //   },
    // ],
    concepts: [],
    aboutProjects: [],
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "concepts",
        storage: localStorage,
        paths: ["concepts"],
      },
      {
        key: "aboutProjects",
        storage: localStorage,
        paths: ["aboutProjects"],
      },
    ],
  },
  actions: {
    async getPermPipeAbout() {
      try {
        const response = await axios({
          url: "http://localhost:1337/api/premium-pipe-abouts",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.aboutProjects = response.data.data;
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    async getPermPipeConcepts() {
      try {
        const response = await axios({
          url: "http://localhost:1337/api/premium-pipe-concepts",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.concepts = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
