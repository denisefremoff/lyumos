<script setup>
import IconCard from '@/components/icons/IconCard.vue';
import { DataServices } from '@/stores/data-services.js';

const dataServices = DataServices();
</script>

<template>
    <a href="#" class="analytic_border" v-for="analyticsDev in dataServices.analyticsDevs" :key="analyticsDev.id">
        <div class="analytic_box">
            <div class="analytic_header">
                <h6>{{ analyticsDev.title }}</h6>
                <div class="svg_box">
                    <IconCard />
                </div>
            </div>
            <div class="analytic_footer">
                <p>{{ analyticsDev.description }}</p>
                <span>от {{ analyticsDev.price }} ₽</span>
            </div>
        </div>
    </a>
</template>