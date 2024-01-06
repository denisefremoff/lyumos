<template>
  <div @click="form.changActivForm" class="dark-back">
    <div @click.stop class="form-wrapper">
      <button @click="form.changActivForm" class="close-form">
        <img src="@/assets/img/icons/icons.svg#x" alt="Закрыть" />
      </button>
      <form action="">
        <transition name="slide-fade">
          <div
            v-if="form.getPageNumber === 1"
            data-num="1"
            class="form form-1 active-slide-form"
          >
            <div class="top">
              <p>Какие услуги вам необходимы</p>
              <!-- зачем вторая кнопка "закрыть" -->
              <button class="close-form-mobile">
                <img src="img/icons/icons.svg#x" alt="Закрыть" />
              </button>
            </div>
            <div class="checkbox-container services">
              <div class="services-group">
                <label>
                  <input
                    v-model="form.arrServises"
                    type="checkbox"
                    name="online-store"
                    value="Интернет-магазин"
                  />
                  <p>Интернет-магазин</p>
                </label>
                <label>
                  <input
                    v-model="form.arrServises"
                    type="checkbox"
                    value="Лендинг"
                    name="landing"
                  />
                  <p>Лендинг</p>
                </label>
                <label>
                  <input
                    v-model="form.arrServises"
                    type="checkbox"
                    value="Приложение"
                    name="app"
                  />
                  <p>Приложение</p>
                </label>
                <label>
                  <input
                    v-model="form.arrServises"
                    type="checkbox"
                    name="ux"
                    value="UX-прототипирование"
                  />
                  <p>UX-прототипирование</p>
                </label>
                <label>
                  <input
                    v-model="form.arrServises"
                    type="checkbox"
                    name="service"
                    value="Сервис"
                  />
                  <p>Сервис</p>
                </label>
                <label>
                  <input
                    v-model="form.arrServises"
                    type="checkbox"
                    name="ui-ux"
                    value="UI-UX дизайн"
                  />
                  <p>UI-UX дизайн</p>
                </label>
              </div>
              <div class="services-group">
                <label>
                  <input
                    v-model="form.arrServises"
                    type="checkbox"
                    name="identity"
                    value="Айдентика"
                  />
                  <p>Айдентика</p>
                </label>
                <label>
                  <input
                    v-model="form.arrServises"
                    type="checkbox"
                    name="design"
                    value="Графический дизайн"
                  />
                  <p>Графический дизайн</p>
                </label>
                <label>
                  <input
                    v-model="form.arrServises"
                    type="checkbox"
                    name="design-support"
                    value="Дизайн поддержка"
                  />
                  <p>Дизайн поддержка</p>
                </label>
                <label>
                  <input
                    v-model="form.arrServises"
                    type="checkbox"
                    name="naming"
                    value="Нейминг"
                  />
                  <p>Нейминг</p>
                </label>
                <label>
                  <input
                    v-model="form.arrServises"
                    type="checkbox"
                    name="illustration"
                    value="Иллюстрация"
                  />
                  <p>Иллюстрация</p>
                </label>
              </div>
            </div>
            <div class="description">
              <p>Опишите проект, не забудьте уточнить сроки</p>
              <textarea
                v-model="form.description"
                name="description"
                placeholder="Введите сообщение..."
              ></textarea>
            </div>
          </div>

          <div v-else data-num="3" class="form form-3">
            <div class="top">
              <p>Пора знакомится</p>
              <button class="close-form-mobile">
                <img src="@/assets/img/icons/icons.svg#x" alt="Закрыть" />
              </button>
            </div>
            <div class="profile">
              <div class="input-wrapper">
                <p class="input-title">Меня зовут</p>
                <input type="text" v-model="form.name" />
              </div>
              <div class="input-wrapper">
                <p class="input-title">Я представляю компанию</p>
                <input type="text" v-model="form.company" />
              </div>
              <div class="input-wrapper">
                <p class="input-title">Мой телефон</p>
                <input type="text" v-model="form.phoneNumber" />
              </div>
              <div class="input-wrapper">
                <p class="input-title">Моя почта</p>
                <input type="email" v-model="form.email" />
              </div>
            </div>
          </div>
        </transition>
      </form>

      <div class="navigation">
        <!--  -->
        <div class="btns-status">
          <div class="navigation-btns">
            <button
              class="prev-step"
              @click="form.changePageBack"
              :disabled="form.getPageNumber < 2"
            >
              Назад
            </button>
            <button
              v-if="form.getPageNumber === 1"
              @click="form.changePageForvard"
              :class="[
                { 'next-step': !form.getWrong },
                { wrong: form.getWrong },
              ]"
            >
              Следующий шаг
            </button>
            <button
              v-else
              @click="form.passInformation"
              :class="[
                { 'next-step': !form.getWrong },
                { wrong: form.getWrong },
              ]"
            >
              Отправить
            </button>
          </div>
          <!-- не заполненые поля -->
          <div class="wrong-status" v-if="form.getWrong">
            <p>Необходимо заполнить все поля, для успешной отправки</p>
          </div>
        </div>

        <div class="points">
          <span
            data-num="1"
            class="point point-1"
            :class="{ 'active-point': form.getPageNumber === 1 }"
            @click="form.pageNumber = 1"
          ></span>
          <span
            data-num="2"
            class="point point-2"
            :class="{ 'active-point': form.getPageNumber === 2 }"
            @click="form.changePageForvard"
          ></span>
        </div>
      </div>

      <svg
        class="animation-absolute animation-absolute-1"
        width="184"
        height="223"
        viewBox="0 0 184 223"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_850_872)">
          <ellipse
            cx="72.4344"
            cy="111.777"
            rx="69.8581"
            ry="69.8581"
            transform="rotate(180 72.4344 111.777)"
            fill="#D3E1FC"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_850_872"
            x="-38.4985"
            y="0.843288"
            width="221.866"
            height="221.866"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="20.5373"
              result="effect1_foregroundBlur_850_872"
            />
          </filter>
        </defs>
      </svg>

      <svg
        class="animation-absolute animation-absolute-2"
        width="249"
        height="267"
        viewBox="0 0 249 267"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_850_873)">
          <circle
            cx="133.555"
            cy="133.481"
            r="78.4153"
            transform="rotate(180 133.555 133.481)"
            fill="#F5D6FC"
          />
        </g>

        <defs>
          <filter
            id="filter0_f_850_873"
            x="0.684578"
            y="0.611336"
            width="265.741"
            height="265.74"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="27.2275"
              result="effect1_foregroundBlur_850_873"
            />
          </filter>
        </defs>
      </svg>
    </div>
  </div>
</template>
<script setup>
import { FormControl } from "@/stores/form-control.js";
const form = FormControl();
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.next-step {
  background: #dbdbdb;
}
.wrong {
  background: #fcd6d8;
  color: #ff404e;
}
.wrong-status {
  display: flex;
  align-items: center;
  margin-left: 40px;
  width: 256px;
  height: 42px;
  color: #ff404e;
  font-family: Onest;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}

.navigation {
  justify-content: space-between;
}
.btns-status {
  display: flex;
}
.dark-back {
  opacity: 1;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 100000000;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
</style>
<!-- --------------------------------------------------------------------------------------- -->
<!--  <span
            data-num="3"
            class="point point-3"
            :class="{ 'active-point': form.getPageNumber === 3 }"
            @click="form.pageNumber = 3"
          ></span> -->

<!-- /* .dark-back .form-wrapper .form .checkbox-container label input[type="radio"] {
  -webkit-transition: 0.3s;
  transition: 0.3s;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
} */ -->

<!-- <div
            v-else-if="form.getPageNumber === 2"
            data-num="2"
            class="form form-2"
          >
            <div class="top">
              возможно стот использовать радиокнопки 
              <p>Формат работы и сумма</p>
              <button class="close-form-mobile">
                <img src="@/assets/img/icons/icons.svg#x" alt="Закрыть" />
              </button>
            </div>
            <p class="form-title">Формат работы:</p>
            <div class="checkbox-container work-format">
              <label>
                <input
                  v-model="form.workFormat"
                  value="Выделенная команда"
                  type="radio"
                  name="team"
                />
                <p>Выделенная команда</p>
              </label>
              <label>
                <input
                  v-model="form.workFormat"
                  value="Годовое сопровождение"
                  type="radio"
                  name="maintenancе"
                />
                <p>Годовое сопровождение</p>
              </label>
              <label>
                <input
                  v-model="form.workFormat"
                  value="Проект под ключ"
                  type="radio"
                  name="turnkey-project"
                />
                <p>Проект под ключ</p>
              </label>
              <label>
                <input
                  v-model="form.workFormat"
                  value="T&M по часам"
                  type="radio"
                  name="hourly"
                />
                <p>T&M по часам</p>
              </label>
            </div>

            <p class="form-title">Обсудим общий бюджет проекта:</p>
            <div class="checkbox-container budget">
              <label>
                <input
                  v-model="form.totalbudget"
                  type="radio"
                  value="менее 500 тыс. ₽"
                  name="500k"
                />
                <p>менее 500 тыс. ₽</p>
              </label>
              <label>
                <input
                  v-model="form.totalbudget"
                  type="radio"
                  value="500 тыс - 1,5 млн ₽"
                  name="1-5m"
                />
                <p>500 тыс - 1,5 млн ₽</p>
              </label>
              <label>
                <input
                  v-model="form.totalbudget"
                  type="radio"
                  value="1,5 млн - 3 млн ₽"
                  name="3m"
                />
                <p>1,5 млн - 3 млн ₽</p>
              </label>
              <label>
                <input
                  v-model="form.totalbudget"
                  type="radio"
                  value="3 млн - 5 млн ₽"
                  name="5m"
                />
                <p>3 млн - 5 млн ₽</p>
              </label>
            </div>
          </div>-->

<!--  <label>
  <input type="checkbox" name="500k" />
  <p>менее 500 тыс. ₽</p>
</label>
<label>
  <input type="checkbox" name="1-5m" />
<p>500 тыс - 1,5 млн ₽</p>
</label>
<label>
  <input type="checkbox" name="3m" />
  <p>1,5 млн - 3 млн ₽</p>
</label>
<label>
  <input type="checkbox" name="5m" />
  <p>3 млн - 5 млн ₽</p>
</label> 
  -->

<!--   <label>
    <input
      v-model="form.workFormat"
      value="Выделенная команда"
      type="checkbox"
      name="team"
    />
    <p>Выделенная команда</p>
  </label>
  <label>
    <input
      v-model="form.workFormat"
      value="Годовое сопровождение"
      type="checkbox"
      name="maintenancе"
    />
    <p>Годовое сопровождение</p>
  </label>
  <label>
    <input
      v-model="form.workFormat"
      value="Проект под ключ"
      type="checkbox"
      name="turnkey-project"
    />
    <p>Проект под ключ</p>
  </label>
  <label>
    <input
      v-model="form.workFormat"
      value="T&M по часам"
      type="checkbox"
      name="hourly"
    />
    <p>T&M по часам</p>
  </label> 
-->
