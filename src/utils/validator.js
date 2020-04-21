/**
 * @name 字段校验模块
 * @description 唯一入口方法 validate
 * @description 第一个参数是需要校验的数据 可为 `字面量` 或者 `对象`
 * @description 第二个参数是自定义的校验规则 可为 `对象` 或者 `数组`
 * @description 第三个参数是是否返回所有的错误信息 为布尔值
 * @description 返回值为错误信息 若返回值为null 则证明参数通过校验
 * @description 若第一个参数是`字面量`则第二个参数是规则对象
 * @description 若第一个参数是`对象`则第二个参数是一个规则对象组成的数组
 * @description 规则基本可选值 min->最小值 max->最大值 required->不为空 type->必须是此类型 exp->自定义正则
 * @description 类型type可选值 EMAIL->邮件格式 PHONE->手机格式 IPV4->IPV4格式 HEX->16进制格式 CN->纯中文格式 URL->URL格式 ID_CARD->身份证格式
 */

const easyMobilePhone = /^1\d{10}$/;
const idCard = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
const ipV4 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const hex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
const onlyCN = /^[\u4e00-\u9fa5]*$/;
const URL = /^(https?:\/\/)([0-9a-z.]+)(:[0-9]+)?([/0-9a-z.]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/i;
const email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;

const typeValidator = {
  EMAIL: (field) => email.test(field),
  PHONE: (field) => easyMobilePhone.test(field),
  IPV4: (field) => ipV4.test(field),
  HEX: (field) => hex.test(field),
  CN: (field) => onlyCN.test(field),
  URL: (field) => URL.test(field),
  ID_CARD: (field) => idCard.test(field),
};

const primaryValidator = {
  required: (field, value) => {
    if (value) {
      if (Array.isArray(field)) {
        return field.length > 0;
      } else {
        return field !== null && field !== undefined && field !== '';
      }
    } else {
      return true;
    }
  },
  min: (field, value) => {
    if (typeof field === 'string' || Array.isArray(field)) {
      return field.length >= value;
    } else if (typeof field === 'number') {
      return field >= value;
    } else {
      return false;
    }
  },
  max: (field, value) => {
    if (typeof field === 'string' || Array.isArray(field)) {
      return field.length <= value;
    } else if (typeof field === 'number') {
      return field <= value;
    } else {
      return false;
    }
  },
};

export function validateObject(obj, rules, useAllMessage) {
  let errMessages = [];

  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    if (!rule.name) {
      throw new Error(`rule's property name is required`);
    }

    const errMessage = validateField(obj[rule.name], rule, rule.name);
    if (errMessage && !useAllMessage) {
      return errMessage;
    } else if (errMessage && useAllMessage) {
      errMessages.push(errMessage);
    }
  }

  if (useAllMessage) {
    return errMessages
  } else {
    return null;
  }
}

export function validateField(field, rules, fieldName = 'Field') {
  if (rules.hasOwnProperty('required')) {
    if (!primaryValidator.required(field, rules.required)) {
      return rules.message || `${fieldName} is required`
    }
  }
  if (rules.hasOwnProperty('min')) {
    if (!primaryValidator.min(field, rules.min)) {
      return rules.message || `${fieldName} is minimum of ${rules.min}`;
    }
  }
  if (rules.hasOwnProperty('max')) {
    if (!primaryValidator.max(field, rules.max)) {
      return rules.message || `${fieldName} is maximum of ${rules.max}`;
    }
  }
  if (rules.hasOwnProperty('type')) {
    if (!typeValidator[rules.type](field)) {
      return rules.message || `${fieldName}'s type is not a ${rules.type.toLowerCase()}`
    }
  }
  if (rules.hasOwnProperty('exp')) {
    if (!rules.exp.test(field)) {
      return rules.message || `${fieldName}'s exp test invalid`
    }
  }
  return null;
}

export function validate(data, rules, useAllMessage = false) {
  if (Array.isArray(data)) {
    throw new Error('Array not supported by validator');
  } else if (typeof data === 'object') {
    if (Array.isArray(rules)) {
      return validateObject(data, rules, useAllMessage)
    } else {
      throw new Error('Rules must be an array');
    }
  } else {
    if (typeof rules === 'object' && !Array.isArray(rules)) {
      return validateField(data, rules)
    } else {
      throw new Error('Rules must be an object');
    }
  }
}
