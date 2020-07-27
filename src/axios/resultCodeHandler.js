import { Toast } from 'vant'
import { CodeHandlers, NotPromptMessageCodes } from "./utils";

export default async function (response) {
  if (response?.status === 200) {
    const responseCode = response?.data?.code;
    const responseMessage = response?.data?.msg;
    CodeHandlers[responseCode] && CodeHandlers[responseCode](response);
    if (!NotPromptMessageCodes.includes(responseCode)) {
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

