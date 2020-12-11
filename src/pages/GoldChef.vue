<template>
  <div class="gold">
    <Header />
    <!-- 地址与搜索 -->
    <div class="flexBew paddingLeft30 paddingRight30 font18 flexAlignCenter">
      <div class="left">
        嘉宾花园店
        <span style="font-size: 36px" class="iconfont icon-arrow-right"></span>
      </div>
      <div class="right">
        <span style="font-size: 36px" class="iconfont icon-Search"></span>
      </div>
    </div>
    <!-- 删选条件 -->
    <div class="flexArd font14 gray margin40">
      <div>
        请选择擅长
        <span style="font-size: 36px" class="iconfont icon-arrow-down"></span>
      </div>
      <div>
        服务形式
        <span style="font-size: 36px" class="iconfont icon-arrow-down"></span>
      </div>
    </div>
    <div class="main">
      <ChangeCard   :requestBtns="Btns">
         <div class="panel" slot="panel">
             <ChefItem/>
         </div>
      </ChangeCard>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import ChangeCard from "../components/changeCard";
import ChefItem from "../components/chefItem";
export default {
  components: {
    Header,
    ChangeCard,
    ChefItem
  },
  data(){
    return{
      Btns:[{
        btnName:'厨师推荐',
        url:"/"
      },{
        btnName:'金牌厨师',
        url:"/"
      },{
        btnName:'银牌厨师',
        url:"/"
      },{
        btnName:'铜牌厨师',
        url:"/"
      },{
        btnName:'玄铁厨师',
        url:"/"
      },{
        btnName:'草根厨师',
        url:"/"
      },{
        btnName:'其他帮厨',
        url:"/"
      }]
    }
  }
};
</script>

<style></style>
