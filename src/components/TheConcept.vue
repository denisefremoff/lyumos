<script setup>
import { DataPremiumPipe } from "@/stores/data-premium-pipe.js";
const detaConcept = DataPremiumPipe();
</script>

<template>
    <template v-for="concept in detaConcept.concepts" :key="concept.id">
        <section class="concept">
            <h2>{{ concept.h2 }}</h2>
            <p>{{ concept.p }}</p>
            <img :src="concept.img" alt="foto-concept">
        </section>
    </template>
</template>