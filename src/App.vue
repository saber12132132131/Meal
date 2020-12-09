<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Navigation />
  </div>
</template>

<script>
// import Home from "./pages/MealHome";
import Navigation from "./components/Navigation";
export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  padding-bottom: 1000px;
}
a {
  text-decoration: none;
  color: #333;
}
a:hover,
a:visited,
a:link,
a:active {
  color: #333;
}
.cover {
  height: 100%;
  width: 100%;
}
.flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flexColEve {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.flexColBew {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.flexColArd {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.flexEve {
  display: flex;
  justify-content: space-evenly;
}
.flexBew {
  display: flex;
  justify-content: space-between;
}
.flexArd {
  display: flex;
  justify-content: space-around;
}
.gray {
  color: rgba(153, 153, 153, 100);
}
.lightBlue {
  color: rgba(46, 173, 249, 100);
}
.white {
  color: white;
}
.red {
  color: rgba(251, 59, 59, 100);
}
.font18 {
  font-size: 36px;
  font-family: SourceHanSansSC-regular;
}
.font12 {
  font-size: 24px;
  font-family: SourceHanSansSC-regular;
}
.font14 {
  font-size: 28px;
  font-family: SourceHanSansSC-regular;
}
.container-flex {
  width: 750px;
}
.marginRight10 {
  margin-left: 10px !important;
}
.marginRight20 {
  margin-left: 20px !important;
}
.marginRight30 {
  margin-left: 30px !important;
}
.marginRight40 {
  margin-left: 40px !important;
}
.marginLeft10 {
  margin-left: 10px !important;
}
.marginLeft20 {
  margin-left: 20px !important;
}
.marginLeft30 {
  margin-left: 30px !important;
}
.marginLeft40 {
  margin-left: 40px !important;
}
.marginTop10 {
  margin-top: 10px !important;
}
.marginTop20 {
  margin-top: 20px !important;
}
.marginTop30 {
  margin-top: 30px !important;
}
.marginTop40 {
  margin-top: 40px !important;
}
.marginBot10 {
  margin-bottom: 10px !important;
}
.marginBot20 {
  margin-bottom: 20px !important;
}
.marginBot30 {
  margin-bottom: 30px !important;
}
.marginBot40 {
  margin-bottom: 40px !important;
}
.margin10 {
  margin: 10px !important;
}
.margin20 {
  margin: 20px !important;
}
.margin30 {
  margin: 30px !important;
}
.margin40 {
  margin: 40px !important;
}
.paddingRight10 {
  padding-left: 10px !important;
}
.paddingRight20 {
  padding-left: 20px !important;
}
.paddingRight30 {
  padding-left: 30px !important;
}
.paddingRight40 {
  padding-left: 40px !important;
}
.paddingLeft10 {
  padding-left: 10px !important;
}
.paddingLeft20 {
  padding-left: 20px !important;
}
.paddingLeft30 {
  padding-left: 30px !important;
}
.paddingLeft40 {
  padding-left: 40px !important;
}
.paddingTop10 {
  padding-top: 10px !important;
}
.paddingTop20 {
  padding-top: 20px !important;
}
.paddingTop30 {
  padding-top: 30px !important;
}
.paddingTop40 {
  padding-top: 40px !important;
}
.paddingBot10 {
  padding-bottom: 10px !important;
}
.paddingBot20 {
  padding-bottom: 20px !important;
}
.paddingBot30 {
  padding-bottom: 30px !important;
}
.paddingBot40 {
  padding-bottom: 40px !important;
}
.padding10 {
  padding: 10px !important;
}
.padding20 {
  padding: 20px !important;
}
.padding30 {
  padding: 30px !important;
}
.padding40 {
  padding: 40px !important;
}
.grayBorder {
  border-bottom: 2px solid rgba(238, 238, 238, 100);
}
.hidden{
  overflow: hidden;
}
.flex1{
  flex: 1;
}
.goLeft{
    animation: toLeft 1s ease-out;
}
.goRight{
    animation: toRight 1s ease-out;
}
.goTop{
    animation: toTop 1s ease-out;
}
.goBottom{
    animation: toBottom 1s ease-out;
}
@keyframes toLeft {
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes toRight {
  0% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes toTop {
  0% {
    transform: translateY(200px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes toBottom {
  0% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
