/**
 * 全局基础常量
 */
import MultiMap from "./utils/MultiMap";

export const APP = {
  SERVER_ENV: process.env.VUE_APP_SERVER_ENV,
  BASE_URL: process.env.VUE_APP_BASE_URL,
  STATIC_URL: process.env.VUE_APP_STATIC_URL,
  WX_CONFIG_API: process.env.VUE_APP_WX_CONFIG_URL,
};

export const UPLOADER_STATES = new MultiMap([
  ['UPLOADING', 'uploading', '上传中'],
  ['FAILED', 'failed', '上传失败'],
  ['DONE', 'done', '上传完成'],
]);
