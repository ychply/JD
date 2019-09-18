import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'c-swipe/dist/swipe.css';
import { Swipe, SwipeItem } from 'c-swipe';
import 'lib-flexible/flexible.js'
import Vuelazyload from 'vue-lazyload'

import {store} from './store/store';
import './assets/js/app.js';
import '@/assets/images/iconfont/iconfont.css'
import Toast from './components/toast/index.js'

Vue.use(Toast)

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

new Vue({
	store,
  router,
  render: h => h(App)
}).$mount('#app')
