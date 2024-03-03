<script setup>
import { FormControl } from "@/stores/form-control.js";
import { DataForm } from "@/stores/data-form.js";
import { onMounted } from "vue";

const form = FormControl();
const dataForm = DataForm();

onMounted(() => {
  dataForm.getFormData();
});
</script>
<template>
  <div @click="form.changActivForm" class="dark-back">
    <div @click.stop class="form-wrapper">
      <button @click="form.changActivForm" class="close-form">
        <img src="@/assets/img/icons/icons.svg#x" alt="Закрыть" />
      </button>
      <form action="" autocomplete="off">
        <div
          v-if="form.getPageNumber === 1"
          data-num="1"
          class="form form-1 active-slide-form"
        >
          <div class="top">
            <p>{{ dataForm.sevicesTitle }}</p>
            <button @click="form.changActivForm" class="close-form-mobile">
              <img src="@/assets/img/icons/icons.svg#x" alt="Закрыть" />
            </button>
          </div>
          <div class="checkbox-container services">
            <div class="services-group">
              <label>
                <input
                  v-model="form.arrServises"
                  type="checkbox"
                  name="erp-system"
                  value="ERP-система"
                />
                <p>ERP-система</p>
              </label>
              <label>
                <input
                  v-model="form.arrServises"
                  type="checkbox"
                  name="crm-system"
                  value="CRM-система"
                />
                <p>CRM-система</p>
              </label>
              <label>
                <input
                  v-model="form.arrServises"
                  type="checkbox"
                  name="production-management"
                  value="Управление производством"
                />
                <p>Управление производством</p>
              </label>
              <label>
                <input
                  v-model="form.arrServises"
                  type="checkbox"
                  name="development-analogue"
                  value="Разработка аналога иностранного ПО"
                />
                <p>Разработка аналога иностранного ПО</p>
              </label>
              <label>
                <input
                  v-model="form.arrServises"
                  type="checkbox"
                  name="monitoring-systems"
                  value="Системы мониторинга"
                />
                <p>Системы мониторинга</p>
              </label>
              <label>
                <input
                  v-model="form.arrServises"
                  type="checkbox"
                  name="implementation-ai"
                  value="Внедрение ИИ"
                />
                <p>Внедрение ИИ</p>
              </label>
              <label>
                <input
                  v-model="form.arrServises"
                  type="checkbox"
                  name="product-support"
                  value="Поддержка продукта"
                />
                <p>Поддержка продукта</p>
              </label>
              <label>
                <input
                  v-model="form.arrServises"
                  type="checkbox"
                  name="financial-management"
                  value="Управление финансами"
                />
                <p>Управление финансами</p>
              </label>
              <label>
                <input
                  v-model="form.arrServises"
                  type="checkbox"
                  name="project-management"
                  value="Управление проектами"
                />
                <p>Управление проектами</p>
              </label>
              <label>
                <input
                  v-model="form.arrServises"
                  type="checkbox"
                  name="product-refinement"
                  value="Доработка продукта"
                />
                <p>Доработка продукта</p>
              </label>
              <label>
                <input
                  v-model="form.arrServises"
                  type="checkbox"
                  name="mvp-development"
                  value="Разработка MVP"
                />
                <p>Разработка MVP</p>
              </label>
              <label>
                <input
                  v-model="form.arrServises"
                  type="checkbox"
                  name="customized-solution"
                  value="Индивидуальные решение"
                />
                <p>Индивидуальные решение</p>
              </label>
            </div>
          </div>
          <div class="description">
            <p>{{ dataForm.description }}</p>
            <textarea
              v-model="form.description"
              name="description"
              placeholder="Введите сообщение..."
              autocomplete="off"
            ></textarea>
          </div>
        </div>

        <div v-else data-num="3" class="form form-3">
          <div class="top">
            <p>{{ dataForm.meetTitle }}</p>
            <button class="close-form-mobile">
              <img src="@/assets/img/icons/icons.svg#x" alt="Закрыть" />
            </button>
          </div>
          <div class="profile">
            <div class="input-wrapper">
              <p class="input-title">Меня зовут</p>
              <input type="text" v-model.trim="form.name" autocomplete="off" />
            </div>
            <div class="input-wrapper">
              <p class="input-title">Я представляю компанию</p>
              <input
                type="text"
                v-model.trim="form.company"
                autocomplete="off"
              />
            </div>
            <div class="input-wrapper">
              <p class="input-title">Мой телефон</p>
              <input
                id="phoneNumber"
                type="text"
                v-model="form.phoneNumber"
                v-bind:title="form.phonePattern"
                autocomplete="off"
                v-imask="{ mask: '+7 (000) 000-00-00' }"
              />
            </div>
            <div class="input-wrapper">
              <p class="input-title">Моя почта</p>
              <input
                type="email"
                v-bind:title="form.emailPattern"
                v-model.trim="form.email"
                autocomplete="off"
              />
            </div>
          </div>
        </div>
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
              {{ dataForm.buttonBack }}
            </button>
            <button
              v-if="form.getPageNumber === 1"
              @click="form.changePageForvard"
              :class="[
                { 'next-step': !form.getWrong },
                { wrong: form.getWrong },
              ]"
            >
              {{ dataForm.buttonNext }}
            </button>
            <button
              v-else
              @click="form.passInformation"
              :class="[
                { 'next-step': !form.getWrong },
                { wrong: form.getWrong },
              ]"
            >
              {{ dataForm.buttonSend }}
            </button>
          </div>
          <!-- незаполненные поля -->
          <div class="wrong-status" v-if="form.getWrong">
            <p>{{ form.response }}</p>
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
<style scoped>
.wrong-status {
  color: #ff404e;
  font-family: Onest;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}
</style>
