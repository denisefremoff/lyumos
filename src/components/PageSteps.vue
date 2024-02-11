<script>
export default {
  props: {
    arcHeaders: {
      type: Object,
      required: true,
    },
    stepsDev: {
      type: Object,
      required: true,
    },
    arcFooters: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="arc_header">
    <div
      :class="arcHeader.attributes.arcclass"
      v-for="arcHeader in arcHeaders"
      :key="arcHeader.attributes.id"
    >
      <div v-html="arcHeader.attributes.iconarc"></div>
    </div>
  </div>
  <div class="six_steps">
    <div class="step" v-for="step in stepsDev" :key="step.attributes.id">
      <div class="step_header">
        <h6>{{ step.attributes.number }}</h6>
        <h3>{{ step.attributes.title }}</h3>
        <div
          v-if="step.attributes.iconstep"
          v-html="step.attributes.iconstep"
        ></div>
      </div>
      <div class="step_footer">
        <p>{{ step.attributes.description }}</p>
      </div>
    </div>
  </div>
  <div class="arc_footer">
    <div
      :class="arcFooter.attributes.arcclass"
      v-for="arcFooter in arcFooters"
      :key="arcFooter.attributes.id"
    >
      <div v-html="arcFooter.attributes.iconarc"></div>
    </div>
  </div>
</template>
