/**
 * 全局基础常量
 */

export const APP = {
  SERVER_ENV: process.env.VUE_APP_SERVER_ENV,
  BASE_URL: process.env.VUE_APP_BASE_URL,
  STATIC_URL: process.env.VUE_APP_STATIC_URL,
  WX_CONFIG_API: process.env.VUE_APP_WX_CONFIG_URL,
};

export const UploadStates = {
  //上传中
  UPLOADING: 'uploading',
  //上传失败
  FAILED: 'failed',
  //上传完成
  DONE: 'done'
}

export const UploadStateMessages = {
  [UploadStates.UPLOADING]: '上传中',
  [UploadStates.FAILED]: '上传失败',
  [UploadStates.DONE]: '上传完成'
}