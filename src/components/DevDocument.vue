<script setup>
import IconCard from '@/components/icons/IconCard.vue';
import { DataServices } from '@/stores/data-services.js';

const dataServices = DataServices();
</script>

<template>
    <a href="#" class="documentation_border" v-for="documentDev in dataServices.documentDevs" :key="documentDev.id">
        <div class="documentation_box">
            <div class="documentation_header">
                <h6>{{ documentDev.title }}</h6>
                <div class="svg_box">
                    <IconCard />
                </div>
            </div>
            <div class="documentation_footer">
                <p>{{ documentDev.description }}</p>
                <span>от {{ documentDev.price }} ₽</span>
            </div>
        </div>
    </a>
</template>