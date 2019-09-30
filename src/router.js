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
	mode: 'history',
	routes: [{
			path: '/',
			redirect: '/home', //重定向到home
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			meta: {
				title: '首页',
				index: 1,
				isLogin: false,
				showFooter: true ,
				keepAlive: true
			}
		},
		{
			path: '/reg',
			name: 'reg',
			component: Reg,
			meta: {
				isLogin: false,
				keepAlive: false
			}
		},
		{
			path: '/product',
			name: 'product',
			component: Product,
			meta: {
				isLogin: false,
				showFooter: true,
				keepAlive: true
			}
		},
		{
			path: '/productdatil',
			name: 'productdatil',
			component: productDatil,
			meta: {
				isLogin: false,
				keepAlive: false
			}
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				isLogin: false,
				keepAlive: false
			}
		},
		{
			path: '/cart',
			name: 'cart',
			component: Cart,
			meta: {
				title: '购物车',
				index: 4,
				isLogin: true,
				keepAlive: false
			}
		},
		{
			path: '/catgory',
			name: 'catgory',
			component: Catgory,
			meta: {
				title: '分类',
				index: 2,
				isLogin: false,
				showFooter: true, 
				keepAlive: true
			}
		},
		{
			path: '/find',
			name: 'find',
			component: Find,
			meta: {
				title: '搜索',
				index: 3,
				isLogin: false,
				keepAlive: false
			}
		},
		{
			path: '/mine',
			name: 'mine',
			component: Mine,
			meta: {
				title: '我的',
				index: 5,
				isLogin: true,
				showFooter: true,
				keepAlive: true
			}
		},
		{
			path: '/detail/:uid',
			name: 'detail',
			component: Detail,
			meta: {
				title: '详情页',
				index: 6,
				isLogin: false,
				keepAlive: false
			}
		},
	]
})