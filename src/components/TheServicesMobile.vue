<template>
  <div v-for="SwData in swipe.swiperData" :key="SwData.id">
    <div class="services__slide swiper-slide" :class="'slide-' + SwData.id">
      <div class="bg_img_slide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="250"
          viewBox="0 0 250 250"
          fill="none"
        >
          <path :d="SwData.d" fill="white" fill-opacity="0.4" />
        </svg>
      </div>
      <div class="services__top-block">
        <h5>{{ SwData.title }}</h5>
        <IconCard />
      </div>
      <p>
        {{ SwData.body }}
      </p>
    </div>
  </div>
</template>
<script setup>
import IconCard from "@/components/icons/IconCard.vue";
import { DataSwiper } from "@/stores/data-swiper.js";
const swipe = DataSwiper();
</script>
<style scoped>
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
}
</style>
