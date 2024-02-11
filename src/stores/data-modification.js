import { defineStore } from "pinia";
import axios from "axios";
export const DataMod = defineStore("data-mod", {
  state: () => ({
    arcHeaders: [],
    stepsDev: [],
    arcFooters: [],
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "arcHeadersMod",
        storage: localStorage,
        paths: ["arcHeaders"],
      },
      {
        key: "stepsDevMod",
        storage: localStorage,
        paths: ["stepsDev"],
      },
      {
        key: "arcFootersMod",
        storage: localStorage,
        paths: ["arcFooters"],
      },
    ],
  },
  actions: {
    async getModData() {
      try {
        const respArcHeaders = await axios({
          url: "http://localhost:1337/api/mod-arc-headers",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.arcHeaders = respArcHeaders.data.data;
        const respStepsDev = await axios({
          url: "http://localhost:1337/api/mod-steps-devs",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.stepsDev = respStepsDev.data.data;
        const respArcFooters = await axios({
          url: "http://localhost:1337/api/mod-arc-footers",
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
