<script setup>
import TheFooter from '@/components/TheFooter.vue';
import TheAboutProject from "@/components/TheAboutProject.vue";
import TheConceptVue from '../components/TheConcept.vue';
</script>

<template>
    <main>
        <div class="swap_icons">
            <img src="@/assets/img/swap-1.svg" alt="swap-1">
            <img src="@/assets/img/swap-2.svg" alt="swap-2">
            <img src="@/assets/img/swap-3.svg" alt="swap-3">
            <img src="@/assets/img/swap-4.svg" alt="swap-4">
            <img src="@/assets/img/swap-5.svg" alt="swap-5">
        </div>

        <div class="wrapper">
            <div class="content premium_pipe">

                <h1>Система автоматизации для Premium Pipe</h1>
                <ul>
                    <li>Разработка приложений для бизнеса </li>
                    <li>Система автоматизации</li>
                </ul>

                <TheAboutProject />

                <TheConceptVue />

                <section class="we_used">
                    <h2>В работе мы использовали</h2>
                    <div class="technology_logos">
                        <img src="@/assets/img/Figma.svg" alt="Figma">
                        <img src="@/assets/img/Laravel.svg" alt="Laravel">
                        <img src="@/assets/img/Vue.svg" alt="Vue">
                        <img src="@/assets/img/Html.svg" alt="Html">
                        <img src="@/assets/img/Css.svg" alt="Css">
                    </div>
                </section>

            </div>
            
        </div>

        <section class="design_system">
            <h2>Дизайн - система</h2>
            <p>Единая база компонентов и правила их использования значительно сократили время разработки.</p>
            <img src="@/assets/img/foto-concept-2.webp" alt="foto-concept-2">
        </section>

    </main>
    <TheFooter />
</template>