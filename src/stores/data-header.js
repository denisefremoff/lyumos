import { defineStore } from "pinia";
import axios from "axios";
export const DataHeader = defineStore("data-header", {
  state: () => ({
    copyrightP: "",
    a_href_tel: "",
    a_tel: "",
    a_href_mail: "",
    a_mail: "",
    a_orderProject: "",
    menuButtonP: "",
    socials: [],
    navigations: [],
    services: "",
    portfolio: "",
    servicesRout: "",
    portfolioRout: "",
  }),
  actions: {
    async getHeader() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/headers/1",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        let tmp = response.data.data;
        this.copyrightP = tmp.attributes.copyright_p;
        this.a_href_tel = tmp.attributes.a_href_tel;
        this.a_tel = tmp.attributes.a_tel;
        this.a_href_mail = tmp.attributes.a_href_mail;
        this.a_mail = tmp.attributes.a_mail;
        this.a_orderProject = tmp.attributes.a_orderProject;
        this.menuButtonP = tmp.attributes.menuButtonP;
        const respSocials = await axios({
          url: "https://strapi.lymos.ru/api/header-socials",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.socials = respSocials.data.data;
        const respNavigation = await axios({
          url: "https://strapi.lymos.ru/api/header-navs",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.navigations = respNavigation.data.data;
        let tmpServ = respNavigation.data.data[2];
        let tmpPortf = respNavigation.data.data[0];
        this.services = tmpServ.attributes.routerLink;
        this.servicesRout = tmpServ.attributes.routerLink_to;
        this.portfolio = tmpPortf.attributes.routerLink;
        this.portfolioRout = tmpPortf.attributes.routerLink_to;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

// /api/header-navs
