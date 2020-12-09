<template>
  <div class="item">
    <div :style="{flex:leftFlex, flexDirection:type}" class="left">
          <slot name="left"></slot>   
    </div>
    <div :style="{flex:rightFlex}" class="right">
          <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
   
    props:{
         // row 横向布局
         // column 垂直布局
        type:{
            type:String,
            default:"row"
        },
        leftFlex:{
            type:Number,
            default:5
        },
        rightFlex:{
            type:Number,
            default:5
        }
    },
    watch: {
       leftFlex(val) {
           this.leftFlex=val
           this.rightFlex=10-val
       },
       rightFlex(val) {
           this.rightFlex=val
           this.leftFlex=10-val
       }
    },
    mounted() {
   
    },
}
</script>

<style>
  .item{
      position: relative;
      display: flex;

  }
  .item .left{
      display: flex;
      justify-content: center;
      align-items: center;
  }

</style>