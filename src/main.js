import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VConsole from 'vconsole'
import { vuePlugin } from "castle-haozijunqaq-utils";
import { Toast } from 'vant'
import './components/componentRegister'
import './utils/fixWechatBug'
import './utils/rem'
import 'normalize.css'
import './assets/scss/common.scss'

Toast.setDefaultOptions('loading', { forbidClick: true, duration: 0, className: 'lbd-z-index' });
Toast.setDefaultOptions('text', { className: 'lbd-z-index' });
Toast.setDefaultOptions('success', { className: 'lbd-z-index' });
Toast.setDefaultOptions('fail', { className: 'lbd-z-index' });
Toast.setDefaultOptions('html', { className: 'lbd-z-index' });

Vue.config.productionTip = false;

Vue.use(vuePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

if (process.env.NODE_ENV === 'development') {
  new VConsole();
}


