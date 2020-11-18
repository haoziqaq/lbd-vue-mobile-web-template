import QRCode from 'qrcodejs2'

export function isWechatBrowser() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('micromessenger')
}

export function showWechatQRCode() {
  let qrCodeContainer = document.getElementById('wechat-qrcode')
  if (!qrCodeContainer) {
    qrCodeContainer = document.createElement('div')
    qrCodeContainer.id = 'wechat-qrcode'
    const qrCodeText = document.createElement('div')
    qrCodeText.className = 'wechat-qrcode-tip'
    qrCodeText.textContent = '请使用微信浏览器打开'
    qrCodeContainer.appendChild(qrCodeText)
    document.body.appendChild(qrCodeContainer)
  }
  new QRCode(qrCodeContainer, {
    text: window.location.href,
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  })
}