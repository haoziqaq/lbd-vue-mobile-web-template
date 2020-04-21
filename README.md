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
```

- 需要关注的点
```
1.项目结构方面
/src/api -> 每个请求抽成一个函数，放在这里。
/src/assets/* -> 静态资源放这里, 如图标，图片，视频，音频，样式文件。
/src/assets/variable.scss -> 全局变量样式文件
/src/axios/code.js -> 后端返回状态码相关
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
