<template>
  <div class="swiperContainer">
    <div class="swiper-item-container">
      <div v-for="(item,index) in 3" :key="item" :id="forId(index)" class="swiper-item " >
        {{ item }}
      </div>
    </div>
    <div class="indexContainer">
      <label v-for="(item,index) in 3" :for="forId(index)"  :key="item" :class="{'active':curIndex==index}" @click="indexExchange(index)"></label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loop: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      curIndex: 0,
    };
  },
  mounted() {
    // if (this.loop) {
    //   setInterval(() => {}, 1000);
    // }
  },
 


  methods: {
    indexExchange(index){
      // 改变当前的curIndex
     this.curIndex=index
    //  

    },
    forId(index){
      return "forId_"+index
    }
  },
};
</script>

<style >
.swiperContainer {
  width: 375px;
  height: 112px;
  background-color: black;
  overflow: hidden;
  display: flex;
  position: relative;
}
.swiperContainer .swiper-item {
  flex-shrink: 0;
  margin: 0 8px;
  width: 345px;
  height: 112px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px 0px rgba(136, 127, 213, 100);
  background-color: ivory;
}
.indexContainer {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  display: flex;
  align-items: center;
}
.indexContainer label {
  margin: 6px;
  width: 15px;
  height: 4px;
  line-height: 20px;
  border-radius: 10px;
  background-color: rgba(200, 200, 200, 100);
  text-align: center;
}
.indexContainer label.active {
  width: 39px;
  height: 7px;
  line-height: 20px;
  border-radius: 10px;
  background-color: rgba(136, 127, 213, 100);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 100);
}
/* @keyframes loops {
  0% {
    left: 0px;
  }
} */
</style>