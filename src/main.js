import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
import router from './routers/router'
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont.css';
import 'animate.css'
// import 'lib-flexible'
import './plugins/rem.js'
Vue.use(ElementUI);
Vue.config.devtools = false;
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
