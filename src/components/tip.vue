<template>
  <div class="tip">
    <span style="color:orange" class="iconfont icon-laba"></span>
      <span class="Enter">Tips：饮食无大小，疫情防控请大家认真对待！</span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tip {
  margin: 0 30px 30px;
  height: 76px;
  width: 690px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(253, 249, 243, 100);
  color: rgba(0, 34, 66, 100);
  font-size: 26px;
  border-radius: 16px;

}
.Enter{
  animation:  Enter 2s ;
}
@keyframes Enter {
  0%{
    transform: rotateX(-90deg)
  }
  100%{
    transform: rotateX(0deg)
  }
}
</style>
