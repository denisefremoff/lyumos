<script setup>
import { RouterLink } from 'vue-router'
import IconCard from '@/components/icons/IconCard.vue';
import { DataServices } from '@/stores/data-services.js';

const dataServices = DataServices();
</script>

<template>
    <RouterLink :to="`/services/${ turnkeyDev.url }`" class="development_product" v-for="turnkeyDev in dataServices.turnkeyDevs" :key="turnkeyDev.id">
        <div class="product_header">
            <h6>{{ turnkeyDev.title }}</h6>
            <div class="svg_box">
                <IconCard />
            </div>
        </div>
        <div class="product_footer">
            <p>{{ turnkeyDev.description }}</p>
            <span>от {{ turnkeyDev.price }} ₽</span>
        </div>
    </RouterLink>
</template>
