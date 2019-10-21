import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
//import Login from './views/Login.vue'
//import Product from './views/product.vue'
//import productDatil from './views/productDatil.vue'
//import Reg from './views/reg.vue'
//import Cart from './views/cart.vue'
//import Catgory from './views/catgory.vue'
//import Find from './views/find.vue'
//import Search from './views/search.vue'
//import Mine from './views/mine.vue'
//import Detail from './views/product_detail.vue'

Vue.use(Router)

export default new Router({
//	mode: 'history', //开发环境地址路径中的去掉#//打包要时不要有
	mode: 'hash', 

	routes: [{
			path: '/',
			redirect: '/home', //重定向到home
		},
		{
			path: '/home',
			name: 'home',
			component: (resolve) => require(['./views/Home.vue'],resolve),
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
			component: (resolve) => require(['./views/reg.vue'],resolve),
			meta: {
				isLogin: false,
				keepAlive: false
			}
		},
		{
			path: '/product',
			name: 'product',
			component: (resolve) => require(['./views/product.vue'],resolve),
			meta: {
				isLogin: false,
				showFooter: true,
				keepAlive: true
			}
		},
		{
			path: '/productdatil',
			name: 'productdatil',
			component: (resolve) => require(['./views/productDatil.vue'],resolve),
			meta: {
				isLogin: false,
				keepAlive: false
			}
		},
		{
			path: '/login',
			name: 'login',
			component: (resolve) => require(['./views/Login.vue'],resolve),
			meta: {
				isLogin: false,
				keepAlive: false
			}
		},
		{
			path: '/cart',
			name: 'cart',
			component: (resolve) => require(['./views/cart.vue'],resolve),
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
			component: (resolve) => require(['./views/catgory.vue'],resolve),
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
			component: (resolve) => require(['./views/find.vue'],resolve),
			meta: {
				title: '发现',
				index: 3,
				isLogin: false,
				keepAlive: false
			}
		},
		{
			path: '/search',
			name: 'search',
			component: (resolve) => require(['./views/search.vue'],resolve),
			meta: {
				title: '搜索',
				index: 7,
				isLogin: false,
				keepAlive: false
			}
		},
		{
			path: '/mine',
			name: 'mine',
			component: (resolve) => require(['./views/mine.vue'],resolve),
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
			component: (resolve) => require(['./views/product_detail.vue'],resolve),
			meta: {
				title: '详情页',
				index: 6,
				isLogin: false,
				keepAlive: false
			}
		},
	]
})