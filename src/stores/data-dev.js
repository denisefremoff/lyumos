import { defineStore } from "pinia";
import axios from "axios";
export const DataDev = defineStore("data-dev", {
  state: () => ({
    arcHeaders: [],
    stepsDev: [],
    arcFooters: [],
  }),
  actions: {
    async getDevData() {
      try {
        const respArcHeaders = await axios({
          url: "https://strapi.lymos.ru/api/dev-arc-headers",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.arcHeaders = respArcHeaders.data.data;
        const respStepsDev = await axios({
          url: "https://strapi.lymos.ru/api/dev-steps-devs",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.stepsDev = respStepsDev.data.data;
        const respArcFooters = await axios({
          url: "https://strapi.lymos.ru/api/dev-arc-footers",
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
