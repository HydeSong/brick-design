<template>
  <div class="b-card" :style="width ? {width: width + 'px'} : {}" >
    <div class="b-card-img" :style="imgHeight ? {height: imgHeight + 'px'} : {}">
      <img :src="imgSrc" alt="img">
    </div>
    <div v-if="summary" class="b-card-summary">
      {{summary}}
    </div>
    <div v-else class="b-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "b-card",
  props: {
    with: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import url('./card.scss');
</style>
