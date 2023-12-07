<script setup>
import { ref } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import IconPrimaryBtn from "@/components/icons/IconPrimaryBtn.vue";
import { RouterLink } from 'vue-router'
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
  color: #1E1E1E;
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
  width: 16.4062500vw;
}
</style>

<template>
  <TheHeader />

  <main>
    <section class="intro">
      <div class="wrapper">
        <h1>
          <span data-text="{Строим}">{Строим}</span> будущее ИТ-развития вместе
        </h1>

        <h4>
          Мы - опытная веб-студия, которая работает по всей России и
          специализируется на разработке сайтов, веб-приложений и создании
          привлекательных пользовательских интерфейсов.
        </h4>
      </div>
    </section>

    <section class="services">
      <div class="wrapper">
        <h4>Мы занимаемся</h4>

        <div class="services__container">
          <div class="services__pre">
            <RouterLink to="/services" class="services__btn primary-btn">Все услуги
              <IconPrimaryBtn />
            </RouterLink>
            <p class="services__text">
              Наш подход основан на детальном анализе, полном погружении в вашу
              компанию и инструментах, которые помогут решить ваши задачи и
              привлечь клиентов
            </p>
          </div>
          <div class="services__slider-container swiper-container">
            <swiper :navigation="{
              prevEl: prev,
              nextEl: next,
            }" :pagination="{
  clickable: true,
  el: '.indicates',
  bulletClass: 'ind ind-2',
  bulletActiveClass: '.ind ind-1 ind-active',
}" :slidesPerGroup="3" :slides-per-view="3" :space-between="16" :modules="modules">
              <swiper-slide>
                <div class="services__slide swiper-slide slide-1">
                  <div class="services__top-block">
                    <h5>Разработка сайта</h5>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M33 13L13 33M33 13L33 30.4422M33 13L15.5899 13" stroke="#3C3C3C" stroke-width="2.5"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p>
                    Создадим сайт с уникальным дизайном, оптимизируем его для
                    продвижения и увеличим Ваши продажи.
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="services__slide swiper-slide slide-2">
                  <div class="services__top-block">
                    <h5>Заказная разработка</h5>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M33 13L13 33M33 13L33 30.4422M33 13L15.5899 13" stroke="#3C3C3C" stroke-width="2.5"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p>
                    Автоматизируем бизнес - процессы и создадим программный
                    продукт под потребности вашего бизнеса. Возьмем на себя
                    полный цикл разработки.
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="services__slide swiper-slide slide-3">
                  <div class="services__top-block">
                    <h5>UI/UX</h5>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M33 13L13 33M33 13L33 30.4422M33 13L15.5899 13" stroke="#3C3C3C" stroke-width="2.5"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p>
                    Проведем исследование, выявим потребности. Отрисуем и
                    удобные и понятные интерфейсы.
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="services__slide swiper-slide slide-4">
                  <div class="services__top-block">
                    <h5>Аналитика</h5>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M33 13L13 33M33 13L33 30.4422M33 13L15.5899 13" stroke="#3C3C3C" stroke-width="2.5"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p>
                    Поможем сформулировать цели, проведем анализ бизнес -
                    процессов, напишем требования, подберем идеальное решение.
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="services__slide swiper-slide slide-5">
                  <div class="services__top-block">
                    <h5>Разработка документации</h5>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M33 13L13 33M33 13L33 30.4422M33 13L15.5899 13" stroke="#3C3C3C" stroke-width="2.5"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p>
                    Разработаем технические задания, требования к продукту,
                    схемы, архитектурные диаграммы и другие необходимые
                    материалы для успешной разработки.
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="services__slide swiper-slide slide-6">
                  <div class="services__top-block">
                    <h5>Разработка продукта</h5>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M33 13L13 33M33 13L33 30.4422M33 13L15.5899 13" stroke="#3C3C3C" stroke-width="2.5"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p>
                    Создадим сайт с уникальным дизайном, оптимизируем его для
                    продвижения и увеличим Ваши продажи.
                  </p>
                </div>
              </swiper-slide>
            </swiper>
            <div class="services__nav">
              <div class="indicates">
                <span class="ind ind-1 ind-active"></span>
                <span class="ind ind-2"></span>
              </div>
              <div class="btns">
                <div ref="prev" class="btn-prev">
                  <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.358715 9.65125H32M0.358715 9.65125L5.06843 4.94153L7.42329 2.58667L8.60072 1.4093M0.358715 9.65125L5.0771 14.3696L7.43629 16.7288L8.61588 17.9085"
                      stroke="#3C3C3C" stroke-width="2" stroke-linejoin="round" />
                  </svg>
                </div>
                <div ref="next" class="btn-next">
                  <svg width="33" height="19" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M31.6413 9.65125H0M31.6413 9.65125L26.9316 4.94153L24.5767 2.58667L23.3993 1.4093M31.6413 9.65125L26.9229 14.3696L24.5637 16.7288L23.3841 17.9085"
                      stroke="#3C3C3C" stroke-width="2" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="services__mobile">
            <div class="services__slide swiper-slide slide-1">
              <div class="services__top-block">
                <h5>Разработка сайта</h5>
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 13L13 33M33 13L33 30.4422M33 13L15.5899 13" stroke="#3C3C3C" stroke-width="2.5"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <p>
                Создадим сайт с уникальным дизайном, оптимизируем его для
                продвижения и увеличим Ваши продажи.
              </p>
            </div>

            <div class="services__slide swiper-slide slide-5">
              <div class="services__top-block">
                <h5>Разработка документации</h5>
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 13L13 33M33 13L33 30.4422M33 13L15.5899 13" stroke="#3C3C3C" stroke-width="2.5"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <p>
                Разработаем технические задания, требования к продукту, схемы,
                архитектурные диаграммы и другие необходимые материалы для
                успешной разработки.
              </p>
            </div>

            <div class="services__slide swiper-slide slide-3">
              <div class="services__top-block">
                <h5>UI/UX</h5>
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 13L13 33M33 13L33 30.4422M33 13L15.5899 13" stroke="#3C3C3C" stroke-width="2.5"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <p>
                Проведем исследование, выявим потребности. Отрисуем и удобные и
                понятные интерфейсы.
              </p>
            </div>

            <div class="services__slide swiper-slide slide-4">
              <div class="services__top-block">
                <h5>Аналитика</h5>
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 13L13 33M33 13L33 30.4422M33 13L15.5899 13" stroke="#3C3C3C" stroke-width="2.5"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <p>
                Поможем сформулировать цели, проведем анализ бизнес - процессов,
                напишем требования, подберем идеальное решение.
              </p>
            </div>

            <div class="services__slide swiper-slide slide-2">
              <div class="services__top-block">
                <h5>Заказная разработка</h5>
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 13L13 33M33 13L33 30.4422M33 13L15.5899 13" stroke="#3C3C3C" stroke-width="2.5"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <p>
                Автоматизируем бизнес - процессы и создадим программный продукт
                под потребности вашего бизнеса. Возьмем на себя полный цикл
                разработки.
              </p>
            </div>

            <div class="services__slide swiper-slide slide-6">
              <div class="services__top-block">
                <h5>Разработка продукта</h5>
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 13L13 33M33 13L33 30.4422M33 13L15.5899 13" stroke="#3C3C3C" stroke-width="2.5"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <p>
                Создадим сайт с уникальным дизайном, оптимизируем его для
                продвижения и увеличим Ваши продажи.
              </p>
            </div>
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
            <button class="about__btn primary-btn">
              О компании
              <IconPrimaryBtn />
            </button>
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
