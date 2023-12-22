<script setup>
defineProps(['pageTitle', 'pageDescription', 'pageIcon']);
</script>

<template>
    <div class="wrapper-pl">
        <div class="product_dev header_product_dev">
            <div class="left_product_dev">
                <h1 class="title_product_dev">{{ pageTitle }}</h1>
                <h4 class="description_product_dev">{{ pageDescription }}</h4>
            </div>
            <div class="right_product_dev" v-html="pageIcon"></div>
        </div>
    </div>
</template>