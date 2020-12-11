import Vue from 'vue'
import Router from "vue-router";
import Home from "../pages/MealHome.vue"
import order from "../pages/order.vue"
import profile from "../pages/profile.vue"
import Welfare from "../pages/Welfare.vue"
import GoldChef from "../pages/GoldChef.vue"
// 安装插件
Vue.use(Router);
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children:[]
    }, {
        path: '/order',
        component: order
    }, {
        path: '/profile',
        component: profile
    }, {
        path: '/Welfare',
        component: Welfare
    },{
        path:'/chef',
        component:GoldChef
     }]
export default new Router({
    mode: 'history',
    routes
})