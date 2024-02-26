import { defineStore } from "pinia";
import axios from "axios";

export const DataTitleDesc = defineStore("data-titleDesc", {
  state: () => ({
    // homeTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // premPipeTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // portfolioTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // mvpTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // modTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // iiTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // devTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // contactTitleDesc: {
    //   title: "",
    //   description: "",
    // },
    // servTitleDecs: {
    //   title: "",
    //   description: "",
    // },
    titleDesc: {
      title: "",
      description: "",
    },
  }),
  actions: {
    async getHomeTitDecs() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/title-descriptions/1",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        // let tmpHome = response.data.data;
        // this.homeTitleDesc.title = tmpHome.attributes.title;
        // this.homeTitleDesc.description = tmpHome.attributes.description;
        let tmp = response.data.data;
        this.titleDesc.title = tmp.attributes.title;
        this.titleDesc.description = tmp.attributes.description;
      } catch (err) {
        console.log(err);
      }
    },
    async getPremPipeTitDecs() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/title-descriptions/2",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        // let tmpPremPipe = response.data.data;
        // this.premPipeTitleDesc.title = tmpPremPipe.attributes.title;
        // this.premPipeTitleDesc.description = tmpPremPipe.attributes.description;
        let tmp = response.data.data;
        this.titleDesc.title = tmp.attributes.title;
        this.titleDesc.description = tmp.attributes.description;
      } catch (err) {
        console.log(err);
      }
    },
    async getPortfolioTitDecs() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/title-descriptions/3",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        // let tmpPortfolio = response.data.data;
        // this.portfolioTitleDesc.title = tmpPortfolio.attributes.title;
        // this.portfolioTitleDesc.description = tmpPortfolio.attributes.description;
        let tmp = response.data.data;
        this.titleDesc.title = tmp.attributes.title;
        this.titleDesc.description = tmp.attributes.description;
      } catch (err) {
        console.log(err);
      }
    },
    async getMvpTitDesc() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/title-descriptions/4",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        // let tmpMvp = response.data.data;
        // this.mvpTitleDesc.title = tmpMvp.attributes.title;
        // this.mvpTitleDesc.description = tmpMvp.attributes.description;
        let tmp = response.data.data;
        this.titleDesc.title = tmp.attributes.title;
        this.titleDesc.description = tmp.attributes.description;
      } catch (err) {
        console.log(err);
      }
    },
    async getModTitDesc() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/title-descriptions/5",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        // let tmpMod = response.data.data;
        // this.modTitleDesc.title = tmpMod.attributes.title;
        // this.modTitleDesc.description = tmpMod.attributes.description;
        let tmp = response.data.data;
        this.titleDesc.title = tmp.attributes.title;
        this.titleDesc.description = tmp.attributes.description;
      } catch (err) {
        console.log(err);
      }
    },
    async getIiTitDesc() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/title-descriptions/6",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        // let tmpIi = response.data.data;
        // this.iiTitleDesc.title = tmpIi.attributes.title;
        // this.iiTitleDesc.description = tmpIi.attributes.description;
        let tmp = response.data.data;
        this.titleDesc.title = tmp.attributes.title;
        this.titleDesc.description = tmp.attributes.description;
      } catch (err) {
        console.log(err);
      }
    },
    async getDevTitDesc() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/title-descriptions/7",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        // let tmpDev = response.data.data;
        // this.devTitleDesc.title = tmpDev.attributes.title;
        // this.devTitleDesc.description = tmpDev.attributes.description;
        let tmp = response.data.data;
        this.titleDesc.title = tmp.attributes.title;
        this.titleDesc.description = tmp.attributes.description;
      } catch (err) {
        console.log(err);
      }
    },
    async getContactTitleDesc() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/title-descriptions/8",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        // let tmpContact = response.data.data;
        // this.devTitleDesc.title = tmpContact.attributes.title;
        // this.devTitleDesc.description = tmpContact.attributes.description;
        let tmp = response.data.data;
        this.titleDesc.title = tmp.attributes.title;
        this.titleDesc.description = tmp.attributes.description;
      } catch (err) {
        console.log(err);
      }
    },
    async getServTitleDesc() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/title-descriptions/9",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        // let tmpServ = response.data.data;
        // this.servTitleDecs.title = tmpServ.attributes.title;
        // this.servTitleDecs.description = tmpServ.attributes.description;
        let tmp = response.data.data;
        this.titleDesc.title = tmp.attributes.title;
        this.titleDesc.description = tmp.attributes.description;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
