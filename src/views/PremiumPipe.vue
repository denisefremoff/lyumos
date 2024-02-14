<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheAboutProject from "@/components/TheAboutProject.vue";
import TheConceptVue from "../components/TheConcept.vue";
</script>

<template>
  <main>
    <div class="swap_icons">
      <img
        src="https://strapi.lymos.ru/uploads/swap_1_c851ec8d47.svg"
        alt="swap-1"
      />
      <img
        src="https://strapi.lymos.ru/uploads/swap_2_ec70e6b6f1.svg"
        alt="swap-2"
      />
      <img
        src="https://strapi.lymos.ru/uploads/swap_3_bfaf244211.svg"
        alt="swap-3"
      />
      <img
        src="https://strapi.lymos.ru/uploads/swap_4_8850135bbc.svg"
        alt="swap-4"
      />
      <img
        src="https://strapi.lymos.ru/uploads/swap_5_e340a86a36.svg"
        alt="swap-5"
      />
    </div>

    <div class="wrapper">
      <div class="content premium_pipe">
        <h1>Система автоматизации для Premium Pipe</h1>
        <ul>
          <li>Разработка приложений для бизнеса</li>
          <li>Система автоматизации</li>
        </ul>

        <TheAboutProject />

        <TheConceptVue />

        <section class="we_used">
          <h2>В работе мы использовали</h2>
          <div class="technology_logos">
            <img
              src="https://strapi.lymos.ru/uploads/Figma_baf0409f97.svg"
              alt="Figma"
            />
            <img
              src="https://strapi.lymos.ru/uploads/Laravel_71a867d6ac.svg"
              alt="Laravel"
            />
            <img
              src="https://strapi.lymos.ru/uploads/Vue_08349ec90f.svg"
              alt="Vue"
            />
            <img
              src="https://strapi.lymos.ru/uploads/Html_766eb02e10.svg"
              alt="Html"
            />
            <img
              src="https://strapi.lymos.ru/uploads/Css_f3e0f66b9c.svg"
              alt="Css"
            />
          </div>
        </section>
      </div>
    </div>

    <section class="design_system">
      <h2>Дизайн - система</h2>
      <p>
        Единая база компонентов и правила их использования значительно сократили
        время разработки.
      </p>

      <img
        src="https://strapi.lymos.ru/uploads/foto_concept_2_e2deadfbc6.webp"
        alt="foto-concept-2"
      />
    </section>
  </main>
  <TheFooter />
</template>
