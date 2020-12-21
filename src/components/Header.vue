<template>
  <div class="header">
    <div v-show="hasBack"  class="back">
        <span class="iconfont icon-arrow-left"></span>
    </div>
    <div class="title" :style="{ color: titleColor }">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    titleColor: {
      type: String,
      default: "block",
    },
    title: {
      type: String,
      default: "'团餐'膳食饮食",
    },
    hasBack:{
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {};
  },
};
</script>
    
<style lang="postcss" scoped>
.header {
  height: 80px;
  width: 750px;

  line-height: 80px;
  position: relative;
}
.header .back{
 position: absolute;
 transform: translateX(12px);
}
.header .title{
     font-size: 32px;
     text-align: center;
   
     font-family: SourceHanSansSC-regular;
}
</style>