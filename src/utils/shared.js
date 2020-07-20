/**
 * @description 共享js方法
 * @author 齐皓
 * @Date 2020/4/23
 */

export function toRawType(v) {
  return Object.prototype.toString.call(v).slice(8, -1);
}

export function isUndef(v) {
  return v === undefined || v === null
}

export function isDef(v) {
  return v !== undefined && v !== null
}

export function isTrue(v) {
  return v === true
}

export function isFalse(v) {
  return v === false
}

export function isPrimitive(v) {
  return (
    typeof v === 'string' ||
    typeof v === 'number' ||
    typeof v === 'symbol' ||
    typeof v === 'boolean'
  )
}

export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

export function isPlainObject(obj) {
  return toRawType(obj) === 'Object'
}

export function isArray(arr) {
  return toRawType(arr) === 'Array'
}

export function isPromise(v) {
  return (
    isDef(v) &&
    typeof v.then === 'function' &&
    typeof v.catch === 'function'
  )
}

export function toString(v) {
  return isPrimitive(v) ? String(v) : JSON.stringify(v);
}

export function toNumber(v) {
  const n = parseFloat(v)
  return isNaN(n) ? v : n
}

export function removeItem(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

export function hasOwn(val, key) {
  return Object.prototype.hasOwnProperty.call(val, key);
}

export function getKey(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value)
}

export function toOptions(obj, labelTransformer = String, { labelName = 'id', valueName = 'name' } = {}) {
  return Object.keys(obj).map(key => ({
    [labelName]: labelTransformer(key),
    [valueName]: obj[key]
  }))
}
