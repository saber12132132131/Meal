<template>
  <div class="navBar">
     <div class="navItem">
         <div></div>
     </div>
     <div class="navItem">

     </div>
     <div class="navItem">

     </div>
     <div class="navItem">

     </div>
  </div>
</template>

<script>
export default {
    props:{

    }
};
</script>
 
<style>
.navBar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 750px;
  height: 110px;
  line-height: 40px;
  text-align: center;
  border: 2px solid rgba(234, 231, 253, 100);
  display: flex;
  justify-content: space-around;
}
.navItem{
    width: 160px;
    height: 100%;
    background-color: aquamarine;
}
</style>