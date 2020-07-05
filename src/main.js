import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue'
import { vuePlugin } from "castle-haozijunqaq-utils";
import { Toast } from 'vant'
import './components/componentRegister'
import './utils/fixIosInput'
import './utils/rem'
import './assets/scss/common.scss'

Toast.setDefaultOptions('loading', { forbidClick: true, duration: 0 });

// 点击代理
// FastClick.attach(document.body);
Vue.config.productionTip = false;

Vue.use(vuePlugin)
  .use(AlloyFingerPlugin, {
    AlloyFinger
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

