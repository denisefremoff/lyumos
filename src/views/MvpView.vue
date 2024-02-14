<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheSpotsFore from "@/components/TheSpotsFore.vue";
import PageTitle from "@/components/PageTitle.vue";
import PageSteps from "@/components/PageSteps.vue";
import { DataMvp } from "@/stores/data-mvp";
import { onMounted } from "vue";
const dataMvp = DataMvp();
onMounted(() => {
  dataMvp.getMvpData();
});
</script>
<template>
  <main class="mvp">
    <PageTitle
      pageTitle="Создание MVP"
      pageDescription="Быстро и эффективно выведем ваш проект на рынок с минимальными затратами и максимальной отдачей"
    />

    <TheSpotsFore pageSlogan="Быстрый старт, большие результаты" />

    <div class="wrapper">
      <div class="content product_dev">
        <h4 class="product_h4">От идеи к совершенству</h4>
        <PageSteps
          :arcHeaders="dataMvp.arcHeaders"
          :stepsDev="dataMvp.stepsDev"
          :arcFooters="dataMvp.arcFooters"
        />
        <p class="p_description">
          Мы оперативно разрабатываем MVP вашего проекта, затем систематически
          совершенствуем его и внедряем новые функции для постоянного развития.
        </p>
      </div>

      <div class="content">
        <div class="service_description">
          <h2>Партнерство на долгосрочной основе</h2>
          <p>
            Сопровождатем вас на пути постоянного развития продукта, обеспечивая
            его успешное внедрение и эволюцию в соответствии с вашими
            бизнес-целями
          </p>
        </div>
      </div>
    </div>
  </main>
  <TheFooter />
</template>
