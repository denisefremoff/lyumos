import { defineStore } from "pinia";
import axios from "axios";
export const DataServices = defineStore("data-services", {
  state: () => ({
    applicationSers: [],
  }),

  actions: {
    async getServices() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/services?populate=*",
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
