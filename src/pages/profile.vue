<template>
  <div class="container-flex">
    <div class="top">
      <div class="bgcBlock1"></div>
      <div class="bgcBlock2"></div>
      <div class="bgcBlock3">
        <div class="bottom">
          <div class="block">
            <div class="num">1252</div>
            <div class="des">积分</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="block">
            <div class="num">9000</div>
            <div class="des">零钱</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="block">
            <div class="num">52</div>
            <div class="des">收藏</div>
          </div>
        </div>
      </div>
      <div class="img"></div>
      <el-tag size="medium" class="compName" effect="dark">聚创公司</el-tag>
      <div class="nickName">PMGordon团餐</div>
    </div>
    <div class="banner">
      <div class="title">膳食饮食</div>
      <div class="warp">
        <div class="warpCon">
          <div class="top2">1</div>
          <div class="bottom2">厨师预约</div>
        </div>
        <div class="warpCon">
          <div class="top2">1</div>
          <div class="bottom2">厨师预约</div>
        </div>
        <div class="warpCon">
          <div class="top2">1</div>
          <div class="bottom2">厨师预约</div>
        </div>
        <div class="warpCon">
          <div class="top2">1</div>
          <div class="bottom2">厨师预约</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.top {
  width: 750px;
  height: 456px;
  opacity: 0.85;
  background-color: rgba(46, 173, 249, 100);
  position: relative;
}
.banner {
  width: 690px;
  height: 252px;
  line-height: 20px;
  border-radius: 10px;
  text-align: center;
  margin: 70px auto;
  box-shadow: 0px 2px 6px 0px rgba(190, 183, 242, 100);
  border: 1px solid rgba(255, 0, 0, 0);
  display: flex;
  justify-content: space-between;
  position: relative;
}
.banner .title {
  height: fit-content;
  font-size: 32px;
  text-align: left;
  margin: 30px;
  font-family: PingFangSC-regular;
  position: relative;
}
.banner .title::after{
  content: "";
  z-index: -1;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 10px;
  border-radius: 5px;
  width: 100%;
  background-color: orange;
}
.banner .top .img {
  width: 180px;
  height: 180px;
  background-color: rgba(255, 255, 255, 100);
  box-shadow: 0px 2px 6px 0px rgba(216, 30, 6, 100);
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.banner .warp {
  position: absolute;
  height: 70%;
  width: 100%;
  /* background-color: violet; */
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.banner .warp .bottom2 {
  color: rgba(153, 152, 152, 100);
  font-size: 26px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.banner .warp .top2 {
  color: rgba(16, 16, 16, 100);
  font-size: 40px;
  text-align: left;
  font-family: PingFangSC-bold;
}
.banner .warp  .warpCon{
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}
.bottom {
  position: absolute;
  width: 100%;
  height: 40%;
  bottom: 0;
  /* background-color: #ff0; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bottom .block {
  text-align: center;
  display: flex;
  flex-direction: column;

  align-items: center;
}
.bottom .block .num {
  color: rgba(16, 16, 16, 100);
  margin: 20px 0;
  font-size: 40px;
  font-family: PingFangSC-bold;
}
.bottom .block .des {
  text-align: center;
  color: rgba(153, 152, 152, 100);
  font-size: 26px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.compName {
  height: 50px !important;
  position: absolute;
  left: 50%;
  top: 68%;
  transform: translate(-50%, -50%);
  border-radius: 25px !important;
  font-size: 24px !important;
  line-height: 50px !important;
  padding: 0 6px;
}
.nickName {
  color: rgba(16, 16, 16, 100);
  font-size: 32px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
  position: absolute;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -50%);
}
.bgcBlock1 {
  width: 588px;
  height: 290px;
  line-height: 20px;
  opacity: 0.5;
  border-radius: 25px;
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translateX(-50%);
  background-color: white;
}
.bgcBlock2 {
  width: 652px;
  height: 290px;
  line-height: 20px;
  opacity: 0.5;
  border-radius: 25px;
  position: absolute;
  left: 50%;
  top: 174px;
  transform: translateX(-50%);
  background-color: white;
}
.bgcBlock3 {
  width: 684px;
  height: 290px;
  line-height: 20px;
  opacity: 1;
  border-radius: 25px;
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
  background-color: white;
  box-shadow: 0px 2px 6px 0px rgba(190, 183, 242, 100);
}
</style>
