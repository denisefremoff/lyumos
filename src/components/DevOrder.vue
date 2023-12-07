<script setup>
import IconCard from '@/components/icons/IconCard.vue';
import { DataServices } from '@/stores/data-services.js';

const dataServices = DataServices();
</script>

<template>
    <a href="#" class="working_border" v-for="orderDev in dataServices.orderDevs" :key="orderDev.id">
        <div class="working_box">
            <div class="working_header">
                <h6>{{ orderDev.title }}</h6>
                <div class="svg_box">
                    <IconCard />
                </div>
            </div>
            <div class="working_footer">
                <p>{{ orderDev.description }}</p>
                <span>от {{ orderDev.price }} ₽</span>
            </div>
        </div>
    </a>
</template>