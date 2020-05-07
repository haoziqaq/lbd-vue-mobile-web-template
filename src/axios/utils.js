/**
 * @description 后端状态码
 * @author 齐皓
 * @Date 2020/4/21
 */

import MultiMap from "../utils/MultiMap";

/**
 * @des 后端状态码枚举
 */
export const CODE = new MultiMap([
  ['SUCCESS', 200, '请求成功'],
  ['NEED_WX_AUTHENTICATION', 301, '需要微信授权'],
]);


/**
 * @des 后端返回状态码处理函数
 */
export const codeHandlers = new Map([
  [CODE.getValue('NEED_WX_AUTHENTICATION'), ({ data }) => {
    window.location.href = data?.data?.jump ?? '';
  }],
]);

/**
 * @des 不需要提示的状态码
 */
export const notPromptMessageCode = [
  CODE.getValue('SUCCESS'),
  CODE.getValue('NEED_WX_AUTHENTICATION'),
];

export function useRequest(request) {
  return new Promise(((resolve, reject) => {
    request
      .then(({ data }) => {
        if (data?.code === CODE.getValue('SUCCESS')) {
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
