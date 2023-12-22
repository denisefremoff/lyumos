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
                        iconarc: '<svg xmlns="http://www.w3.org/2000/svg" width="637" height="304" viewBox="0 0 637 304" fill="none"><path d="M625 267.141C599.208 235.837 570.573 206.54 540.906 178.753C502.824 143.084 462.471 114.881 416.649 89.4439C349.432 52.1305 280.083 17.3862 201.551 12.7181C158.424 10.1546 104.017 13.2578 69.2915 42.0273C44.8249 62.2976 24.03 96.6802 18.145 127.653C8.04539 180.807 13.4383 237.966 13.4383 292" stroke="url(#paint0_linear_2294_8971)" stroke-width="24" stroke-linecap="round"/><defs><linearGradient id="paint0_linear_2294_8971" x1="46.5" y1="257" x2="584.499" y2="260.113" gradientUnits="userSpaceOnUse"><stop stop-color="#F5D6FC"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>'
                    }
                ],
                stepsDev: [
                    {
                        id: 1,
                        number: 'Шаг 1',
                        title: 'Анализ',
                        iconstep: '<svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none"><g clip-path="url(#clip0_2440_6483)"><path d="M31.4629 66.2119L0.853125 35.5365C-0.263542 34.4198 -0.263542 32.5806 0.853125 31.4639L31.4629 0.854102C32.5796 -0.262565 34.4188 -0.262565 35.5355 0.854102L66.1453 31.4639C67.2619 32.5806 67.2619 34.4198 66.1453 35.5365L35.5355 66.1463C34.4188 67.3286 32.5796 67.3286 31.4629 66.2119Z" fill="#DF40FF"/></g><defs><clipPath id="clip0_2440_6483"><rect width="67" height="67" fill="white"/></clipPath></defs></svg>',
                        description: 'Определим цели внедрения ИИ, включая решение бизнес-задач и повышение эффективности, обеспечим доступ, проведем анализ и подготовку данных для обучения'
                    },
                    {
                        id: 2,
                        number: 'Шаг 2',
                        title: 'Выбор модели',
                        description: 'Выбор методов и моделей искусственного интеллекта в соответствии с поставленными задачами, обучение моделей на подготовленных данных'
                    },
                    {
                        id: 3,
                        number: 'Шаг 3',
                        title: 'Дизайн',
                        iconstep: '<svg xmlns="http://www.w3.org/2000/svg" width="68" height="67" viewBox="0 0 68 67" fill="none"><g clip-path="url(#clip0_2440_6351)"><path d="M33.832 66.9995C52.3336 66.9995 67.332 52.001 67.332 33.4995C67.332 14.998 52.3336 -0.000488281 33.832 -0.000488281C15.3305 -0.000488281 0.332031 14.998 0.332031 33.4995C0.332031 52.001 15.3305 66.9995 33.832 66.9995Z" fill="#3377FF"/></g><defs><clipPath id="clip0_2440_6351"><rect width="67" height="67" fill="white" transform="translate(0.333008)"/></clipPath></defs></svg>',
                        description: 'Определение архитектуры и концепции внедрения искусственного интеллекта в бизнес-процессы, разработка плана и дизайна системы'
                    },
                    {
                        id: 4,
                        number: 'Шаг 4',
                        title: 'Разработка',
                        iconstep: '<svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none"><g clip-path="url(#clip0_2440_612)"><path d="M35.4962 2.62794L15.856 64.6358C15.4619 65.8181 16.3815 67.0662 17.6295 67.0662H28.4021C30.0442 67.0662 31.4893 66.0152 31.9491 64.4387L51.5893 2.43088C51.9178 1.24853 51.0638 0.000488281 49.8158 0.000488281H39.0432C37.4011 0.000488281 35.956 1.05147 35.4962 2.62794Z" fill="#FF404E"/></g><defs><clipPath id="clip0_2440_612"><rect width="67" height="67" fill="white"/></clipPath></defs></svg>',
                        description: 'Интеграция разработанных моделей в бизнес-процессы, создание программных решений и платформ для внедрения и использования искусственного интеллекта'
                    }
                ],
                arcFooters: [
                    {
                        id: 1,
                        arcclass: 'arc_3',
                        iconarc: '<svg xmlns="http://www.w3.org/2000/svg" width="636" height="304" viewBox="0 0 636 304" fill="none"><path d="M12 36.8592C37.7503 68.1627 66.3379 97.4602 95.9564 125.247C133.976 160.916 174.264 189.119 220.012 214.556C287.118 251.869 356.354 286.614 434.758 291.282C477.815 293.845 532.133 290.742 566.802 261.973C591.229 241.702 611.99 207.32 617.865 176.347C627.948 123.193 622.564 66.0343 622.564 12.0001" stroke="url(#paint0_linear_2294_8970)" stroke-width="24" stroke-linecap="round"/><defs><linearGradient id="paint0_linear_2294_8970" x1="306" y1="262.5" x2="632.46" y2="89.9242" gradientUnits="userSpaceOnUse"><stop stop-color="#D3E1FC"/><stop offset="1" stop-color="#FF404E" stop-opacity="0"/></linearGradient></defs></svg>'
                    }

                ],
            },
        };
    },
};
</script>

<template>
    <TheHeader />

    <main class="ii">

        <PageTitle pageTitle="Внедрение ИИ"
            pageDescription="Повышение эффективности через автоматизацию задач, анализ данных, персонализация"
            pageIcon='<svg xmlns="http://www.w3.org/2000/svg" width="476" height="640" viewBox="0 0 476 640" fill="none"><path d="M111.379 439.705L7.06922 335.395C-2.35641 325.969 -2.35641 310.26 7.06922 300.206L296.75 9.8969C309.946 -3.29897 330.682 -3.29897 343.25 9.8969L632.931 299.578C642.356 309.003 642.356 324.713 632.931 334.767L529.249 439.705C521.708 447.246 508.512 445.989 503.485 436.563L341.365 156.308C331.939 139.97 308.061 139.97 298.635 156.308L137.143 435.935C131.487 445.361 118.92 447.246 111.379 439.705ZM158.508 580.461L183.643 605.596C189.926 611.88 198.095 615.022 206.892 615.022H433.107C441.905 615.022 450.074 611.252 456.357 605.596L481.492 580.461C492.175 569.779 494.06 553.441 486.519 540.245L334.453 276.328C328.169 265.017 312.459 265.017 305.547 276.328L153.481 540.874C145.94 553.441 147.825 569.779 158.508 580.461Z" fill="#E0E0E0"/></svg>' />

        <TheSpotsFore pageSlogan="Мощный двигатель для вашего прогресса" />

        <div class="wrapper">
            <div class="content product_dev">
                <h4 class="product_h4">Интеллектуальное преобразование</h4>
                <PageSteps :dataSteps="pageData" />
            </div>

            <div class="content">
                <div class="service_description">
                    <h2>Мониторинг и поддержка</h2>
                    <p>
                        Регулярный мониторинг производительности искусственного интеллекта, а также оперативная поддержка,
                        обеспечивают стабильную и эффективную работу системы
                    </p>
                </div>
            </div>

        </div>

    </main>

    <TheFooter />
</template>
