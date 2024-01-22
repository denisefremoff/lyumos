<script setup>
import { RouterLink } from "vue-router";
import { FormControl } from "@/stores/form-control.js";
const form = FormControl();
</script>

<template>
  <div class="thanks" @click="form.changeThanksFormState()">
    <div class="thanks_wrapper">
      <div class="thanks_content" @click.stop>
        <div class="thanks_close" @click="form.changeThanksFormState()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M27.0711 13.0711L20.093 20.0491M13.115 27.0271L20.093 20.0491M20.093 20.0491L27.1641 27.1202M20.093 20.0491L13.022 12.978"
              stroke="#1E1E1E"
              stroke-width="1.71429"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h4>Форма успешно отправлена!</h4>
        <p>
          Мы перезвоним вам в течении 30 минут, а пока, можете посмотреть услуги
          или кейсы
        </p>
        <div class="transitions">
          <ul>
            <li>
              <RouterLink to="/services" @click="form.changeThanksFormState()"
                >Услуги
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M23.3027 8L8 23.3027M23.3027 8L23.3027 21.3456M23.3027 8L9.98161 8"
                    stroke="#1E1E1E"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/portfolio" @click="form.changeThanksFormState()"
                >Портфолио
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M23.3027 8L8 23.3027M23.3027 8L23.3027 21.3456M23.3027 8L9.98161 8"
                    stroke="#1E1E1E"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thanks {
  /* display: none; */
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  /* backdrop-filter: blur(10px); */
}

.thanks_wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thanks_content {
  position: relative;
  padding: 2.0833333vw;
  border-radius: 1.0416667vw;
  width: 31.25vw;
  background: #fff;
}

.thanks_close {
  position: absolute;
  top: 1.0416667vw;
  right: 1.0416667vw;
  height: 2.0833333vw;
  width: 2.0833333vw;
  cursor: pointer;
}

.thanks_close svg {
  height: 2.0833333vw;
  width: 2.0833333vw;
}

.thanks_content h4 {
  color: #1e1e1e;
  text-align: center;
  font-size: 1.9791667vw;
  font-weight: 500;
  line-height: 140%;
  padding-top: 1.0416667vw;
}

.thanks_content p {
  margin-top: 1.0416667vw;
  color: #595959;
  text-align: center;
  font-size: 1.0416667vw;
  font-weight: 400;
  line-height: 120%;
}

.transitions {
  margin-top: 3.125vw;
}

.transitions ul {
  display: flex;
  column-gap: 1.0416667vw;
}

.transitions a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.625vw;
  border: 2px solid #1e1e1e;
  padding: 0.4166667vw 0.8333333vw;
  width: 13.0208333vw;
  text-decoration: none;
  color: #1e1e1e;
  font-size: 0.8333333vw;
  font-weight: 400;
  line-height: 120%;
}

.transitions svg {
  height: 1.6666667vw;
  width: 1.6666667vw;
}

@media (max-width: 1023px) {
  .thanks_content {
    padding: 20px;
    border-radius: 20px;
    width: 326px;
  }

  .thanks_close {
    top: 20px;
    right: 20px;
    height: 28px;
    width: 28px;
  }

  .thanks_close svg {
    height: 28px;
    width: 28px;
  }

  .thanks_content h4 {
    font-size: 21px;
    padding-top: 0;
  }

  .thanks_content p {
    margin-top: 20px;
    font-size: 12px;
  }

  .transitions {
    margin-top: 20px;
  }

  .transitions ul {
    column-gap: 20px;
  }

  .transitions a {
    border-radius: 8px;
    border: 2px solid #1e1e1e;
    padding: 8px 12px;
    width: 133px;
    font-size: 12px;
  }

  .transitions svg {
    height: 18px;
    width: 18px;
  }
}

@media (max-width: 600px) {
  .transitions li:first-child {
    order: 1;
  }

  .transitions li:last-child {
    order: 2;
  }
}
</style>
