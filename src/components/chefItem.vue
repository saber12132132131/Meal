<template>
  <item :leftFlex="2.3" class="chefItem cover">
    <div class="left cover" slot="left">
      <img src="" class="chefImg" alt="" srcset="" />
    </div>
    <div class="right cover" slot="right">dsda</div>
  </item>
</template>

<script>
import item from "../components/Item";
export default {
  components: {
    item,
  },
};
</script>

<style lang="postcss" scoped>
.chefItem {
  height: 294px;
  width: 100%;
}
.chefItem .left {
  height: 100%;
}
.chefItem .left .chefImg {
  height: 120px;
  width: 120px;
  background-color: yellow;
}
</style>