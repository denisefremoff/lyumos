import { defineStore } from "pinia";
import axios from "axios";
export const DataDev = defineStore("data-dev", {
  state: () => ({
    arcHeaders: [],
    stepsDev: [],
    arcFooters: [],
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "arcHeadersDev",
        storage: localStorage,
        paths: ["arcHeaders"],
      },
      {
        key: "stepsDevDev",
        storage: localStorage,
        paths: ["stepsDev"],
      },
      {
        key: "arcFootersDev",
        storage: localStorage,
        paths: ["arcFooters"],
      },
    ],
  },
  actions: {
    async getDevData() {
      try {
        const respArcHeaders = await axios({
          url: "http://localhost:1337/api/dev-arc-headers",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.arcHeaders = respArcHeaders.data.data;
        const respStepsDev = await axios({
          url: "http://localhost:1337/api/dev-steps-devs",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.stepsDev = respStepsDev.data.data;
        const respArcFooters = await axios({
          url: "http://localhost:1337/api/dev-arc-footers",
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
