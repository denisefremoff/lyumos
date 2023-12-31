<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheSpots from '@/components/TheSpots.vue';

import DevTurnkey from '@/components/DevTurnkey.vue';
import DevAnalytics from '@/components/DevAnalytics.vue';
import DevDocument from '@/components/DevDocument.vue';
import DevUiUx from '@/components/DevUiUx.vue';
import DevOrder from '@/components/DevOrder.vue';
</script>

<template>
  <TheHeader />
  <main>
    <TheSpots />
    <div class="wrapper">
      <div class="content amenities">

        <h1 class="title_amenities">Услуги</h1>
        <h4 class="description_amenities">
          Специализируемся на создании сложных веб- и мобильных продуктов. Мы стоим на принципах дизайна,
          опирающегося на данные, аналитику и удобство использования.
        </h4>

        <section class="key_development">
          <h2>Разработка под ключ</h2>
          <div class="development">
            <DevTurnkey />
          </div>
        </section>

        <section class="analytics">
          <div class="left_analytics">
            <h2>Аналитика</h2>
            <p>
              Поможем сформулировать цели, проведем анализ бизнес - процессов, напишем требования,
              подберем идеальное решение.
            </p>
            <div class="icon_analytics">
              <svg xmlns="http://www.w3.org/2000/svg" width="325" height="312" viewBox="0 0 325 312" fill="none">
                <path
                  d="M57.0863 223.073L4.35165 170.339C-0.413523 165.573 -0.413523 157.632 4.35165 152.549L150.801 5.78127C157.473 -0.889979 167.956 -0.889979 174.31 5.78127L320.759 152.231C325.525 156.996 325.525 164.938 320.759 170.021L268.342 223.073C264.53 226.885 257.859 226.25 255.318 221.485L173.357 79.8003C168.591 71.5407 156.52 71.5407 151.754 79.8003L70.1111 221.167C67.252 225.932 60.8984 226.885 57.0863 223.073ZM80.9122 294.233L93.6193 306.94C96.7961 310.117 100.926 311.706 105.373 311.706H219.738C224.185 311.706 228.315 309.799 231.492 306.94L244.199 294.233C249.599 288.833 250.552 280.573 246.74 273.902L169.862 140.477C166.685 134.759 158.743 134.759 155.249 140.477L78.3707 274.219C74.5586 280.573 75.5116 288.833 80.9122 294.233Z"
                  fill="url(#paint0_linear_1246_4472)" />
                <defs>
                  <linearGradient id="paint0_linear_1246_4472" x1="-195.738" y1="-174.19" x2="492.198" y2="512.412"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#F5D6FC" />
                    <stop offset="1" stop-color="#FCF2D3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div class="right_analytics">
            <DevAnalytics />
          </div>
        </section>

        <section class="documentation">
          <div class="left_documentation">
            <h2>Разработка документации</h2>
            <p>
              Разработаем технические задания, требования к продукту, схемы, архитектурные диаграммы и
              другие необходимые материалы для успешной разработки.
            </p>
          </div>
          <div class="right_documentation">
            <DevDocument />
          </div>
        </section>

        <section class="ui_ux">
          <div class="left_ui_ux">
            <h2>UI/UX</h2>
            <p>Проведем исследование, выявим потребности. Отрисуем и удобные и понятные интерфейсы. </p>
            <div class="icon_ui_ux">
              <svg xmlns="http://www.w3.org/2000/svg" width="325" height="325" viewBox="0 0 325 325" fill="none">
                <path
                  d="M214.786 1.28207C240.271 9.57215 263.433 23.7716 282.383 42.7212C301.332 61.6708 315.532 84.8333 323.822 110.318C324.384 112.318 324.275 114.447 323.513 116.379C322.751 118.312 321.378 119.942 319.602 121.02C317.826 122.098 315.746 122.566 313.68 122.351C311.614 122.136 309.675 121.25 308.159 119.829L205.275 16.9763C203.838 15.4634 202.939 13.5202 202.716 11.446C202.493 9.3719 202.957 7.28182 204.039 5.49776C205.12 3.7137 206.758 2.3346 208.7 1.57283C210.642 0.81106 212.78 0.708909 214.786 1.28207ZM110.158 1.28207C84.6736 9.57215 61.5111 23.7716 42.5615 42.7212C23.6119 61.6708 9.41247 84.8333 1.1224 110.318C0.560547 112.318 0.668833 114.447 1.43086 116.379C2.19289 118.312 3.56666 119.942 5.34229 121.02C7.11792 122.098 9.19781 122.566 11.2641 122.351C13.3303 122.136 15.2693 121.25 16.7849 119.829L119.67 16.9763C121.081 15.4687 121.964 13.5426 122.184 11.489C122.404 9.43545 121.95 7.36597 120.89 5.59336C119.83 3.82074 118.222 2.44129 116.309 1.66349C114.395 0.885694 112.281 0.751824 110.285 1.28207H110.158ZM214.786 323.855C240.271 315.565 263.433 301.365 282.383 282.416C301.332 263.466 315.532 240.303 323.822 214.819C324.384 212.819 324.275 210.69 323.513 208.758C322.751 206.825 321.378 205.195 319.602 204.117C317.826 203.038 315.746 202.571 313.68 202.786C311.614 203.001 309.675 203.887 308.159 205.308L205.275 308.192C203.854 309.708 202.968 311.647 202.753 313.713C202.538 315.779 203.006 317.859 204.084 319.635C205.162 321.41 206.792 322.784 208.725 323.546C210.657 324.308 212.786 324.417 214.786 323.855ZM1.24915 214.819C9.53923 240.303 23.7388 263.466 42.6884 282.416C61.638 301.365 84.8004 315.565 110.285 323.855C112.285 324.417 114.414 324.308 116.346 323.546C118.279 322.784 119.909 321.41 120.987 319.635C122.065 317.859 122.533 315.779 122.318 313.713C122.103 311.647 121.217 309.708 119.796 308.192L16.9117 205.308C15.3962 203.887 13.4572 203.001 11.3909 202.786C9.32466 202.571 7.24477 203.038 5.46914 204.117C3.69351 205.195 2.31974 206.825 1.55771 208.758C0.795682 210.69 0.6873 212.819 1.24915 214.819ZM94.9075 230.101C103.773 238.975 114.301 246.014 125.889 250.816C137.476 255.619 149.897 258.091 162.44 258.091C174.984 258.091 187.404 255.619 198.992 250.816C210.58 246.014 221.107 238.975 229.973 230.101C238.848 221.233 245.887 210.702 250.691 199.112C255.494 187.522 257.966 175.099 257.966 162.553C257.966 150.006 255.494 137.583 250.691 125.993C245.887 114.403 238.848 103.872 229.973 95.0038C212.059 77.0986 187.768 67.0403 162.44 67.0403C137.112 67.0403 112.821 77.0986 94.9075 95.0038C86.0331 103.872 78.9933 114.403 74.1902 125.993C69.3871 137.583 66.915 150.006 66.915 162.553C66.915 175.099 69.3871 187.522 74.1902 199.112C78.9933 210.702 86.0331 221.233 94.9075 230.101Z"
                  fill="url(#paint0_linear_1309_4634)" />
                <defs>
                  <linearGradient id="paint0_linear_1309_4634" x1="-57.9673" y1="-59.1846" x2="368.764" y2="365.172"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#F5D6FC" />
                    <stop offset="1" stop-color="#D3E1FC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div class="right_ui_ux">
            <DevUiUx />
          </div>
        </section>

        <section class="working">
          <div class="left_working">
            <h2>Заказная разработка</h2>
            <p>
              Автоматизируем бизнес - процессы и создадим программный продукт под потребности вашего
              бизнеса. Возьмем на себя полный цикл разработки.
            </p>
            <div class="icon_working">
              <svg xmlns="http://www.w3.org/2000/svg" width="325" height="319" viewBox="0 0 325 319" fill="none">
                <path
                  d="M320.726 168.318L206.284 282.76C204.958 284.07 203.233 284.9 201.382 285.119C199.53 285.337 197.659 284.932 196.064 283.967C194.469 283.002 193.242 281.533 192.577 279.792C191.912 278.05 191.846 276.137 192.391 274.354L248.819 95.9676C249.249 94.5989 250.025 93.3643 251.071 92.383C252.118 91.4017 253.4 90.7069 254.794 90.3657C256.187 90.0245 257.645 90.0484 259.026 90.4352C260.408 90.822 261.666 91.5585 262.68 92.5737L320.726 150.619C323.031 152.988 324.322 156.163 324.322 159.469C324.322 162.774 323.031 165.95 320.726 168.318ZM118.804 36.1458L4.36185 150.619C2.05616 152.988 0.765991 156.163 0.765991 159.469C0.765991 162.774 2.05616 165.95 4.36185 168.318L62.4074 226.364C63.4212 227.379 64.6796 228.115 66.0612 228.502C67.4427 228.889 68.9006 228.913 70.2941 228.572C71.6875 228.231 72.9695 227.536 74.016 226.554C75.0626 225.573 75.8385 224.339 76.2685 222.97L132.696 44.583C133.253 42.7981 133.197 40.8781 132.536 39.1289C131.875 37.3798 130.648 35.9022 129.049 34.9316C127.451 33.961 125.574 33.5533 123.717 33.7733C121.86 33.9934 120.131 34.8285 118.804 36.1458ZM212.945 0.779297H193.914C190.374 0.790805 186.929 1.92797 184.078 4.0263C181.227 6.12463 179.118 9.07539 178.054 12.4519L90.4469 288.913C89.5282 291.829 89.4268 294.942 90.1539 297.911C90.8809 300.881 92.4084 303.594 94.5703 305.756L103.293 314.479C104.455 315.64 105.835 316.56 107.354 317.186C108.872 317.812 110.5 318.132 112.143 318.126H131.174C134.711 318.122 138.155 316.991 141.006 314.898C143.858 312.805 145.969 309.859 147.033 306.486L234.482 30.0241C235.404 27.1032 235.506 23.9857 234.779 21.0105C234.052 18.0353 232.523 15.3164 230.359 13.1496L221.763 4.4587C219.427 2.11269 216.256 0.789386 212.945 0.779297Z"
                  fill="url(#paint0_linear_1335_4673)" />
                <defs>
                  <linearGradient id="paint0_linear_1335_4673" x1="-197.687" y1="-200.762" x2="518.905" y2="515.798"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#F5D6FC" />
                    <stop offset="1" stop-color="#FCD6D8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div class="right_working">
            <DevOrder />
          </div>
        </section>

      </div>
    </div>

  </main>
  <TheFooter />
</template>