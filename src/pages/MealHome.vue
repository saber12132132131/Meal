<template>
  <div class="top">
    <Header />
    <searchBar />
  </div>
</template>

<script>
// import Swiper from "../components/Swiper";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
export default {
  components: {
    // Swiper,
    Header,
    SearchBar 
  },
  data() {
    return {};
  },
};
</script>

<style >
.top {
    width: 750px;
    height: 454px;
    background-image: linear-gradient(to bottom,orange ,white);
    animation: changeColor 10s linear 2s infinite ;
}
@keyframes changeColor{
  0%{
      background-image: linear-gradient(to bottom,orange ,white);
  }
  25%{
      background-image: linear-gradient(to bottom,lightBlue ,white);
  }
  50%{
      background-image: linear-gradient(to bottom,purple,white);
  }
  75%{
     background-image: linear-gradient(to bottom,lightpink,white);
  }
  100%{
      background-image: linear-gradient(to bottom,orange ,white);
  }
}
</style>