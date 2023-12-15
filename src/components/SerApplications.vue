<script setup>
import { RouterLink } from 'vue-router'
import IconCard from '@/components/icons/IconCard.vue';
import { DataServices } from '@/stores/data-services.js';

const dataServices = DataServices();
</script>

<template>
    <RouterLink :to="`/services/${ applicationSer.url }`" class="border_right_applications" v-for="applicationSer in dataServices.applicationSers" :key="applicationSer.id">
        <div class="box_right_applications">
            <div class="header_right_applications">
                <h6>{{ applicationSer.title }}</h6>
                <div class="svg_box">
                    <IconCard />
                </div>
            </div>
            <div class="footer_right_applications">
                <p>{{ applicationSer.description }}</p>
                <span>от {{ applicationSer.price }} ₽</span>
            </div>
        </div>
    </RouterLink>
</template>