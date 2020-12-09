<template>
  <div class="mealItem" ref="mealItem">
    <item :leftFlex="1.78" class="itemx">
      <img src="" class="img " :class="{goRight:hasGoRight}" slot="left" alt="" srcset="" />
      <div class="flexColArd cover marginLeft30 " :class="{goLeft:hasGoLeft}" slot="right">
        <div class="title font18">营养均衡</div>
        <div class="serviceCount font12 gray">共服务 185,569 次</div>
        <div class="tag font12 lightBlue">起订份20份</div>
      </div>
    </item>
     <item :leftFlex="1.78" class="itemx2 paddingBot10 hidden">
       <div  slot="left"  :class="{goRight:hasGoRight}" >
           <div class="font14 red">￥ 12.00</div>
           <div class="font12 gray ">市场价：￥15</div>
      </div>
      <div  slot="right" class="flexColArd cover marginLeft30  grayBorder "  :class="{goLeft:hasGoLeft}">
           <div class="font12 ">水煮肉片+炒豆角+慢支豆腐+酸辣土豆丝</div>
           <div class="font12 gray">主食：馒头/米饭</div>
      </div>
    </item>
   <item :leftFlex="1.78" class="itemx2 marginTop10  paddingBot10 hidden">
       <div  slot="left"  :class="{goRight:hasGoRight}"  >
           <div class="font14 red">￥ 12.00</div>
           <div class="font12 gray ">市场价：￥15</div>
      </div>
      <div  slot="right" class="flexColArd cover marginLeft30 grayBorder"  :class="{goLeft:hasGoLeft}">
           <div class="font12 ">水煮肉片+炒豆角+慢支豆腐+酸辣土豆丝</div>
           <div class="font12 gray">主食：馒头/米饭</div>
      </div>
    </item>
   <div class="last gray font12 flexCenter flex1">
       <div  :class="{goLeft:hasGoLeft}">
          <span> 更多食谱（2套）</span>
          <span style="font-size:24px" class="iconfont  icon-arrow-right"></span>
       </div>
   </div>
  </div>
</template>

<script>
import Item from "./Item";
import { isElementNotInViewport} from "../utils/index";
export default {
  components: {
    Item
    
  },
   data() {
       return {
          hasGoRight:true,
          hasGoLeft:true
       }
   },
   mounted() {
  
    
    window.addEventListener("scroll",()=>{
    
        const flag = !isElementNotInViewport(this.$refs.mealItem)
        if(flag){
           this.hasGoRight=true
           this.hasGoLeft=true
        }else{
            this.hasGoRight=false
           this.hasGoLeft=false
        }
    })
  },
};
</script>

<style>
.mealItem {
  margin: 30px  auto 0;
  width: 690px;
  height: 560px;
  border-radius: 16px 16px 16px 16px;
  color: rgba(16, 16, 16, 100);
  box-shadow: 0px 2px 8px 0px rgba(234, 231, 253, 100);
  display: flex;
 flex-direction: column;
}
.itemx {
  border-radius: 16px 16px 0px 0px;
  height: 60px;
  width: 690px;
  height: 200px;
  margin: 0 auto;
}
.itemx2 {

  height: 60px;
  width: 690px;
  height: 120px;
  margin: 0 auto;

}
.itemx2 {

  height: 60px;
  width: 690px;
  height: 120px;
  margin: 0 auto;

}

.item .img {
  height: 160px;
  width: 160px;
}
</style>