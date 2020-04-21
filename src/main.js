import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import { vuePlugin } from "castle-haozijunqaq-utils";
import './components/componentRegister'
import './store'
import './utils/fixIosInput'
import './utils/rem'
import './assets/scss/common.scss'

FastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.use(vuePlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
