<script setup>
import { RouterLink } from "vue-router";
import { DataCase } from "@/stores/data-case.js";
import { onMounted } from "vue";

const dataCase = DataCase();
onMounted(() => {
  dataCase.devCases == 0 ? dataCase.getDevCase() : "";
});
</script>

<template>
  <div
    class="case"
    v-for="devCase in dataCase.devCases"
    :key="devCase.attributes.id"
  >
    <div class="left_case">
      <div class="left_case_header">
        <h4>{{ devCase.attributes.h4 }}</h4>
        <!-- <ul>
          <li v-for="(lip, index) in devCase.li" :key="index">
            <p>{{ lip }}</p>
          </li>
        </ul> -->
        <p>{{ devCase.attributes.li }}</p>
        <h6>{{ devCase.attributes.h6 }}</h6>
        <p class="case_description">{{ devCase.attributes.p }}</p>
      </div>
      <div class="left_case_footer">
        <RouterLink :to="`/portfolio/${devCase.attributes.url}`">
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
        </RouterLink>
      </div>
    </div>
    <div class="right_case">
      <img :src="devCase.attributes.image" alt="case" />
    </div>
  </div>
</template>
