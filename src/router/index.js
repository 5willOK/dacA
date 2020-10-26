import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../views/home/home.vue'
import Category from '../views/category/category.vue'
import Search from '../views/search/search.vue'
import Cart from '../views/cart/cart.vue'
import Mine from '../views/mine/mine.vue'

// 子组件
import Index from "../views/home/Children/Index.vue"
import Ele from "../views/home/Children/Ele.vue"
import Person from "../views/home/Children/Person.vue"
import Box from "../views/home/Children/Box.vue"
import Phone from "../views/home/Children/Phone.vue"
import Computer from "../views/home/Children/Computer.vue"
import House from "../views/home/Children/House.vue"
import Face from "../views/home/Children/Face.vue"

// 分类子组件
import CategoryList from '../views/category/components/CategoryList.vue'

//登录组件
import LogIn from '../views/login/LogIn.vue'
//详情
import Goodsdetail from '../views/goodsdetail/goodsdetail.vue'
import Searchlist from '../views/search/searchlist.vue'
const routes = [{
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
        path: "index",
        component: Index
    }, {
        path: "ele",
        component: Ele
    }, {
        path: "person",
        component: Person
    }, {
        path: "box",
        component: Box
    }, {
        path: "phone",
        component: Phone
    }, {
        path: "computer",
        component: Computer
    }, {
        path: "house",
        component: House
    }, {
        path: "face",
        component: Face
    }, {
        path: "/home",
        redirect: "/home/index"
    }]
}, {
    path: '/category/:cid',
    name: 'category',
    component: Category
}, {
    path: '/search',
    name: 'search',
    component: Search
}, {
    path: '/cart',
    name: 'cart',
    component: Cart
}, {
    path: '/mine',
    name: 'mine',
    component: Mine
}, {
    path: '/list',
    name: 'categoryList',
    component: CategoryList
}, {
    path: '/logIn',
    name: 'logIn',
    component: LogIn
}, {
    path: '/goodsdetail',
    name: 'goodsdetail',
    component: Goodsdetail
}, {
    path: '/searchlist',
    name: 'searchlist',
    component: Searchlist
}, {
    path: "/",
    redirect: "/home/index"
}]

const router = new VueRouter({
    routes,
})

export default router;