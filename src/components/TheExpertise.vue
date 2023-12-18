<template>
  <div class="expertise">
    <div class="type_expertise">
      <div class="type_expertise_header">
        <h5>{{ expertise.cart1.header }}</h5>
        <div class="type_expertise_description">
          <div v-for="(cart, index) in expertise.cart1.body" :key="cart.id">
            <div :class="'description_' + cart.id" v-if="cart.id === 2">
              <h6>{{ cart.header }}</h6>
              <p>{{ cart.body }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="type_expertise_footer">
        <!-- class="expertise_active" -->
        <ul>
          <li @click="expertise.change(1)">
            <p>DSS</p>
          </li>
          <li @click="expertise.change(2)">
            <p>EIS</p>
          </li>
          <li @click="expertise.change(3)">
            <p>FIM</p>
          </li>
          <li @click="expertise.change(4)">
            <p>CRM</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { DataExpertise } from "@/stores/data-expertise.js";
const expertise = DataExpertise();
</script>
<style scoped></style>
