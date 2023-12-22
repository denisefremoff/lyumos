<script>
export default {
    props: {
        dataSteps: {
            type: Object,
            required: true,
        },
    },
};
</script>

<template>
    <div class="arc_header">
        <div :class="arcHeader.arcclass" v-for="arcHeader in dataSteps.arcHeaders" :key="arcHeader.id">
            <div v-html="arcHeader.iconarc"></div>
        </div>
    </div>
    <div class="six_steps">
        <div class="step" v-for="step in dataSteps.stepsDev" :key="step.id">
            <div class="step_header">
                <h6>{{ step.number }}</h6>
                <h3>{{ step.title }}</h3>
                <div v-if="step.iconstep" v-html="step.iconstep"></div>
            </div>
            <div class="step_footer">
                <p>{{ step.description }}</p>
            </div>
        </div>
    </div>
    <div class="arc_footer">
        <div :class="arcFooter.arcclass" v-for="arcFooter in dataSteps.arcFooters" :key="arcFooter.id">
            <div v-html="arcFooter.iconarc"></div>
        </div>
    </div>
</template>