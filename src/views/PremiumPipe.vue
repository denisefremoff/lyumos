<script setup>
import TheFooter from '@/components/TheFooter.vue';
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

                <div class="about_project">
                    <h2>О проекте</h2>
                    <p>Premium Pipe – компания, по производству металлических изделий различной сложности для нефтяной,
                        газовой и промышленной отраслей.</p>
                </div>

                <div class="about_project">
                    <h2>Задача</h2>
                    <p>Для увеличения производительности и структуризации их деятельности мы разрабатываем для них
                        систему
                        автоматизации бизнес-процессов.</p>
                </div>

                <section class="concept">
                    <h2>Концепция</h2>
                    <p>Мы создали систему, которая позволяет с самого начала подготовки заказа позволяет отслеживать
                        процессы над каждой заготовкой или материалом, который используется в работе. Так как в
                        документации
                        используются данные которые и так хранятся в системе, мы их используем для подготовки и
                        генерации
                        документации.</p>
                    <img src="@/assets/img/foto-concept.webp" alt="foto-concept">
                </section>

                <section class="concept">
                    <h2>Интерактивный прототип</h2>
                    <p>Помог нам показать клиенту возможности системы и провести тесты на стадии UI дизайна.</p>
                    <img src="@/assets/img/interactive-prototype.webp" alt="interactive-prototype">
                </section>

                <section class="concept">
                    <h2>Понятный интерфейс</h2>
                    <p>Одной из главных задач было обеспечить удобство использования. Мы разработали интуитивно понятный
                        интерфейс, который позволяет пользователям легко найти необходимую информацию.</p>
                    <img src="@/assets/img/intuitive-interface.webp" alt="intuitive-interface">
                </section>

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