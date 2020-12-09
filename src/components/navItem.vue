<template>
  <router-link :to='path' class="navItem" tag="div" replace>
    <div class="image">
      <slot name="image"></slot>
    </div>
    <div class="des">
      <slot name="des"></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  props:{
    path:{
      type:String,
      default:""
    }
  }
};
</script>

<style>
.navItem {
  display: block;
  width: 160px;
  height: 100%;
  /* background-color: aquamarine; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.navItem .image {
  height: 40px;
  width: 40px;
}
/* router-link-active routerLink 内置类 用于表示选择的 */
.router-link-active{
  color: orange;
}
</style>