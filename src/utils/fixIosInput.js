/**
 * @description 解决IOS输入文字时页面弹起不会回滚的问题
 * @author 齐皓
 * @Date 2020/2/28
 */

(/iphone|ipod|ipad/i.test(navigator.appVersion)) && document.addEventListener(
  'blur',
  event => {
    // 当页面没出现滚动条时才执行，因为有滚动条时，不会出现这问题
    // input textarea 标签才执行，因为 a 等标签也会触发 blur 事件
    if (
      document.documentElement.offsetHeight <=
      document.documentElement.clientHeight &&
      ['input', 'textarea'].includes(event.target.localName)
    ) {
      document.body.scrollIntoView() // 回顶部
    }
  },
  true
);
