<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheSpotsFore from '@/components/TheSpotsFore.vue';
import PageTitle from '@/components/PageTitle.vue';
import PageSteps from '@/components/PageSteps.vue';
</script>

<script>
export default {
    components: {
        PageSteps,
    },
    data() {
        return {
            pageData: {
                arcHeaders: [
                    {
                        id: 1,
                        arcclass: 'arc_2',
                        iconarc: '<svg xmlns="http://www.w3.org/2000/svg" width="637" height="304" viewBox="0 0 637 304" fill="none"><path d="M625 267.141C599.208 235.837 570.573 206.54 540.906 178.753C502.824 143.084 462.471 114.881 416.649 89.4439C349.432 52.1305 280.083 17.3862 201.551 12.7181C158.424 10.1546 104.017 13.2578 69.2915 42.0273C44.8249 62.2976 24.03 96.6802 18.145 127.653C8.04539 180.807 13.4383 237.966 13.4383 292" stroke="url(#paint0_linear_2253_14485)" stroke-width="24" stroke-linecap="round"/><defs><linearGradient id="paint0_linear_2253_14485" x1="46.5" y1="257" x2="584.499" y2="260.113" gradientUnits="userSpaceOnUse"><stop stop-color="#F5D6FC"/><stop offset="1" stop-color="#E5BA39" stop-opacity="0"/></linearGradient></defs></svg>'
                    }
                ],
                stepsDev: [
                    {
                        id: 1,
                        number: 'Шаг 1',
                        title: 'Анализ',
                        iconstep: '<svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none"><g clip-path="url(#clip0_2440_6483)"><path d="M31.4629 66.2119L0.853125 35.5365C-0.263542 34.4198 -0.263542 32.5806 0.853125 31.4639L31.4629 0.854102C32.5796 -0.262565 34.4188 -0.262565 35.5355 0.854102L66.1453 31.4639C67.2619 32.5806 67.2619 34.4198 66.1453 35.5365L35.5355 66.1463C34.4188 67.3286 32.5796 67.3286 31.4629 66.2119Z" fill="#DF40FF"/></g><defs><clipPath id="clip0_2440_6483"><rect width="67" height="67" fill="white"/></clipPath></defs></svg>',
                        description: 'Сбор и анализ данных, определение ключевых метрик, идентификацию потребностей пользователей для создания продукта'
                    },
                    {
                        id: 2,
                        number: 'Шаг 2',
                        title: 'Маркетинг',
                        iconstep: '<svg xmlns="http://www.w3.org/2000/svg" width="68" height="67" viewBox="0 0 68 67" fill="none"><g clip-path="url(#clip0_2497_5853)"><path d="M32.1781 4.9267L0.583045 59.5777C-0.139504 60.8914 0.780104 62.4679 2.29089 62.4679H65.4154C66.9262 62.4679 67.8458 60.8257 67.1232 59.5777L35.5281 4.9267C34.7399 3.61297 32.9007 3.61297 32.1781 4.9267Z" fill="#E5BA39"/></g><defs><clipPath id="clip0_2497_5853"><rect width="67" height="67" fill="white" transform="translate(0.333984)"/></clipPath></defs></svg>',
                        description: 'Исследование рынка, создание уникального предложения, разработка стратегии и прототипов, тестирование, запуск, сбор данных для адаптации'
                    },
                    {
                        id: 3,
                        number: 'Шаг 3',
                        title: 'Дизайн',
                        iconstep: '<svg xmlns="http://www.w3.org/2000/svg" width="68" height="67" viewBox="0 0 68 67" fill="none"><g clip-path="url(#clip0_2440_6351)"><path d="M33.832 66.9995C52.3336 66.9995 67.332 52.001 67.332 33.4995C67.332 14.998 52.3336 -0.000488281 33.832 -0.000488281C15.3305 -0.000488281 0.332031 14.998 0.332031 33.4995C0.332031 52.001 15.3305 66.9995 33.832 66.9995Z" fill="#3377FF"/></g><defs><clipPath id="clip0_2440_6351"><rect width="67" height="67" fill="white" transform="translate(0.333008)"/></clipPath></defs></svg>',
                        description: 'Cоздание интуитивного интерфейса и уникального пользовательского опыта для максимальной удовлетворенности и привлекательности пользователей'
                    },
                    {
                        id: 4,
                        number: 'Шаг 4',
                        title: 'Разработка',
                        iconstep: '<svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none"><g clip-path="url(#clip0_2440_612)"><path d="M35.4962 2.62794L15.856 64.6358C15.4619 65.8181 16.3815 67.0662 17.6295 67.0662H28.4021C30.0442 67.0662 31.4893 66.0152 31.9491 64.4387L51.5893 2.43088C51.9178 1.24853 51.0638 0.000488281 49.8158 0.000488281H39.0432C37.4011 0.000488281 35.956 1.05147 35.4962 2.62794Z" fill="#FF404E"/></g><defs><clipPath id="clip0_2440_612"><rect width="67" height="67" fill="white"/></clipPath></defs></svg>',
                        description: 'Создание базового функционала, обеспечивающего его быстрый запуск и тестирование на первых пользователях'
                    }
                ],
                arcFooters: [
                    {
                        id: 1,
                        arcclass: 'arc_3',
                        iconarc: '<svg xmlns="http://www.w3.org/2000/svg" width="636" height="304" viewBox="0 0 636 304" fill="none"><path d="M12 36.8592C37.7503 68.1627 66.3379 97.4602 95.9564 125.247C133.976 160.916 174.264 189.119 220.012 214.556C287.118 251.869 356.354 286.614 434.758 291.282C477.815 293.845 532.133 290.742 566.802 261.973C591.229 241.702 611.99 207.32 617.865 176.347C627.948 123.193 622.564 66.0343 622.564 12.0001" stroke="url(#paint0_linear_2253_14484)" stroke-width="24" stroke-linecap="round"/><defs><linearGradient id="paint0_linear_2253_14484" x1="306" y1="262.5" x2="632.46" y2="89.9242" gradientUnits="userSpaceOnUse"><stop stop-color="#D3E1FC"/><stop offset="1" stop-color="#FF404E" stop-opacity="0"/></linearGradient></defs></svg>'
                    }

                ],
            },
        };
    },
};
</script>

<template>
    <TheHeader />

    <main class="mvp">

        <PageTitle pageTitle="Создание MVP"
            pageDescription="Быстро и эффективно выведем ваш проект на рынок с минимальными затратами и максимальной отдачей" />

        <TheSpotsFore pageSlogan="Быстрый старт, большие результаты" />

        <div class="wrapper">
            <div class="content product_dev">
                <h4 class="product_h4">От идеи к совершенству</h4>
                <PageSteps :dataSteps="pageData" />
                <p class="p_description">
                    Мы оперативно разрабатываем MVP вашего проекта, затем систематически совершенствуем
                    его и внедряем новые функции для постоянного развития.
                </p>
            </div>

            <div class="content">
                <div class="service_description">
                    <h2>Партнерство на долгосрочной основе</h2>
                    <p>
                        Сопровождатем вас на пути постоянного развития продукта, обеспечивая его успешное внедрение и
                        эволюцию в соответствии с вашими бизнес-целями
                    </p>
                </div>
            </div>
            
        </div>

    </main>

    <TheFooter /></template>