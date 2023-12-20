<template>
  <div class="expertise">
    <div
      class="type_expertise"
      v-for="(expertData, index) in expertise.expertiseData"
      :key="expertData.id"
    >
      <div class="type_expertise_header">
        <h5>{{ expertData.header }}</h5>
        <div class="type_expertise_description">
          <div
            v-for="exDa in expertData.body"
            :key="exDa.id"
            :class="'description_' + exDa.id"
          >
            <h6>{{ exDa.header }}</h6>
            <p>{{ exDa.body }}</p>
            <!-- <h6>{{ expertise.cart1.header }}</h6>
            <p>{{ expertise.cart1.body }}</p> -->
          </div>
        </div>
      </div>
      <div class="type_expertise_footer">
        <ul>
          <!-- @click="console.log(switcher, switcher.id, index)" -->
          <li
            v-for="switcher in expertData.switchers"
            :key="switcher.id"
            @click="expertise.change(index, switcher.id)"
          >
            <p>{{ switcher.body }}</p>
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
