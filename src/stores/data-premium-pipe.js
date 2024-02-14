import { defineStore } from "pinia";
import axios from "axios";
export const DataPremiumPipe = defineStore("data-premium-pipe", {
  state: () => ({
    concepts: [],
    aboutProjects: [],
  }),
  actions: {
    async getPermPipeAbout() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/premium-pipe-abouts",
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
          url: "https://strapi.lymos.ru/api/premium-pipe-concepts",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.concepts = response.data.data;
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
