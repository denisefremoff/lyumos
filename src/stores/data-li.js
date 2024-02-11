import { defineStore } from "pinia";
import axios from "axios";
export const DataIi = defineStore("data-li", {
  state: () => ({
    arcHeaders: [],
    stepsDev: [],
    arcFooters: [],
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "arcHeadersIi",
        storage: localStorage,
        paths: ["arcHeaders"],
      },
      {
        key: "stepsDevIi",
        storage: localStorage,
        paths: ["stepsDev"],
      },
      {
        key: "arcFootersIi",
        storage: localStorage,
        paths: ["arcFooters"],
      },
    ],
  },
  actions: {
    async getIiData() {
      try {
        const respArcHeaders = await axios({
          url: "http://localhost:1337/api/ii-arc-headers",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.arcHeaders = respArcHeaders.data.data;
        const respStepsDev = await axios({
          url: "http://localhost:1337/api/ii-steps-devs",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.stepsDev = respStepsDev.data.data;
        const respArcFooters = await axios({
          url: "http://localhost:1337/api/ii-arc-footers",
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
