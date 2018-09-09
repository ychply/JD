import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Product from './views/product.vue'
import productDatil from './views/productDatil.vue'
import Reg from './views/reg.vue'
import Cart from './views/cart.vue'
import Catgory from './views/catgory.vue'
import Find from './views/find.vue'
import Mine from './views/mine.vue'
import Detail from './views/product_detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
       meta:{
                title:'首页',
                index:1
            }
     
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
       meta:{
                title:'首页',
                index:1
            }
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/productdatil',
      name: 'productdatil',
      component: productDatil
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
       meta:{
                title:'购物车',
                index:4
            }
    },
    {
      path: '/catgory',
      name: 'catgory',
      component: Catgory,
       meta:{
                title:'分类',
                index:2
            }
    },
    {
      path: '/find',
      name: 'find',
      component: Find,
       meta:{
                title:'搜索',
                index:3
            }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
       meta:{
                title:'我的',
                index:5
            }
    },
    {
      path: '/detail/:uid',
      name: 'detail',
      component: Detail,
       meta:{
                title:'详情页',
                index:6
            }
    },
  ]
})
