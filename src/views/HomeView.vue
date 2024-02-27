<script setup>
import TheFooter from "@/components/TheFooter.vue";
import IconPrimaryBtn from "@/components/icons/IconPrimaryBtn.vue";
import { RouterLink } from "vue-router";

// import IconCard from "@/components/icons/IconCard.vue";
//swiper
import TheSwiper from "@/components/TheSwiper.vue";
//сервисы моб. версия
import TheServMob from "@/components/TheServicesMobile.vue";
import { useHead } from "@unhead/vue";

import { onMounted } from "vue";
import { DataTitleDesc } from "@/stores/data-titleDesc.js";
import { DataHome } from "@/stores/data-home.js";

const titleDesc = DataTitleDesc();
const dataHome = DataHome();

onMounted(() => {
  titleDesc.getHomeTitDecs();
  dataHome.getHomePage();
});

// useHead({
//   title: () => titleDesc.homeTitleDesc.title,
//   meta: [
//     {
//       name: "description",
//       content: () => titleDesc.homeTitleDesc.description,
//     },
//   ],
// });
useHead({
  title: () => titleDesc.titleDesc.title,
  meta: [
    {
      name: "description",
      content: () => titleDesc.titleDesc.description,
    },
  ],
});
</script>

<style scoped>
/* добавил для корректной работы swiper */
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
}

.primary-btn {
  font-size: 16px;
  color: #1e1e1e;
  text-decoration: none;
}

@media (max-width: 1440px) {
  .primary-btn {
    font-size: 14px;
  }
}

@media (max-width: 990px) {
  .primary-btn {
    font-size: 12px;
  }
}

.indicates {
  width: 16.40625vw;
}
</style>

<template>
  <main>
    <section class="intro">
      <div class="wrapper">
        <h1>
          <!-- <span data-text="{Строим}">{Строим}</span> будущее ИТ-развития вместе -->
          <span>{{ dataHome.introH1Span }}</span> {{ dataHome.introH1 }}
        </h1>

        <h4>
          {{ dataHome.introH4 }}
        </h4>
      </div>
    </section>

    <section class="services">
      <div class="wrapper">
        <h4>{{ dataHome.servicesH4 }}</h4>

        <div class="services__container">
          <div class="services__pre">
            <RouterLink to="/services" class="services__btn primary-btn"
              >{{ dataHome.servicesRouterLink }}
              <IconPrimaryBtn />
            </RouterLink>
            <p class="services__text">{{ dataHome.servicesP }}</p>
          </div>
          <div class="services__slider-container swiper-container">
            <TheSwiper />
          </div>
          <div class="services__mobile">
            <TheServMob />
          </div>
        </div>
      </div>
    </section>

    <section class="benefits">
      <div class="wrapper">
        <h2>
          <span>{{ dataHome.benefitsSpan }}</span>
          {{ dataHome.benefitsH2 }}
        </h2>
        <span class="divider"></span>
        <h4 v-for="benefith4 in dataHome.benefitsh4" :key="benefith4.id">
          {{ benefith4.attributes.h4 }}
        </h4>
      </div>
    </section>

    <section class="about">
      <div class="wrapper">
        <h4>{{ dataHome.aboutH4 }}</h4>
        <div class="about__container">
          <div class="about__pre">
            <!-- <button class="about__btn primary-btn">
              О компании
              <IconPrimaryBtn />
            </button> -->
            <!-- aboutPs -->
            <div>
              <p
                v-for="aboutP in dataHome.aboutPs"
                :key="aboutP.id"
                class="about__text"
              >
                {{ aboutP.attributes.p }}
              </p>
            </div>
          </div>
          <div class="about__blocks">
            <div class="about__block">
              <span class="about__block-num">{{
                dataHome.aboutBlockSpan1
              }}</span>
              <p>{{ dataHome.aboutBlockP1 }}</p>
            </div>
            <div class="about__divider"></div>
            <div class="about__block">
              <span class="about__block-num">
                {{ dataHome.aboutBlockSpan2 }}</span
              >
              <p>{{ dataHome.aboutBlockP2 }}</p>
            </div>
            <div class="about__divider"></div>
            <div class="about__block">
              <span class="about__block-num">{{
                dataHome.aboutBlockSpan3
              }}</span>
              <p>{{ dataHome.aboutBlockP3 }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <TheFooter />
</template>
