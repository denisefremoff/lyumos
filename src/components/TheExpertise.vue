<template>
  <div class="expertise">
    <Strategy />
    <Prodaction />
    <Staff />
    <Information />
  </div>
</template>
<script setup>
import Staff from "@/components/TheStaff.vue";
import Strategy from "@/components/TheStrategy.vue";
import Prodaction from "@/components/TheProdaction.vue";
import Information from "@/components/TheInformation.vue";
// import { DataExpertise } from "@/stores/data-expertise";
// import { onMounted } from "vue";
// const dataExp = DataExpertise();
// onMounted(() => {
//   dataExp.getCart1Data();
// });
</script>
<style scoped></style>
