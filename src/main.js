import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import Router from "vue-router";
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont.css';
// import 'lib-flexible'
import './plugins/rem.js'
Vue.use(Router);
Vue.use(ElementUI);
Vue.config.devtools = false;
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
