<template>
  <div class="swiper">
    <div class="swiperContainer">
      <div :style="transLength[index]"  v-for="(item, index) in 4" :key="index"  class="swiperItem">{{item}}</div>
    </div>
    <div class="dotContainer">
      <div  v-for="(item, index) in 4" :key="index"  class="dot" :class="{'active':curIndex==index}" @click="indexExchange(index)"></div>
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
      transLength:[
      {
         left:`-676px`,
         transition: 'ease 2s',
      },
      {
         left:`30px`,
         transition: 'ease 2s',
      },{
         left:`734px`,
         transition: 'ease 2s',
      },{
         left:`1438px`,
         transition: 'ease 2s',
      },{
        left:`2142px`,
         transition: 'ease 2s',
      }]
    };
  },
  mounted() {
    console.log(this.loop)
    // if(this.loop){
    //   setInterval(()=>{
    //     this.curIndex=(this.curIndex+1)%4
    //     this.indexExchange(this.curIndex)
    //   },2000)
    // }
  },

  methods: {
    indexExchange(index) {
      this.curIndex = index;
     
    
      this.transLength.forEach((item,idx) => {
          this.transLength[idx]=this.transLength[idx-1]
     
      });
    
      //
    },
  },
};
</script>

<style >
.swiper {
  width: 750px;
  height: 250px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-content: center;
}
.swiperContainer{
  overflow: hidden;
  display: flex;

}
.swiperItem {
  position: absolute;
  flex-shrink: 0;
  background-color: khaki;
  width: 690px;
  height: 224px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px 0px rgba(136, 127, 213, 100);
  margin: 0 14px 0 0;
 
}
.dotContainer {
  position: absolute;
  left: 50%;
  bottom: 48px;
  transform: translateX(-50%);
   display: flex;
   align-items: center;
}
.dot {
  width: 30px;
  height: 8px;
  line-height: 40px;
  border-radius: 20px;
  background-color: rgba(200, 200, 200, 100);
  text-align: center;
  margin:0 12px ;
 
}
.active{
 width: 78px;
 height: 14px;
 line-height: 20px;
 border-radius: 10px;
 background-color: rgba(136, 127, 213, 100);
 text-align: center;
 border: 1px solid rgba(255, 255, 255, 100);
 transition: ease .2s;
}


</style>