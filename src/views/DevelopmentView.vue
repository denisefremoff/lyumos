<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheSpotsFore from "@/components/TheSpotsFore.vue";
import PageTitle from "@/components/PageTitle.vue";
import PageSteps from "@/components/PageSteps.vue";
import TheExpertise from "@/components/TheExpertise.vue";
</script>

<script>
export default {
  components: {
    PageSteps,
  },
  data() {
    return {
      pageData: {
        arcHeaders: [
          {
            id: 1,
            arcclass: "arc_1",
            iconarc:
              '<svg xmlns="http://www.w3.org/2000/svg" width="617" height="305" viewBox="0 0 617 305" fill="none"><path d="M604.848 267.645C579.921 236.286 552.249 206.936 523.578 179.1C486.775 143.367 447.777 115.114 403.494 89.6316C338.535 52.2517 271.515 17.4454 195.62 12.769C153.942 10.2009 101.362 13.3096 67.8029 42.1305C44.158 62.4369 24.0615 96.8808 18.3741 127.909C8.6137 181.158 13.8255 238.418 13.8255 292.549" stroke="url(#paint0_linear_1508_9605)" stroke-width="24" stroke-linecap="round"/><defs><linearGradient id="paint0_linear_1508_9605" x1="-22.4647" y1="196.148" x2="543.52" y2="191.659" gradientUnits="userSpaceOnUse"><stop stop-color="#DF40FF"/><stop offset="1" stop-color="white"/></linearGradient></defs></svg>',
          },
          {
            id: 2,
            arcclass: "arc_2",
            iconarc:
              '<svg xmlns="http://www.w3.org/2000/svg" width="617" height="305" viewBox="0 0 617 305" fill="none"><path d="M604.954 267.596C580.028 236.237 552.355 206.887 523.685 179.05C486.882 143.318 447.883 115.064 403.6 89.5822C338.642 52.2023 271.621 17.396 195.727 12.7197C154.048 10.1516 101.468 13.2603 67.9093 42.0811C44.2644 62.3876 24.1679 96.8315 18.4805 127.86C8.72015 181.108 13.9319 238.369 13.9319 292.499" stroke="url(#paint0_linear_1508_9606)" stroke-width="24" stroke-linecap="round"/><defs><linearGradient id="paint0_linear_1508_9606" x1="-19.8293" y1="242.765" x2="645.29" y2="241.268" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="#3377FF"/></linearGradient></defs></svg>',
          },
        ],
        stepsDev: [
          {
            id: 1,
            number: "Шаг 1",
            title: "Анализ",
            iconstep:
              '<svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none"><g clip-path="url(#clip0_2440_6483)"><path d="M31.4629 66.2119L0.853125 35.5365C-0.263542 34.4198 -0.263542 32.5806 0.853125 31.4639L31.4629 0.854102C32.5796 -0.262565 34.4188 -0.262565 35.5355 0.854102L66.1453 31.4639C67.2619 32.5806 67.2619 34.4198 66.1453 35.5365L35.5355 66.1463C34.4188 67.3286 32.5796 67.3286 31.4629 66.2119Z" fill="#DF40FF"/></g><defs><clipPath id="clip0_2440_6483"><rect width="67" height="67" fill="white"/></clipPath></defs></svg>',
            description:
              "Анализируем проект в деталях, изучаем проблемы конечных пользователей, которые они хотят решить",
          },
          {
            id: 2,
            number: "Шаг 2",
            title: "Прототип",
            description:
              "Мы разрабатываем прототип проекта, где мы продумываем основные сценарии использования и логику пользовательского интерфейса",
          },
          {
            id: 3,
            number: "Шаг 3",
            title: "Дизайн",
            iconstep:
              '<svg xmlns="http://www.w3.org/2000/svg" width="68" height="67" viewBox="0 0 68 67" fill="none"><g clip-path="url(#clip0_2440_6351)"><path d="M33.832 66.9995C52.3336 66.9995 67.332 52.001 67.332 33.4995C67.332 14.998 52.3336 -0.000488281 33.832 -0.000488281C15.3305 -0.000488281 0.332031 14.998 0.332031 33.4995C0.332031 52.001 15.3305 66.9995 33.832 66.9995Z" fill="#3377FF"/></g><defs><clipPath id="clip0_2440_6351"><rect width="67" height="67" fill="white" transform="translate(0.333008)"/></clipPath></defs></svg>',
            description:
              "Мы работаем над созданием интерфейса, который не только отражает имидж бренда, но и обеспечивает удобство пользователей в его использовании",
          },
          {
            id: 4,
            number: "Шаг 4",
            title: "Разработка",
            iconstep:
              '<svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none"><g clip-path="url(#clip0_2440_612)"><path d="M35.4962 2.62794L15.856 64.6358C15.4619 65.8181 16.3815 67.0662 17.6295 67.0662H28.4021C30.0442 67.0662 31.4893 66.0152 31.9491 64.4387L51.5893 2.43088C51.9178 1.24853 51.0638 0.000488281 49.8158 0.000488281H39.0432C37.4011 0.000488281 35.956 1.05147 35.4962 2.62794Z" fill="#FF404E"/></g><defs><clipPath id="clip0_2440_612"><rect width="67" height="67" fill="white"/></clipPath></defs></svg>',
            description:
              "Как только дизайн завершен, мы передаем его для разработки. В итоге получаем веб-продукт, который сочетает в себе привлекательность визуального исполнения и функциональность",
          },
          {
            id: 5,
            number: "Шаг 5",
            title: "Тестирование",
            description:
              "Весь процесс разработки продукта включает тщательную проверку на каждом этапе, чтобы убедиться, что его использование удобно пользователям",
          },
          {
            id: 6,
            number: "Шаг 6",
            title: "Поддержка",
            description:
              "Работа над продуктом продолжается после релиза, так как мы предоставляем услуги поддержки для того, чтобы убедиться, что все функционирует правильно",
          },
        ],
        arcFooters: [
          {
            id: 1,
            arcclass: "arc_3",
            iconarc:
              '<svg xmlns="http://www.w3.org/2000/svg" width="617" height="305" viewBox="0 0 617 305" fill="none"><path d="M12 37.4045C36.9262 68.7638 64.5987 98.1136 93.2693 125.95C130.072 161.683 169.071 189.936 213.354 215.418C278.313 252.798 345.333 287.604 421.228 292.281C462.906 294.849 515.486 291.74 549.045 262.919C572.69 242.613 592.786 208.169 598.474 177.141C608.234 123.892 603.022 66.6317 603.022 12.501" stroke="url(#paint0_linear_1508_9615)" stroke-width="24" stroke-linecap="round"/><defs><linearGradient id="paint0_linear_1508_9615" x1="79.7764" y1="65.8332" x2="642.726" y2="64.3366" gradientUnits="userSpaceOnUse"><stop stop-color="#FF404E"/><stop offset="1" stop-color="white"/></linearGradient></defs></svg>',
          },
          {
            id: 2,
            arcclass: "arc_4",
            iconarc:
              '<svg xmlns="http://www.w3.org/2000/svg" width="617" height="305" viewBox="0 0 617 305" fill="none"><path d="M12.5879 37.3547C37.5141 68.714 65.1866 98.0638 93.8572 125.9C130.66 161.633 169.659 189.886 213.942 215.368C278.9 252.748 345.921 287.555 421.815 292.231C463.494 294.799 516.074 291.69 549.633 262.87C573.278 242.563 593.374 208.119 599.061 177.091C608.822 123.842 603.61 66.5818 603.61 12.4512" stroke="url(#paint0_linear_1508_9616)" stroke-width="24" stroke-linecap="round"/><defs><linearGradient id="paint0_linear_1508_9616" x1="24.727" y1="12.4512" x2="662.534" y2="12.4511" gradientUnits="userSpaceOnUse"><stop stop-color="#1E1E1E"/><stop offset="1" stop-opacity="0"/></linearGradient></defs></svg>',
          },
        ],
      },
    };
  },
};
</script>

<template>
  <TheHeader />

  <main class="development">
    <PageTitle
      pageTitle="Разработка продукта"
      pageDescription="Индивидуальные продукты, адаптированные к уникальным потребностям вашего бизнеса"
      pageIcon='<svg xmlns="http://www.w3.org/2000/svg" width="476" height="640" viewBox="0 0 476 640" fill="none"><path d="M632.888 331.396L406.519 557.764C403.896 560.355 400.484 561.997 396.822 562.43C393.161 562.862 389.459 562.061 386.304 560.152C383.15 558.244 380.722 555.337 379.406 551.893C378.09 548.449 377.961 544.664 379.039 541.138L490.654 188.285C491.505 185.577 493.04 183.135 495.11 181.194C497.18 179.253 499.716 177.879 502.472 177.204C505.229 176.529 508.112 176.576 510.845 177.341C513.578 178.106 516.067 179.563 518.072 181.571L632.888 296.387C637.448 301.072 640 307.353 640 313.891C640 320.43 637.448 326.71 632.888 331.396ZM233.481 69.9557L7.11269 296.387C2.55198 301.072 0 307.353 0 313.891C0 320.43 2.55198 326.71 7.11269 331.396L121.928 446.211C123.933 448.219 126.423 449.676 129.155 450.441C131.888 451.206 134.772 451.254 137.528 450.579C140.284 449.904 142.82 448.529 144.89 446.588C146.96 444.647 148.495 442.205 149.346 439.498L260.961 86.6448C262.063 83.114 261.951 79.3162 260.644 75.8564C259.336 72.3966 256.909 69.4739 253.747 67.554C250.586 65.6342 246.873 64.8277 243.2 65.2629C239.527 65.6982 236.106 67.3502 233.481 69.9557ZM419.695 0H382.051C375.048 0.0227628 368.235 2.27209 362.596 6.42264C356.956 10.5732 352.783 16.4099 350.68 23.0886L177.391 569.936C175.574 575.704 175.373 581.859 176.811 587.733C178.249 593.607 181.271 598.975 185.547 603.251L202.801 620.504C205.099 622.801 207.829 624.621 210.833 625.859C213.837 627.097 217.056 627.73 220.305 627.72H257.95C264.946 627.711 271.758 625.474 277.398 621.334C283.039 617.195 287.214 611.366 289.32 604.694L462.296 57.8468C464.118 52.0693 464.322 45.9027 462.883 40.0177C461.445 34.1327 458.421 28.7547 454.139 24.4688L437.137 7.27793C432.516 2.63748 426.243 0.0199558 419.695 0Z" fill="#E0E0E0"/></svg>'
    />

    <TheSpotsFore
      pageSlogan="Сфокусируйтесь на главном. Автоматизируйте все остальное."
    />

    <div class="wrapper">
      <div class="content product_dev">
        <h4 class="product_h4">Цифровое воплощение</h4>
        <PageSteps :dataSteps="pageData" />

        <div class="experience">
          <!-- <h5>Иновационные решения</h5>
          <p>
            Решения на основе инновационных технологий и ИИ, индивидуально
            адаптированные под Вас для увеличения эффективности бизнеса и
            прибыли компании
          </p>-->
          <h3>Наша экспертность в автоматизации</h3>
          <TheExpertise />
          <!-- <div class="expertise">
                        <div class="type_expertise">
                            <div class="type_expertise_header">
                                <h5>Стратегия</h5>
                                <div class="type_expertise_description">


                                    <div class="description_1">
                                        <h6>DSS (Decision Support System)</h6>
                                        <p>Математические модели и статистические методы</p>
                                    </div>

                                     <div class="description_2">
                                        <h6>EIS (Executive Information System)</h6>
                                        <p>Мониторинг ключевых показателей</p>
                                    </div>

                                    <div class="description_3">
                                        <h6>FIM (Financial Information Management)</h6>
                                        <p>Бюджетирование и финансовый учет</p>
                                    </div>


                                    <div class="description_4">
                                        <h6>CRM (Customer Relationship Management)</h6>
                                        <p>Маркетинг и продажи</p>
                                    </div> 




                                </div>
                            </div>
                            <div class="type_expertise_footer">
                                <ul>
                                    <li class="expertise_active">
                                        <p>DSS</p>
                                    </li>
                                    <li>
                                        <p>EIS</p>
                                    </li>
                                    <li>
                                        <p>FIM</p>
                                    </li>
                                    <li>
                                        <p>CRM</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="type_expertise">
                            <div class="type_expertise_header">
                                <h5>Производство</h5>
                                <h6>SCM (Supply Chain Management)</h6>
                                <p>Поставки и логистика</p>
                            </div>
                            <div class="type_expertise_footer">
                                <ul>
                                    <li class="expertise_active">
                                        <p>SCM</p>
                                    </li>
                                    <li>
                                        <p>WMS</p>
                                    </li>
                                    <li>
                                        <p>ERP</p>
                                    </li>
                                    <li>
                                        <p>MES</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="type_expertise">
                            <div class="type_expertise_header">
                                <h5>Персонал</h5>
                                <h6>HRM (Human Resource Management)</h6>
                                <p>Управление персоналом</p>
                            </div>
                            <div class="type_expertise_footer">
                                <ul>
                                    <li class="expertise_active">
                                        <p>HRM</p>
                                    </li>
                                    <li>
                                        <p>LMS</p>
                                    </li>
                                    <li>
                                        <p>PM</p>
                                    </li>
                                    <li>
                                        <p>BPM</p>
                                    </li>
                                    <li>
                                        <p>OAS</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="type_expertise">
                            <div class="type_expertise_header">
                                <h5>Информация</h5>
                                <h6>ECM (Enterprise Content Management)</h6>
                                <p>Прием и обработка документов</p>
                            </div>
                            <div class="type_expertise_footer">
                                <ul>
                                    <li class="expertise_active">
                                        <p>ECM</p>
                                    </li>
                                    <li>
                                        <p>EDI</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>-->
        </div>

        <section class="word_case">
          <h2>От слов к делу</h2>
          <h3>Кейсы</h3>
          <div class="cases">
            <div class="case">
              <div class="left_case">
                <div class="left_case_header">
                  <h4>Система автоматизации для Premium Pipe</h4>
                  <ul>
                    <li>
                      <p>Производство</p>
                    </li>
                    <li>
                      <p>Логистика и доставка</p>
                    </li>
                    <li>
                      <p>Управление складом</p>
                    </li>
                  </ul>
                  <h6>
                    Автоматизированная система учета данных и генерации
                    документов для производства металических изделий
                  </h6>
                  <p class="case_description">
                    Для увеличения производительности и структуризации их
                    деятельности мы разрабатываем для них систему автоматизации
                    бизнес-процессов.
                  </p>
                </div>
                <div class="left_case_footer">
                  <a href="#">
                    <span>
                      Подробнее
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
                    </span>
                  </a>
                </div>
              </div>
              <div class="right_case">
                <img src="@/assets/img/development_case.webp" alt="case" />
              </div>
            </div>

            <div class="case">
              <div class="left_case">
                <div class="left_case_header">
                  <h4>Kucher Desk</h4>
                  <ul>
                    <li>
                      <p>Сервис</p>
                    </li>
                  </ul>
                  <h6>
                    Коллаборативная платформа для генерации идей и проведения
                    мозговых штурмов с командами
                  </h6>
                  <p class="case_description">
                    Описание того что на изображении
                  </p>
                </div>
                <div class="left_case_footer">
                  <a href="#">
                    <span>
                      Подробнее
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
                    </span>
                  </a>
                </div>
              </div>
              <div class="right_case">
                <img src="@/assets/img/development_case.webp" alt="case" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>

  <TheFooter />
</template>
