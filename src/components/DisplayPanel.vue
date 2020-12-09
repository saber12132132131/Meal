<template>
  <div class="displayPanel">
    <div class="tapContainer">
      <div class="tap">
        <div v-for="(item,index) in taps" :key="item.des" class="tapitem" :class="{activeTap:curTapIndex==index}" @click="getTapIndex(index)">{{ item.des }}</div>
      </div>
    </div>
    <div class="tagContainer">
      <div v-for="(item,index) in tags" :key="item.des"  :class="{activeTag:curTagIndex==index}" @click="getTagIndex(index)" class="tagItem">
        <span class="animate__repeat-3 animate__bounceIn" >{{item.des}}</span>
        <span class="iconfont icon-arrow-down"></span>
      </div>
      <div class="tagItem">
        <span class="animate__repeat-3 animate__bounceIn">离我距离</span>
        <span class="iconfont icon-arrow-down"></span>
      </div>
      <div class="tagItem">
        <span class="animate__repeat-3 animate__bounceIn">食用餐段</span>
        <span class="iconfont icon-arrow-down"></span>
      </div>
      <div class="tagItem">
        <span class="animate__repeat-3 animate__bounceIn">套餐数量</span>
        <span class="iconfont icon-arrow-down"></span>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    taps: {
      type: Array,
      default: null,
    },
    tags:{
      type: Array,
      default: null,
    }
  },
  data() {
      return {
          curTapIndex: 0
      }
  },
  mounted() {
    console.log(this.props);
  },
  methods: {
      getTapIndex(index) {
          this.curTapIndex=index
      },
      getTagIndex(index) {
          this.curTapIndex=index
      }
  },
};
</script>

<style>
.activeTap::before{
  position: absolute;
  bottom: 40px;
  left: 0px;
  content: "";
  height: 10px;
  width: 100%;
 background-color: orange;
 opacity: 0.5;
 z-index: -1;
}
.activeTag{
  color: orange;
}
.displayPanel {
  width: 750px;
  height: fit-content;
  overflow: hidden;
}
.tapContainer {
  width: 690px;
  height: 72px;
  overflow: scroll;
  margin: 0 auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.tapContainer::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.tap {
 
  width: 690px;
  height: 72px;
  display: flex;
  justify-content: flex-start;
}

.tap .tapitem {
  flex-shrink: 0;
  margin-right: 40px;
  color: rgba(32, 32, 32, 100);
  font-size: 32px;
  text-align: left;
  font-family: PingFangSC-regular;
  animation: toLeft 1s ease-out;
  position: relative;
}
.tagContainer {
  width: 690px;
  margin: 0 auto;
  display: flex;
}
.tagContainer .tagItem {
  height: 40px;
  margin-right:30px ;
  
}
.tagItem span {
  color: rgba(0, 0, 0, 1);
  font-size: 24px;
  text-align: left;
  font-family: SourceHanSansSC-regular;

}
.tagItem span:nth-child(1){
    margin-right: 10px;

}
@keyframes toLeft {
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes bonus {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(2);
  }
  50% {
    transform: scale(1.5);
  }
  75% {
    transform: scale(1.25);
  }
  100%{
    transform: scale(1);
  }
}
</style>
