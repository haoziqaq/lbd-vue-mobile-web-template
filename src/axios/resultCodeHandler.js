import { Toast } from 'vant'
import { codeHandlers, notPromptMessageCode } from "./code";

export default async function (response) {
  if (response?.status === 200) {
    const responseCode = response?.data?.code;
    const responseMessage = response?.data?.msg;
    codeHandlers.has(responseCode) && codeHandlers.get(responseCode)(response);
    if (!notPromptMessageCode.includes(responseCode)) {
      responseMessage && Toast(responseMessage);
    }
  } else {
    if (response) {
      Toast(`服务端${response.status}错误`);
    } else {
      Toast('网络环境异常');
    }
  }
}

