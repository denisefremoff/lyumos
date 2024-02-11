<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheSpotsFore from "@/components/TheSpotsFore.vue";
import PageTitle from "@/components/PageTitle.vue";
import PageSteps from "@/components/PageSteps.vue";
import { DataIi } from "@/stores/data-li";
import { onMounted } from "vue";
const dataIi = DataIi();
onMounted(() => {
  dataIi.arcHeaders == 0 || dataIi.stepsDev == 0 || dataIi.arcFooters == 0
    ? dataIi.getIiData()
    : "";
});
</script>
<template>
  <main class="ii">
    <PageTitle
      pageTitle="Внедрение ИИ"
      pageDescription="Повышение эффективности через автоматизацию задач, анализ данных, персонализация"
      pageIcon='<svg xmlns="http://www.w3.org/2000/svg" width="476" height="640" viewBox="0 0 476 640" fill="none"><path d="M111.379 439.705L7.06922 335.395C-2.35641 325.969 -2.35641 310.26 7.06922 300.206L296.75 9.8969C309.946 -3.29897 330.682 -3.29897 343.25 9.8969L632.931 299.578C642.356 309.003 642.356 324.713 632.931 334.767L529.249 439.705C521.708 447.246 508.512 445.989 503.485 436.563L341.365 156.308C331.939 139.97 308.061 139.97 298.635 156.308L137.143 435.935C131.487 445.361 118.92 447.246 111.379 439.705ZM158.508 580.461L183.643 605.596C189.926 611.88 198.095 615.022 206.892 615.022H433.107C441.905 615.022 450.074 611.252 456.357 605.596L481.492 580.461C492.175 569.779 494.06 553.441 486.519 540.245L334.453 276.328C328.169 265.017 312.459 265.017 305.547 276.328L153.481 540.874C145.94 553.441 147.825 569.779 158.508 580.461Z" fill="#E0E0E0"/></svg>'
    />

    <TheSpotsFore pageSlogan="Мощный двигатель для вашего прогресса" />

    <div class="wrapper">
      <div class="content product_dev">
        <h4 class="product_h4">Интеллектуальное преобразование</h4>
        <PageSteps
          :arcHeaders="dataIi.arcHeaders"
          :stepsDev="dataIi.stepsDev"
          :arcFooters="dataIi.arcFooters"
        />
      </div>

      <div class="content">
        <div class="service_description">
          <h2>Мониторинг и поддержка</h2>
          <p>
            Регулярный мониторинг производительности искусственного интеллекта,
            а также оперативная поддержка, обеспечивают стабильную и эффективную
            работу системы
          </p>
        </div>
      </div>
    </div>
  </main>

  <TheFooter />
</template>
