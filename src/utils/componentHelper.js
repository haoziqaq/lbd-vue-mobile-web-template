/**
 * @description 组件工具
 * @author 齐皓
 * @Date 2020/2/28
 */

/**
 * 向上找到最近的组件
 * @param context 当前组件实例
 * @param componentName 想找的组件名
 * @returns {Vue | null}
 */
export function findComponentUpward(context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}

/**
 * 向上找到所有的组件
 * @param context 当前组件实例
 * @param componentName 想找的组件名
 * @returns {Vue | null}
 */
export function findComponentsUpward(context, componentName) {
  let parents = []
  const parent = context.$parent

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent)
    return parents.concat(findComponentsUpward(parent, componentName))
  } else {
    return []
  }
}

/**
 * 向下找到最近的组件
 * @param context 当前组件实例
 * @param componentName 想找的组件名
 * @returns {Vue | null}
 */
export function findComponentDownward(context, componentName) {
  const childrens = context.$children
  let children = null

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name

      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) break
      }
    }
  }
  return children
}

/**
 * 向下找到所有的组件
 * @param context 当前组件实例
 * @param componentName 想找的组件名
 * @returns {Vue | null}
 */
export function findComponentsDownward(context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

/**
 * 找到组件的兄弟组件
 * @param context 当前组件实例
 * @param componentName 想找的组件名
 * @param exceptMe 是否排除自己
 * @returns {Vue[]}
 */
export function findBrothersComponents(context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName
  })
  let index = res.findIndex(item => item._uid === context._uid)
  if (exceptMe) res.splice(index, 1)
  return res
}