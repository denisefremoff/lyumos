<script setup>
import { RouterLink } from "vue-router";
import IconOrderProject from "@/components/icons/IconOrderProject.vue";
import { FormControl } from "@/stores/form-control.js";
const form = FormControl();
</script>

<script>
export default {
  data() {
    return {
      isDropdownOpened: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpened = !this.isDropdownOpened;
    },
    closeDropdown() {
      this.isDropdownOpened = false;
    },
  },
};
</script>

<template>
  <header class="header">
    <!--  -->
    <div class="header__dropdown" :class="{ opened: isDropdownOpened }">
      <div class="left">
        <div class="left-part">
          <nav>
            <ul>
              <li>О компании</li>
              <li>
                <RouterLink to="/portfolio">Портфолио</RouterLink>
              </li>
              <li>
                <RouterLink to="/services">Услуги</RouterLink>
              </li>
            </ul>
          </nav>
          <p>IT-компания lumos.ru, 2023 © Все права защищены</p>
        </div>
        <div class="right-part">
          <nav>
            <ul>
              <li>
                <a class="btn-order" @click="form.changActivForm"
                  >Заказать проект
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.8027 8L12.5 23.3027M27.8027 8L27.8027 21.3456M27.8027 8L14.4816 8"
                      stroke="#FD8B93"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li>Контакты</li>
            </ul>
          </nav>

          <div class="right-contacts">
            <p>+7 (912) 345-67-89</p>
            <span class="dropdown__divider"></span>
            <p>it@lumos.ru</p>
          </div>
        </div>
      </div>

      <div class="left-mobile">
        <nav>
          <ul>
            <li>
              <a class="btn-order"
                >Заказать проект
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.8027 8L12.5 23.3027M27.8027 8L27.8027 21.3456M27.8027 8L14.4816 8"
                    stroke="#FD8B93"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>Контакты</li>
            <li>О компании</li>
            <li>Портфолио</li>
            <li>Услуги</li>
          </ul>
        </nav>

        <div class="left-mobile-contacts">
          <p>+7 (912) 345-67-89</p>
          <p>it@lumos.ru</p>
        </div>

        <p class="left-mobile-rights">
          IT-компания lumos.ru, 2023 © Все права защищены
        </p>
      </div>
      <div class="right">
        <button class="close-menu" @click="closeDropdown">
          <img src="@/assets/img/icons/icons.svg#x" alt="Закрыть" />
        </button>
        <div class="dropdown__links">
          <a href="">ВКонтакте</a>
          <a href="">Telegram</a>
          <a href="">Behance</a>
          <a href="">Dribbble</a>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="wrapper">
      <ul class="header__left-side">
        <li class="header__menu" @click="toggleDropdown">
          <p>Меню</p>
          <button>
            <span></span>
          </button>
        </li>
        <li class="header__left-item">
          <RouterLink to="/services">Услуги</RouterLink>
        </li>
        <li class="header__left-item">
          <RouterLink to="/portfolio">Портфолио</RouterLink>
        </li>
      </ul>
      <div class="header__logo">
        <RouterLink to="/">
          <img src="@/assets/img/icons/icons.svg#logo" alt="Логотип" />
        </RouterLink>
      </div>
      <ul class="header__right-side">
        <li class="header__right-item">+7 (919) 123 45 67</li>
        <li>
          <a class="btn-order"
            >Заказать проект
            <IconOrderProject />
          </a>
        </li>
      </ul>
    </div>

    <!--  -->

    <!-- <div class="dark-back">
            <div class="form-wrapper">
                <button class="close-form">
                    <img src="img/icons/icons.svg#x" alt="Закрыть">
                </button>
                
                <form action="">
                    <div data-num="1" class="form form-1 active-slide-form">
                        <div class="top">
                            <p>Какие услуги вам необходимы</p>
                            <button class="close-form-mobile">
                                <img src="img/icons/icons.svg#x" alt="Закрыть">
                            </button>
                        </div>
                        <div class="checkbox-container services">
                            <div class="services-group">
                                <label>
                                    <input type="checkbox" name="online-store">
                                    <p>Интернет-магазин</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="landing">
                                    <p>Лендинг</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="app">
                                    <p>Приложение</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="ux">
                                    <p>UX-прототипирование</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="service">
                                    <p>Сервис</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="ui-ux">
                                    <p>UI-UX дизайн</p>
                                </label>
                            </div>
                            <div class="services-group">
                                <label>
                                    <input type="checkbox" name="identity">
                                    <p>Айдентика</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="design">
                                    <p>Графический дизайн</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="design-support">
                                    <p>Дизайн поддержка</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="naming">
                                    <p>Нейминг</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="illustration">
                                    <p>Иллюстрация</p>
                                </label>
                            </div>
                        </div>

                        <div class="description">
                            <p>Опишите проект, не забудьте уточнить сроки</p>
                            <textarea name="description" placeholder="Введите сообщение..."></textarea>
                        </div>
                    </div>

                    <div data-num="2" class="form form-2">
                        <div class="top">
                            <p>Формат работы и сумма</p>
                            <button class="close-form-mobile">
                                <img src="img/icons/icons.svg#x" alt="Закрыть">
                            </button>
                        </div>
                        <p class="form-title">Формат работы:</p>
                        <div class="checkbox-container work-format">
                            <label>
                                <input type="checkbox" name="team">
                                <p>Выделенная команда</p>
                            </label>
                            <label>
                                <input type="checkbox" name="maintenancе">
                                <p>Годовое сопровождение</p>
                            </label>
                            <label>
                                <input type="checkbox" name="turnkey-project">
                                <p>Проект под ключ</p>
                            </label>
                            <label>
                                <input type="checkbox" name="hourly">
                                <p>T&M по часам</p>
                            </label>
                        </div>

                        <p class="form-title">Обсудим общий бюджет проекта:</p>
                        <div class="checkbox-container budget">
                            <label>
                                <input type="checkbox" name="500k">
                                <p>менее 500 тыс. ₽</p>
                            </label>
                            <label>
                                <input type="checkbox" name="1-5m">
                                <p>500 тыс - 1,5 млн ₽</p>
                            </label>
                            <label>
                                <input type="checkbox" name="3m">
                                <p>1,5 млн - 3 млн ₽</p>
                            </label>
                            <label>
                                <input type="checkbox" name="5m">
                                <p>3 млн - 5 млн ₽</p>
                            </label>
                        </div>
                    </div>

                    <div data-num="3" class="form form-3">
                        <div class="top">
                            <p>Пора знакомится</p>
                            <button class="close-form-mobile">
                                <img src="img/icons/icons.svg#x" alt="Закрыть">
                            </button>
                        </div>

                        <div class="profile">
                            <div class="input-wrapper">
                                <p class="input-title">Меня зовут</p>
                                <input type="text">
                            </div>
                            <div class="input-wrapper">
                                <p class="input-title">Я представляю компанию</p>
                                <input type="text">
                            </div>
                            <div class="input-wrapper">
                                <p class="input-title">Мой телефон</p>
                                <input type="text">
                            </div>
                            <div class="input-wrapper">
                                <p class="input-title">Моя почта</p>
                                <input type="text">
                            </div>
                        </div>




                    </div>
                </form>
                
                <div class="navigation">
                    <div class="navigation-btns">
                        <button class="prev-step" disabled>Назад</button>
                        <button class="next-step">Следующий шаг</button>
                    </div>
                    <div class="points">
                        <span data-num="1" class="point point-1 active-point"></span>
                        <span data-num="2" class="point point-2"></span>
                        <span data-num="3" class="point point-3"></span>
                    </div>
                </div>

                <svg class="animation-absolute animation-absolute-1" width="184" height="223" viewBox="0 0 184 223"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_850_872)">
                        <ellipse cx="72.4344" cy="111.777" rx="69.8581" ry="69.8581"
                            transform="rotate(180 72.4344 111.777)" fill="#D3E1FC" />
                    </g>
                    <defs>
                        <filter id="filter0_f_850_872" x="-38.4985" y="0.843288" width="221.866" height="221.866"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="20.5373" result="effect1_foregroundBlur_850_872" />
                        </filter>
                    </defs>
                </svg>


                <svg class="animation-absolute animation-absolute-2" width="249" height="267" viewBox="0 0 249 267"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_850_873)">
                        <circle cx="133.555" cy="133.481" r="78.4153" transform="rotate(180 133.555 133.481)"
                            fill="#F5D6FC" />
                    </g>
                    <defs>
                        <filter id="filter0_f_850_873" x="0.684578" y="0.611336" width="265.741" height="265.74"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="27.2275" result="effect1_foregroundBlur_850_873" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div> -->
  </header>
</template>

<style scoped>
.header__menu button {
  cursor: pointer;
}

.header__left-item a,
.header__logo a,
.header .left-part nav ul li a {
  text-decoration: none;
  color: #1e1e1e;
}

.header__logo a img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
