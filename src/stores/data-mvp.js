import { defineStore } from "pinia";
import axios from "axios";
export const DataMvp = defineStore("data-mvp", {
  state: () => ({
    arcHeaders: [],
    stepsDev: [],
    arcFooters: [],
    pageTitle: [],
    spotsFores: [],
    mvpViews: [],
  }),
  actions: {
    async getMvpData() {
      try {
        const respArcHeaders = await axios({
          url: "https://strapi.lymos.ru/api/mvp-arc-headers",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.arcHeaders = respArcHeaders.data.data;
        const respStepsDev = await axios({
          url: "https://strapi.lymos.ru/api/mvp-steps-devs",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.stepsDev = respStepsDev.data.data;
        const respArcFooters = await axios({
          url: "https://strapi.lymos.ru/api/mvp-arc-footers",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.arcFooters = respArcFooters.data.data;
        const respPageTitle = await axios({
          url: "https://strapi.lymos.ru/api/mvp-page-titles",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.pageTitle = respPageTitle.data.data;
        const respSpotsFores = await axios({
          url: "https://strapi.lymos.ru/api/mvp-spots-fores",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.spotsFores = respSpotsFores.data.data;
        const respMvpViews = await axios({
          url: "https://strapi.lymos.ru/api/mvp-views",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.mvpViews = respMvpViews.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
