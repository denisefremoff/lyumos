import { defineStore } from "pinia";
import axios from "axios";
export const DataIi = defineStore("data-li", {
  state: () => ({
    arcHeaders: [],
    stepsDev: [],
    arcFooters: [],
  }),
  actions: {
    async getIiData() {
      try {
        const respArcHeaders = await axios({
          url: "https://strapi.lymos.ru/api/ii-arc-headers",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.arcHeaders = respArcHeaders.data.data;
        const respStepsDev = await axios({
          url: "https://strapi.lymos.ru/api/ii-steps-devs",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.stepsDev = respStepsDev.data.data;
        const respArcFooters = await axios({
          url: "https://strapi.lymos.ru/api/ii-arc-footers",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.arcFooters = respArcFooters.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
