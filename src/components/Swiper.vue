<template>
  <div class="swiper">
    <div class="swiperContainer">
      <transition
        name="banner"
        v-on:before-enter="beforeEnter"
        enter-active-class="bannerEnter"
        leave-active-class="bannerLeave"
        v-for="(item, index) in images"
        :key="item.imgUrl"
      >
        <img
          v-show="index == curIndex"
          class="bannerImg"
          :src="item.imgUrl"
          alt=""
        />
      </transition>
    </div>
    <div class="dotContainer">
      <div
        v-for="(item, index) in images"
        :key="index"
        class="dot"
        :class="{ active: curIndex == index }"
        @click="indexExchange(index)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loop: {
      type: Boolean,
      default: true,
    },
    images: {
      type: Array,
      default: null,
    },
  },

  data() {
    return {
      curIndex: 0,
    };
  },
  mounted() {
    console.log(this.loop);
    if (this.loop) {
      this.timer = setInterval(() => {
        this.curIndex = (this.curIndex + 1) % this.images.length;
      }, 4000);
    }
  },
  created() {
    console.log(this.props);
  },
  methods: {
    indexExchange(index) {
      this.curIndex = index;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.curIndex = (this.curIndex + 1) % this.images.length;
      }, 4000);
    },
    beforeEnter() {
      
    },
  },
};
</script>

<style lang="postcss" scoped >
.swiper {
  width: 750px;
  height: 250px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-content: center;
}
.swiperContainer {
  width: 750px;
  height: 250px;
  overflow: hidden;
  display: flex;
  position: relative;
  justify-content: center;
}
.swiperItem {
  position: absolute;
  flex-shrink: 0;
  background-color: khaki;
  width: 690px;
  height: 224px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px 0px rgba(136, 127, 213, 100);
  margin: 0 14px 0 0;
}
.dotContainer {
  position: absolute;
  left: 50%;
  bottom: 48px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
}
.dot {
  width: 30px;
  height: 8px;
  line-height: 40px;
  border-radius: 20px;
  background-color: rgba(200, 200, 200, 100);
  text-align: center;
  margin: 0 12px;
}
.active {
  width: 78px;
  height: 14px;
  line-height: 20px;
  border-radius: 10px;
  background-color: rgba(136, 127, 213, 100);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 100);
  transition: ease 2s;
}
.bannerImg {
  height: 224px;
  width: 690px;
  border-radius: 20px;
  box-shadow: 0px 4px 12px 0px rgba(136, 127, 213, 100);
  object-fit: cover;
  position: absolute;
}

/* 轮播动画定义 */
.bannerEnter {
  animation: bannerEnters 2s;
}
.bannerLeave {
  animation: bannerLeaves 2s;
}
@keyframes bannerEnters {
  0% {
    transform: translateX(690px) scale(0.8);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
}
@keyframes bannerLeaves {
  0% {
    transform: translateX(0px) scale(1);
  }
  100% {
    transform: translateX(-690px) scale(0.8);
  }
}
</style>