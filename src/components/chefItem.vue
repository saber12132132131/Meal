<template>
  <item :leftFlex="3.5" class="chefItem ">
    <div class="left cover " slot="left">
      <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2273297271,1530917507&fm=26&gp=0.jpg" class="chefImg" alt="" srcset="" />
      <div class="star">sdf</div>
      <div class="score font14 ">4.8</div>
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
<style>
.chefItem {
  height: 294px;
  width: 528px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 2px 6px 0px rgba(155, 155, 155, 40);
}
.chefItem .left {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
}
.chefItem .left .chefImg {
  height: 120px;
  width: 120px;
  background-color: yellow;
}
</style>