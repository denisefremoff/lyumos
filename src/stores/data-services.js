import { defineStore } from "pinia";
import axios from "axios";
export const DataServices = defineStore("data-services", {
  state: () => ({
    applicationServ: [],
    servicesViewH1: "",
    servicesViewH4: "",
  }),
  getters: {
    getH1() {
      return this.servicesViewH1;
    },
    getH4() {
      return this.servicesViewH4;
    },
    getApplicationServs() {
      return this.applicationServ;
    },
  },
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

        this.applicationServ = response.data.data;
        const respServicesView = await axios({
          url: "https://strapi.lymos.ru/api/services-views/1 ",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        let tmp = respServicesView.data.data;
        this.servicesViewH1 = tmp.attributes.h1;
        this.servicesViewH4 = tmp.attributes.h4;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
