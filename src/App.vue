<template>
  <div id="app">
    <Home />
    <Navigation />
  </div>
</template>

<script>
import Home from "./pages/MealHome";
import Navigation from "./components/Navigation";
export default {
  name: "App",
  components: {
    Home,
    Navigation,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
