<script setup>
import { DataPremiumPipe } from "@/stores/data-premium-pipe.js";
const detaAboutProject = DataPremiumPipe();
</script>

<template>
    <template v-for="aboutProject in detaAboutProject.aboutProjects" :key="aboutProject.id">
        <div class="about_project">
            <h2>{{ aboutProject.h2 }}</h2>
            <p>{{ aboutProject.p }}</p>
        </div>
    </template>
</template>
