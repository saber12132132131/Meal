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
    // Home,
    Navigation,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

 a{text-decoration: none;color:#333;}
 a:hover, a:visited, a:link, a:active {
    color:#333;
   
 }
 .container-flex{

   width: 750px;
 }
</style>
