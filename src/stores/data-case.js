import { defineStore } from "pinia";
import axios from "axios";
export const DataCase = defineStore("data-case", {
  state: () => ({
    devCases: [],
  }),
  actions: {
    async getDevCase() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/dev-cases",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        this.devCases = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
