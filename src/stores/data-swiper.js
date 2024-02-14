import { defineStore } from "pinia";
import axios from "axios";
export const DataSwiper = defineStore("data-swiper", {
  state: () => ({
    swiperData: [],
  }),
  actions: {
    async getSwiper() {
      try {
        const response = await axios({
          url: "https://strapi.lymos.ru/api/swipers?sort=id",
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        this.swiperData = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
