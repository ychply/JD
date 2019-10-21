import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'lib-flexible/flexible.js'
import Vuelazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//import "@/permission";



//import {store} from './store/store.js';
import store from "./store/index";
import '@/assets/images/iconfont/iconfont.css'
import "@/assets/scss";
import "./components/plugin";

//import Toast from './components/toast/index.js'
//import '@/assets/styles/base.scss';
//Vue.use(Toast)
console.log(process.env)
Vue.use(Vuelazyload,{
	  preLoad: 1.3,
    error: require('./assets/images/err.png'),
    loading: require('./assets/images/loading.gif'),
    attempt: 1,
    listenEvents: ['scroll']
})

axios.defaults.timeout = 5000; // 请求超时
axios.defaults.baseURL = '/api/' ;//开发环境的，跨域的请求
//axios.defaults.baseURL = '/' ;//打包后的，不跨域的请求
Vue.config.productionTip = false;
Vue.prototype.$http=axios;
Vue.use(VueAwesomeSwiper, /* { default global options } */)

router.beforeEach((to, from, next) => {
//	console.log(store.getters.token);
	if(to.meta.isLogin){
		if(store.getters.token == 0){       //从vuex中获取是否已经登录
				next({
        path: '/login',
        query:{redirect: to.fullPath} //将路由跳转的path作为参数，跳转成功后到该路由
      })
		}else{
			next();
		}
	}else{
		next();
	}

})

router.afterEach(route => {
//window.scroll(0, 0)
})

new Vue({
	store,
  router,
  render: h => h(App)
}).$mount('#app')
