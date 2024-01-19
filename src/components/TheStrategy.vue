<template>
  <div class="type_expertise">
    <div class="type_expertise_header">
      <h5>{{ expertise.cart1.header }}</h5>
      <div class="type_expertise_description">
        <div class="description_1">
          <h6>{{ expertise.getCart1.header }}</h6>
          <p>{{ expertise.getCart1.body }}</p>
        </div>
      </div>
    </div>
    <div class="type_expertise_footer">
      <ul v-if="width > 1023">
        <li
          v-for="(switcher, index) in expertise.cart1.switchers"
          :key="switcher.id"
          @mouseenter="expertise.changeCart1(index)"
          :class="{ expertise_active: switcher.id === expertise.pageCart1 + 1 }"
        >
          <p>{{ switcher.body }}</p>
        </li>
      </ul>
      <ul v-else>
        <li
          v-for="(switcher, index) in expertise.cart1.switchers"
          :key="switcher.id"
          @click="expertise.changeCart1(index)"
          :class="{ expertise_active: switcher.id === expertise.pageCart1 + 1 }"
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
<script>
export default {
  data() {
    return {
      width: 0,
    };
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
};
</script>
