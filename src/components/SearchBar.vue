<template>
  <div v-if="mode == 'default'" class="searchBar">
    <div class="left">
      <span style="color: white" class="iconfont icon-dingwei"></span>
      <span>嘉宾花社区 </span>
      <span style="color: white" class="iconfont icon-arrow-right"></span>
    </div>
    <span style="color: white" class="right iconfont icon-Search"></span>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style>
.searchBar {
  width: 750px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}
.searchBar .left{
    margin-left: 12px;
     display: flex;

  align-items: center;
}

.searchBar .left span:nth-child(2) {
       margin-left: 20px;
  font-size: 32px;
  color: rgba(255, 255, 255, 100);
  font-family: PingFangSC-bold;
}
.searchBar .right{
        margin-right: 30px;
}
</style>