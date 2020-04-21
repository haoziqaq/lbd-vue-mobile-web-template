/**
 * @description 自定义数据结构 多映射枚举
 * @author 齐皓
 * @Date 2020/3/18
 */

export default class MultiMap {

  constructor(array) {
    this.values = new Map();
    this.messages = new Map();
    this.props = new Map();

    array.forEach(([key, value, message, ...props]) => {
      this.values.set(key, value);
      this.messages.set(this.values.get(key), message);
      this.props.set(key, [value, message, ...props])
    })
  }

  getValue(key) {
    return this.values.get(key);
  }

  getMessage(key) {
    return this.messages.get(this.values.get(key));
  }

  getValueByMessage(message) {
    let resValue = null;
    this.messages.forEach((itemMessage, value) => {
      if (message === itemMessage) {
        resValue = value;
      }
    });
    return resValue;
  }

  getMessageByValue(value) {
    return this.messages.get(value);
  }

  getProps(key) {
    return this.props.get(key);
  }

  convertToArray(valueLabel = 'id', messageLabel = 'name') {
    let convertedArray = [];
    this.values.forEach((value) => {
      let item = {};
      item[valueLabel] = value;
      item[messageLabel] = this.messages.get(value);
      convertedArray.push(item);
    });
    return convertedArray;
  }

  has(key) {
    const value = this.values[key];
    return value !== undefined && value !== null && value !== ''
  }
}
