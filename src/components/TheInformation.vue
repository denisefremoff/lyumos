<template>
  <div class="type_expertise">
    <div class="type_expertise_header">
      <h5>{{ expertise.cart4.header }}</h5>
      <div class="type_expertise_description">
        <div class="description_1">
          <h6>{{ expertise.getCart4.header }}</h6>
          <p>{{ expertise.getCart4.body }}</p>
        </div>
      </div>
    </div>

    <div class="type_expertise_footer">
      <ul>
        <li
          v-for="(switcher, index) in expertise.cart4.switchers"
          :key="switcher.id"
          @mouseenter="expertise.changeCart4(index)"
        >
          <p>{{ switcher.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { DataExpertise } from "@/stores/data-expertise.js";
const expertise = DataExpertise();
</script>
<style scoped></style>
