import { defineStore } from "pinia";
import axios from "axios";
export const DataMvp = defineStore("data-mvp", {
  state: () => ({
    arcHeaders: [],
    stepsDev: [],
    arcFooters: [],
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "arcHeadersMvp",
        storage: localStorage,
        paths: ["arcHeaders"],
      },
      {
        key: "stepsDevMvp",
        storage: localStorage,
        paths: ["stepsDev"],
      },
      {
        key: "arcFootersMvp",
        storage: localStorage,
        paths: ["arcFooters"],
      },
    ],
  },
  actions: {
    async getMvpData() {
      try {
        const respArcHeaders = await axios({
          url: "http://localhost:1337/api/mvp-arc-headers",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.arcHeaders = respArcHeaders.data.data;
        const respStepsDev = await axios({
          url: "http://localhost:1337/api/mvp-steps-devs",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.stepsDev = respStepsDev.data.data;
        const respArcFooters = await axios({
          url: "http://localhost:1337/api/mvp-arc-footers",
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
