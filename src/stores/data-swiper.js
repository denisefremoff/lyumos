import { defineStore } from "pinia";
import axios from "axios";
export const DataSwiper = defineStore("data-swiper", {
  state: () => ({
    swiperData: [],
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "swiperData",
        storage: localStorage,
        paths: ["swiperData"],
      },
    ],
  },
  actions: {
    async getSwiper() {
      try {
        const response = await axios({
          url: "http://localhost:1337/api/swipers",
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
