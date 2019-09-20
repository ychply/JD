import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'c-swipe/dist/swipe.css';
import { Swipe, SwipeItem } from 'c-swipe';
import 'lib-flexible/flexible.js'
import Vuelazyload from 'vue-lazyload'


import {store} from './store/store.js';
import '@/assets/images/iconfont/iconfont.css'
import "@/assets/scss";
import "./components/plugin";
//import Toast from './components/toast/index.js'
//import '@/assets/styles/base.scss';
//Vue.use(Toast)

Vue.use(Vuelazyload,{
	  preLoad: 1.3,
    error: require('./assets/images/err.png'),
    loading: require('./assets/images/loading.gif'),
    attempt: 1,
    listenEvents: ['scroll']
})
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

Vue.config.productionTip = false;
Vue.prototype.$http=axios;

router.beforeEach((to, from, next) => {
	if(to.meta.isLogin){
		next({
        path: '/login'
      })
	}else{
		next();
	}

})

router.afterEach(route => {
  window.scroll(0, 0)
})

new Vue({
	store,
  router,
  render: h => h(App)
}).$mount('#app')
