<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <brick-demo />
  <brick-card
    img-src="5ff529550925a7bd05400304.png"
    summary="数据中台之数据汇聚整合，消除数据孤岛"
  />
  <br />
  <brick-card
    img-src="5ff529550925a7bd05400304.png"
    summary="数据中台之数据汇聚整合，消除数据孤岛"
  >
    <template v-slot:footer>
      <p class="one">高阶 · 3693人报名</p>
      <p class="two clearfix">
        <span class="l">免费</span>
        <span class="star r"
          ><i class="icon imv2-star-o"></i><i class="txt">收藏</i></span
        >
      </p>
    </template>
  </brick-card>
  <br />
  <brick-card img-src="5ff529550925a7bd05400304.png" :width="370" :imgHeight="90">
    数据中台之数据汇聚整合，消除数据孤岛
    <template v-slot:footer>
      <p class="one">高阶 · 3693人报名</p>
      <p class="two clearfix">
        <span class="l">免费</span>
        <span class="star r"
          ><i class="icon imv2-star-o"></i><i class="txt">收藏</i></span
        >
      </p>
    </template>
  </brick-card>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.one,
.two {
  font-size: 12px;
  color: #9199a1;
  line-height: 18px;
  padding: 0 8px;
  margin-bottom: 8px;
}
</style>
