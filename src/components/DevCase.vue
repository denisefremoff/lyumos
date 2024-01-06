<script setup>
//import { RouterLink } from 'vue-router'
import { DataCase } from "@/stores/data-case.js";
const dataCase = DataCase();
</script>

<template>
  <div class="case" v-for="devCase in dataCase.devCases" :key="devCase.id">
    <div class="left_case">
      <div class="left_case_header">
        <h4>{{ devCase.h4 }}</h4>
        <ul>
          <li v-for="(lip, index) in devCase.li" :key="index">
            <p>{{ lip }}</p>
          </li>
        </ul>
        <h6>{{ devCase.h6 }}</h6>
        <p class="case_description">{{ devCase.p }}</p>
      </div>
      <div class="left_case_footer">
        <a href="#"
          ><!-- <RouterLink :to="`/services/development${devCase.url}`"> -->
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
          </span> </a
        ><!-- </RouterLink> -->
      </div>
    </div>
    <div class="right_case">
      <img :src="devCase.img" alt="case" />
    </div>
  </div>
</template>
