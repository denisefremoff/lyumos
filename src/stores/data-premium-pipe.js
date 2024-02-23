import { defineStore } from "pinia";
import axios from "axios";
export const DataPremiumPipe = defineStore("data-premium-pipe", {
  state: () => ({
    concepts: [],
    aboutProjects: [],
    swapIcons: [],
    technologyLogos: [],
    tmpWeUse: {},
    weUse: "",
    designSystems: [],
    contentPremiumPipe: [],
    contentPremiumPipeUl: [],
  }),
  getters: {
    getSwapIcons() {
      return this.swapIcons;
    },
    getTechLogo() {
      return this.technologyLogos;
    },
    getWeUse() {
      return (this.weUse = this.tmpWeUse.attributes.h2);
    },
    getDesineSystem() {
      return this.designSystems;
    },
    getContentPremiumPipe() {
      return this.contentPremiumPipe;
    },
    getContentPremiumPipeUl() {
      return this.contentPremiumPipeUl;
    },
  },
  actions: {
    async getPermPipeAbout() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/premium-pipe-abouts",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.aboutProjects = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getPermPipeConcepts() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/premium-pipe-concepts",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.concepts = response.data.data;
        console.log(response);
      } catch (err) {}
    },
    async getPermiumPipe() {
      try {
        const responseSwapIcons = await axios({
          url: "https://strapi.lymos.ru/api/swap-icons",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.swapIcons = responseSwapIcons.data.data;
        const responseTechnologyLogos = await axios({
          url: "https://strapi.lymos.ru/api/technologies",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.technologyLogos = responseTechnologyLogos.data.data;
        const responseWeUse = await axios({
          url: "https://strapi.lymos.ru/api/we-uses/1",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.tmpWeUse = responseWeUse.data.data;
        const responseDesignSystems = await axios({
          url: "https://strapi.lymos.ru/api/design-systems",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.designSystems = responseDesignSystems.data.data;
        const responseContentPremiumPipe = await axios({
          url: "https://strapi.lymos.ru/api/content-premium-pipes",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.contentPremiumPipe = responseContentPremiumPipe.data.data;
        const responseContentPremiumPipeUl = await axios({
          url: "https://strapi.lymos.ru/api/content-premium-pipe-uls",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        this.contentPremiumPipeUl = responseContentPremiumPipeUl.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
