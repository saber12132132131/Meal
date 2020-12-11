<template>
  <div class="changeCard">
    <item :leftFlex="2.5">
      <div class="left" slot="left">
          <div v-for="(item,index) in requestBtns" :style="{height:btnHeight}" @click="setCurIndex(index)" :key="item.btnName" :class="{'activeBtn':index==curIndex}" class="changeBtn font14">{{item.btnName}}</div>
      </div>
      <div class="right" slot="right">
            <slot name="panel"></slot>
      </div>
    </item>
  </div>
</template>

<script>
import item from "../components/Item";

export default {
  components: {
    item,
  },
  props:{
    requestBtns:{
        type:Array,
        value:null
    },
    btnHeight:{
        type:String,
        value:"140px"
    }  
  },
  data(){
      return{
         curIndex:0
      }
  },
  methods:{
    setCurIndex(index){
         this.curIndex=index
    }
  }
};
</script>

<style>
.changeCard .left {
  background-color: rgb(240, 240, 240);
  height: fit-content;
  display: block;
}
.changeCard .left .changeBtn{
  width: 100%;
  height:140px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.changeCard .left .changeBtn.activeBtn{
    color: orange;
    background-color: oldlace;
}
</style>