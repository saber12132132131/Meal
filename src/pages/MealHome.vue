<template>
<div class="container">
 <div class="top">
    <Header />
    <searchBar />
    <div class="swiperContainer">
      <Swiper :images="banners" />
    </div>
  </div>
</div>
 

</template>

<script>
import Swiper from "../components/Swiper";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default {
  components: {
    Swiper,
    Header,
    SearchBar

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
      curIndex: 0,
      
    };
  },
};
</script>

<style >
.top {
  width: 750px;
  height: 454px;
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
</style>