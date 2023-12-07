<script setup>
import IconCard from '@/components/icons/IconCard.vue';
import { DataServices } from '@/stores/data-services.js';

const dataServices = DataServices();
</script>

<template>
    <a href="#" class="ui_ux_border" v-for="uiUxDev in dataServices.uiUxDevs" :key="uiUxDev.id">
        <div class="ui_ux_box">
            <div class="ui_ux_header">
                <h6>{{ uiUxDev.title }}</h6>
                <div class="svg_box">
                    <IconCard />
                </div>
            </div>
            <div class="ui_ux_footer">
                <p>{{ uiUxDev.description }}</p>
                <span>от {{ uiUxDev.price }} ₽</span>
            </div>
        </div>
    </a>
</template>