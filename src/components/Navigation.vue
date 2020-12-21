<template>
  <div class="navBar">
      <navItem path="/home" >
        <span class="iconfont icon-tuancanxuanzhong" slot="image"></span>
        <div slot="des">团餐</div>
      </navItem>
    <navItem path="/Welfare" >
      <span class="iconfont icon-icon" slot="image"></span>
      <div slot="des">福利餐</div>
    </navItem>
    <navItem path="/order">
      <span class="iconfont icon-fuli" slot="image"></span>
      <div slot="des">订单</div>
    </navItem>
    <navItem path="/profile">
      <span class="iconfont icon-wodedangxuan" slot="image"></span>
      <div slot="des">我的</div>
    </navItem>
  </div>
</template>

<script>
import navItem from "./navItem";
export default {
  components: {
    navItem,
  },
  props: {},
};
</script>
 
<style lang="postcss" scoped>
.navBar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 750px;
  height: 110px;
  line-height: 40px;
  text-align: center;
  border: 2px solid rgba(234, 231, 253, 100);
  display: flex;
  justify-content: space-around;
  background-color: white;
}
.image {
  height: 100%;
  width: 100%;
}
/* .navItem {

} */
</style>