<template>
  <div class="services__slider-container swiper-container">
    <swiper
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :pagination="{
        clickable: true,
        el: '.indicates',
        bulletClass: 'ind ind-2',
        bulletActiveClass: '.ind ind-1 ind-active',
      }"
      :slidesPerGroup="3"
      :slides-per-view="3"
      :space-between="16"
      :modules="modules"
    >
      <swiper-slide v-for="SwData in swipe.swiperData" :key="SwData.id">
        <RouterLink
          :to="`/services/${SwData.attributes.url}`"
          class="services__slide swiper-slide"
          :class="'slide-' + SwData.id"
        >
          <div class="bg_img_slide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="250"
              viewBox="0 0 250 250"
              fill="none"
            >
              <path :d="SwData.attributes.d" fill="white" fill-opacity="0.4" />
            </svg>
          </div>
          <div class="services__top-block">
            <h5>{{ SwData.attributes.title }}</h5>
            <div class="services__top_box">
              <IconCard />
            </div>
          </div>
          <p>
            {{ SwData.attributes.body }}
          </p>
        </RouterLink>
      </swiper-slide>
    </swiper>
    <div class="services__nav">
      <div class="indicates">
        <span class="ind ind-1 ind-active"></span>
        <span class="ind ind-2"></span>
      </div>
      <div class="btns">
        <div ref="prev" class="btn-prev">
          <svg
            width="32"
            height="19"
            viewBox="0 0 32 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.358715 9.65125H32M0.358715 9.65125L5.06843 4.94153L7.42329 2.58667L8.60072 1.4093M0.358715 9.65125L5.0771 14.3696L7.43629 16.7288L8.61588 17.9085"
              stroke="#3C3C3C"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div ref="next" class="btn-next">
          <svg
            width="33"
            height="19"
            viewBox="0 0 33 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.6413 9.65125H0M31.6413 9.65125L26.9316 4.94153L24.5767 2.58667L23.3993 1.4093M31.6413 9.65125L26.9229 14.3696L24.5637 16.7288L23.3841 17.9085"
              stroke="#3C3C3C"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
//swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
//подключение стилей swiper(must)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//модуль swiper(must)
const modules = [Navigation, Pagination];
//кнопки navigation
const prev = ref(null);
const next = ref(null);

import IconCard from "@/components/icons/IconCard.vue";

import { DataSwiper } from "@/stores/data-swiper.js";
const swipe = DataSwiper();

import { onMounted } from "vue";
onMounted(() => {
  swipe.getSwiper();
});
</script>
<style scoped>
.swiper {
  height: 26.0416667vw;
}
@media (max-width: 990px) {
  .swiper-slide {
    height: 250px;
  }
}

@media (max-width: 600px) {
  .swiper-slide {
    height: 150px;
  }
}
.services__slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  text-decoration: none;
  color: #3c3c3c;
}
.indicates {
  width: 16.40625vw;
}
</style>
