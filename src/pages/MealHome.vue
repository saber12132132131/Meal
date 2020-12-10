<template>
<div class="container-flex">
 <div class="top">
    <Header  titleColor="white"/>
    <searchBar />
    <div class="swiperContainer">
      <Swiper :images="banners" />
    </div>
  </div>
  <div class="main">
    <!-- 分类条目 -->
      <div class="sortItem_container">
         <div v-for="item in sortItems" :key="item.imgUrl" class="sortItem">
            <div class="circle">
              <img src="" alt="" srcset="">
            </div>
            <div class="des">{{item.des}}</div>
         </div>
      </div>
    <!-- 提示 -->
    <Tip/>
    <!-- 展示板 -->
    <DisplayPanel :taps='taps' :tags="tags" />
  </div>
</div>
 

</template>
<script>
import Swiper from "../components/Swiper";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Tip from "../components/tip";
import DisplayPanel from "../components/DisplayPanel";

export default {
  components: {
    Swiper,
    Header,
    SearchBar,
    Tip,
    DisplayPanel
  },
  
  data() {
    return {
      items: [1,2,3,4,5,6,7,8,9],
      banners: [
        {
          id: 1,
          imgUrl:
            "https://www.xiaoshiguang.cn/dzapi/image/indexbanner/banner01.png",
        },
        {
          id: 2,
          imgUrl:
            "https://www.xiaoshiguang.cn/dzapi/image/indexbanner/banner02.png",
        },
        {
          id: 3,
          imgUrl:
            "https://www.xiaoshiguang.cn/dzapi/image/indexbanner/banner03.png",
        },
        {
          id: 4,
          imgUrl:
            "https://www.xiaoshiguang.cn/dzapi/image/indexbanner/banner04.png",
        },
        {
          id: 5,
          imgUrl:
            "https://www.xiaoshiguang.cn/dzapi/image/indexbanner/banner05.png",
        },
      ],
      sortItems:[{
        imgUrl:"1",
        des:"金牌厨师"
      },
      {
        imgUrl:"2",
        des:"半成品菜"
      },{
        imgUrl:"3",
        des:"生鲜水果"
      },{
        imgUrl:"4",
        des:"活动配餐"
      }],
      curIndex: 0,
      taps:[{
        des:'精美团餐'
      },{
        des:'特色早餐'
      },{
        des:'减肥降压'
      },{
        des:'精美团餐2'
      },{
        des:'精美团餐3'
      }],
      tags:[{
        des:'综合排序'
      },{
        des:'离我距离'
      },{
        des:'食用餐段'
      },{
        des:'套餐数量'
      }]
    };
  },
};
</script>

<style >
.top {
  width: 750px;
  height: 400px;
  background-image: linear-gradient(to bottom, orange, white);
  animation: changeColor 10s linear 4s infinite;
}
.swiperContainer {
  width: 750px;
  height: 256px;
  /* background-color: orange; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
@keyframes changeColor {
  0% {
    background-image: linear-gradient(to bottom, orange, white);
  }
  25% {
    background-image: linear-gradient(to bottom, lightBlue, white);
  }
  50% {
    background-image: linear-gradient(to bottom, purple, white);
  }
  75% {
    background-image: linear-gradient(to bottom, lightpink, white);
  }
  100% {
    background-image: linear-gradient(to bottom, orange, white);
  }
}
.bannerImg {
  height: 224px;
  width: 690px;
  border-radius: 20px;
  box-shadow: 0px 4px 12px 0px rgba(136, 127, 213, 100);
  object-fit: cover;
}
.Dots{
 position: absolute;
 display: flex;
}
.main .sortItem_container{
  padding:0  30px 40px;
 
 height: 180px;
 width: 690px;

 display: flex;
 justify-content: space-between;
 align-items: center;
}
.sortItem{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
.sortItem .circle{

  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: plum;
}
.sortItem .des{
  color: rgba(0, 34, 66, 100);
  font-size: 28px;
  font-weight: 800;
  font-family: PingFangSC-regular;
}
</style>