<template>
  <div class="brick-card" :style="width ? { width: width + 'px' } : {}">
    <div
      class="brick-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="brick-card-summary">
      {{ summary }}
    </div>
    <div v-else class="brick-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "brick-card",
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

<style></style>
