import { defineStore } from "pinia";
import axios from "axios";
export const DataMod = defineStore("data-mod", {
  state: () => ({
    arcHeaders: [],
    stepsDev: [],
    arcFooters: [],
    pageTitle: [],
    spotsFores: [],
    modViews: [],
  }),
  actions: {
    async getModData() {
      try {
        const respArcHeaders = await axios({
          url: "https://strapi.lymos.ru/api/mod-arc-headers",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.arcHeaders = respArcHeaders.data.data;
        const respStepsDev = await axios({
          url: "https://strapi.lymos.ru/api/mod-steps-devs",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.stepsDev = respStepsDev.data.data;
        const respArcFooters = await axios({
          url: "https://strapi.lymos.ru/api/mod-arc-footers",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.arcFooters = respArcFooters.data.data;
        const respPageTitle = await axios({
          url: "https://strapi.lymos.ru/api/mod-page-titles",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.pageTitle = respPageTitle.data.data;
        const respSpotsFores = await axios({
          url: "https://strapi.lymos.ru/api/mod-spots-fores",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.spotsFores = respSpotsFores.data.data;
        const respModViews = await axios({
          url: "https://strapi.lymos.ru/api/mod-views",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.modViews = respModViews.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
