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
	routes: [{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				title: '首页',
				index: 1,
				isLogin: false
			}

		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			meta: {
				title: '首页',
				index: 1,
				isLogin: false
			}
		},
		{
			path: '/reg',
			name: 'reg',
			component: Reg,
			meta: {
				isLogin: false
			}
		},
		{
			path: '/product',
			name: 'product',
			component: Product,
			meta: {
				isLogin: false
			}
		},
		{
			path: '/productdatil',
			name: 'productdatil',
			component: productDatil,
			meta: {
				isLogin: false
			}
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				isLogin: false
			}
		},
		{
			path: '/cart',
			name: 'cart',
			component: Cart,
			meta: {
				title: '购物车',
				index: 4,
				isLogin: true
			}
		},
		{
			path: '/catgory',
			name: 'catgory',
			component: Catgory,
			meta: {
				title: '分类',
				index: 2,
				isLogin: false
			}
		},
		{
			path: '/find',
			name: 'find',
			component: Find,
			meta: {
				title: '搜索',
				index: 3,
				isLogin: false
			}
		},
		{
			path: '/mine',
			name: 'mine',
			component: Mine,
			meta: {
				title: '我的',
				index: 5,
				isLogin: true
			}
		},
		{
			path: '/detail/:uid',
			name: 'detail',
			component: Detail,
			meta: {
				title: '详情页',
				index: 6,
				isLogin: false
			}
		},
	]
})