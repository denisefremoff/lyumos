<script setup>
import { RouterLink } from 'vue-router'
import IconCard from '@/components/icons/IconCard.vue';
import { DataServices } from '@/stores/data-services.js';

const dataServices = DataServices();
</script>

<template>
    <section class="applications" v-for="applicationSer in dataServices.applicationSers" :key="applicationSer.id">
        <div class="left_applications">
            <h2>{{ applicationSer.heading }}</h2>
            <p>{{ applicationSer.subtitle }}</p>
            <div v-if="applicationSer.sectionicon" class="icon_left_applications" v-html="applicationSer.sectionicon"></div>
        </div>
        <div class="right_applications" :class="applicationSer.gridclass">
            <RouterLink :to="`/services/${type.url}`" class="border_right_applications" :class="applicationSer.colorclass" v-for="(type, index) in applicationSer.types" :key="index">
                <div class="box_right_applications">
                    <div class="header_right_applications">
                        <h6>{{ type.title }}</h6>
                        <div class="svg_box">
                            <IconCard />
                        </div>
                    </div>
                    <div class="footer_right_applications">
                        <p>{{ type.description }}</p>
                        <span>от {{ type.price }} ₽</span>
                    </div>
                </div>
            </RouterLink>
        </div>
    </section>
</template>
