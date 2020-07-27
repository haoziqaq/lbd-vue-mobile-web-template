/**
 * @description 后端状态码
 * @author 齐皓
 * @Date 2020/4/21
 */

import { toOptions } from '../utils/shared';

/**
 * @des 后端状态码枚举
 */
export const Codes = {
  SUCCESS: 200,
  NEED_WX_AUTHENTICATION: 301,
}

export const CodeMessages = {
  [Codes.SUCCESS]: '请求成功',
  [Codes.NEED_WX_AUTHENTICATION]: '需要微信授权'
}

/**
 * @des 后端返回状态码处理函数
 */
export const CodeHandlers = {
  [Codes.NEED_WX_AUTHENTICATION]: ({ data }) => {
    window.location.href = data?.data?.jump ?? '';
  }
}

/**
 * @des 不需要提示的状态码
 */
export const NotPromptMessageCodes = [
  Codes.SUCCESS,
  Codes.NEED_WX_AUTHENTICATION,
];

export function useRequest(request) {
  return new Promise(((resolve, reject) => {
    request
      .then(({ data }) => {
        if (data?.code === Codes.SUCCESS) {
          resolve({
            isSuccess: true,
            data,
            errorMessage: null,
          })
        } else {
          resolve({
            isSuccess: false,
            data,
            errorMessage: null,
          });
        }
      })
      .catch((errorMessage) => {
        reject({
          isSuccess: false,
          data: null,
          errorMessage: JSON.stringify(errorMessage)
        })
      })
  }))
}
