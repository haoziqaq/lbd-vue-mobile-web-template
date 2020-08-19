/**
 * @description 解决IOS输入文字时页面弹起不会回滚的问题 解决上传图片浏览器自动旋转的问题
 * @author 齐皓
 * @Date 2020/2/28
 */
import EXIF from 'exif-js'

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
)

/**
 * 去除浏览器对exif信息的副作用，合理化图片旋转方向
 * @param file 文件
 * @returns {Promise<string>} base64字符串
 */
export function fixImageRotate(file) {
  return new Promise(resolve => {
    EXIF.getData(file, function() {
      // 旋转方向 1：0° 3:180° 6：顺时针90° 8：逆时针90°
      const Orientation = EXIF.getTag(this, 'Orientation')
      const imgType = this.type
      if (!this || !window.FileReader) return
      // 创建一个reader
      const reader = new FileReader()
      // 将图片2将转成 base64 格式
      reader.readAsDataURL(this)
      reader.onloadend = function() {
        const img = new Image()
        img.src = reader.result
        const width = img.width
        const height = img.height
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        switch (Number(Orientation)) {
          case 3:
            canvas.width = width
            canvas.height = height
            ctx.rotate(Math.PI / 180 * 180)
            ctx.drawImage(img, 0, 0, img.width, img.height, -img.width, -img.height, img.width, img.height)
            break
          case 6:
            canvas.width = height
            canvas.height = width
            ctx.rotate(Math.PI / 180 * 90)
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, -img.height, img.width, img.height)
            break
          case 8:
            canvas.width = height
            canvas.height = width
            ctx.rotate(Math.PI / 180 * -90)
            ctx.drawImage(img, 0, 0, img.width, img.height, -img.width, 0, img.width, img.height)
            break
          default:
            canvas.width = width
            canvas.height = height
            ctx.drawImage(img, 0, 0)
            break
        }
        const fileBase64 = canvas.toDataURL(imgType)
        resolve(fileBase64)
      }
    })
  })
}
