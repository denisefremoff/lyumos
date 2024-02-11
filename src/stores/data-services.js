import { defineStore } from "pinia";
import axios from "axios";
export const DataServices = defineStore("data-services", {
  state: () => ({
    applicationSers: [],
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "applicService",
        storage: localStorage,
        paths: ["applicationSers"],
      },
    ],
  },
  actions: {
    async getServices() {
      try {
        const response = await axios({
          url: "http://localhost:1337/api/services?populate=*",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        this.applicationSers = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
