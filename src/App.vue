<script setup>
import { RouterView } from "vue-router";
import TheForm from "@/components/TheForm.vue";
import { FormControl } from "@/stores/form-control.js";
const form = FormControl();
</script>

<template>
  <teleport to="body"> <TheForm v-if="form.getFormState" /></teleport>
  <RouterView />
</template>

<style scoped></style>
