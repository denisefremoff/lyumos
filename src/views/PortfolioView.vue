<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheSpots from '@/components/TheSpots.vue';

import PorUl from '@/components/PorUl.vue';
import PorPortfollo from '@/components/PorPortfollo.vue';
</script>

<template>
    <TheHeader />
    <main>
        <TheSpots />
        <div class="wrapper">
            <div class="content portfolio">
                <h1 class="title_portfolio">Портфолио</h1>
                <div class="nav_category">
                    <ul>
                        <PorUl />
                    </ul>
                </div>
                <div class="portfolio_box">
                    <PorPortfollo />
                </div>
            </div>
        </div>
    </main>
    <TheFooter />
</template>