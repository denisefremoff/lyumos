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

const titleDesc = DataTitleDesc();

onMounted(() => {
  titleDesc.getHomeTitDecs();
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
          <span>{Разработка}</span> ИТ-решений для бизнеса
        </h1>

        <h4>
          Создаем технологические решения, нацеленные на ваш успех. Доверьте нам
          свои идеи, и мы сделаем их работающей частью вашего бизнеса.
        </h4>
      </div>
    </section>

    <section class="services">
      <div class="wrapper">
        <h4>Мы занимаемся</h4>

        <div class="services__container">
          <div class="services__pre">
            <RouterLink to="/services" class="services__btn primary-btn"
              >Все услуги
              <IconPrimaryBtn />
            </RouterLink>
            <p class="services__text">
              Наш подход основан на детальном анализе, полном погружении в вашу
              компанию и инструментах, которые помогут решить ваши задачи и
              привлечь клиентов
            </p>
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
          <span>Нас выбирают</span>
          потому что
        </h2>
        <span class="divider"></span>
        <h4>Создаем индивидуальные решения</h4>
        <h4>Ведем полную документацию</h4>
        <h4>Понимаем ваши цели</h4>
      </div>
    </section>

    <section class="about">
      <div class="wrapper">
        <h4>Немного о нас</h4>
        <div class="about__container">
          <div class="about__pre">
            <!-- <button class="about__btn primary-btn">
              О компании
              <IconPrimaryBtn />
            </button> -->
            <div>
              <p class="about__text">
                Наш продукт, зарегистрирован в реестре Российского ПО
              </p>
              <p class="about__text">
                Имеем аккредитацию в Министерстве цифрового развития, связи и
                массовых коммуникаций
              </p>
            </div>
          </div>
          <div class="about__blocks">
            <div class="about__block">
              <span class="about__block-num">5+</span>
              <p>Лет опыта</p>
            </div>
            <div class="about__divider"></div>
            <div class="about__block">
              <span class="about__block-num">20+</span>
              <p>Профессионалов</p>
            </div>
            <div class="about__divider"></div>
            <div class="about__block">
              <span class="about__block-num">50+</span>
              <p>Выполенных проектов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <TheFooter />
</template>
