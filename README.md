### 基与vue的移动web端企业自用项目模板
- 提供了什么功能？
```
1.集成了vue全家桶
2.提供自动路由配置，不再关心路由配置。
3.提供自动全局组件注册，不再关心全局组件注册。
4.提供自动vuex模块划分，不再关心vuex的模块命名空间。
5.集成了fastclick, 解决了移动端点击事件延迟问题。
6.修复了ios输入组件输入结束时，body无法自动回弹的问题。
7.集成了vant-ui,并实现了按需加载，减轻代码体积。
8.集成了多环境配置。
9.提供了常用正则表达式，表单对象属性验证，图片压缩，日期格式化，省市区js等工具函数。
10.集成了rem适配方案
11.基于axios进行了请求封装，统一了API入参和返回，提供了完整配置。
12.提供了全局样式变量文件。
13.提供了二维码生成功能。
14.提供了微信sdk封装
15.提供了阿里云oss的封装
16.集成了自定义lbd-ui
```

- 需要关注的点
```
1.项目结构方面
/src/api -> 每个请求抽成一个函数，放在这里。
/src/assets/* -> 静态资源放这里, 如图标，图片，视频，音频，样式文件。
/src/assets/variable.scss -> 全局变量样式文件
/src/axios/utils.js -> 后端返回状态码相关
/src/backup -> 备份文件
/src/components -> 自定义的全局组件,放在里面，已实现自动注册。
/src/router/index.js -> 路由拦截器和路由配置文件，已实现自动路由配置，只关心拦截。
/src/store/modules -> vuex模块文件，已实现自动划分命名空间。
/src/utils/area.js -> 省市区js, vant官方提供。
/src/utils/MultiMap.js -> 多枚举数据结构，可用做状态枚举。
/src/utils/validator.js -> 表单对象验证
/.env.development -> 开发环境配置
/.env.production -> 生产环境配置
```

```
2. 多环境配置(注意: $属于特殊字符，需要转义\$)
VUE_APP_NAME = '应用名称'
VUE_APP_BASE_URL = '后端接口地址'
VUE_APP_STATIC_URL = '后端静态资源地址'
VUE_APP_WX_CONFIG_URL = '微信SDK配置地址'
VUE_APP_SERVER_ENV = '服务端环境标识'

VUE_APP_REMOTE_HOST = '远程主机'
VUE_APP_REMOTE_PORT = '远程主机端口'
VUE_APP_REMOTE_USER= '远程主机用户名'
VUE_APP_REMOTE_PASS= '远程主机密码'
VUE_APP_REMOTE_PATH= '远程主机部署路径' 如 /web/project-name/

VUE_APP_OSS_PATH = 'oss目录' 如: /project-name/
VUE_APP_OSS_KEY = 'oss key'
VUE_APP_OSS_SECRET = 'oss secret'
VUE_APP_OSS_REGION = 'oss区域' 如: oss-cn-beijing
VUE_APP_OSS_BUCKET = 'bucket名称' 注意: 是名称，不是bucket访问域名
```

```
3.运行脚本
"scripts": {
    //启动开发环境
    "serve": "vue-cli-service serve", 
    //应用打包构建
    "build": "vue-cli-service build", 
    //应用打包构建成资源指向oss的包
    "build:oss": "vue-cli-service build --oss",
    //应用打包构建并发布到公司服务器
    "publish": "vue-cli-service build --publish",
    //应用打包构建成资源指向oss的包并发布资源到oss,发布程序入口到公司服务器.
    "publish:oss": "vue-cli-service build --publish --oss" 
  },
```

```
4.集成手势库
    v-finger:swipe 滑动手势触发
    v-finger:tap 点击手势触发
    v-finger:single-tap 单击手势触发
    v-finger:double-tap 双击手势触发
    v-finger:long-tap 长按手势触发
    v-finger:touch-start 手指按下触发
    v-finger:touch-move 手指移动触发
    v-finger:touch-end  手指抬起触发
    v-finger:touch-cancel 手指按下并移出元素(取消点击)触发
    v-finger:pinch 双指挤压，缩放手势触发
    v-finger:press-move 按住移动触发
    v-finger:rotate 双指旋转触发
    v-finger:multipoint-start 多点进入元素触发
```

```
5.命令行使用
lbd create <项目名> -> 创建项目
lbd mv <路由地址> [文件名] [模板类型][simple(默认), list, detail, form]
```

```
6.UI库混用
模板集成了lbd-ui和vant两套UI库
注意尽量不使用两套UI库里的弹框做嵌套操作, 以免层级混乱
```
