<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheSpots from "@/components/TheSpots.vue";

import SerApplications from "@/components/SerApplications.vue";
</script>

<template>
  <main>
    <TheSpots />
    <div class="wrapper">
      <div class="content amenities">
        <h1 class="title_amenities">Услуги</h1>
        <h4 class="description_amenities">
          Специализируемся на создании сложных веб- и мобильных продуктов. Мы
          стоим на принципах дизайна, опирающегося на данные, аналитику и
          удобство использования.
        </h4>
        <SerApplications />
      </div>
    </div>
  </main>
  <TheFooter />
</template>
