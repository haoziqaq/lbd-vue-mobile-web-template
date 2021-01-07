import Vue from 'vue'
import VueRouter from 'vue-router'
import { vueRouterUtils } from 'castle-haozijunqaq-utils'
import { isWechatBrowser, showWechatQRCode } from '@/utils/ua'

Vue.use(VueRouter)

// 自定义路由
const routes = [
  {
    path: '/',
    redirect: '/test'
  }
]

const router = new VueRouter({
  routes: vueRouterUtils.compose(routes)
})

router.beforeEach((to, from, next) => {
  // TODO:进入路由前拦截
  // if (!isWechatBrowser()) {
  //   showWechatQRCode()
  //   return
  // }
  next()
})

router.afterEach((to, from) => {
  // TODO:进入路由后拦截
})

export default router
