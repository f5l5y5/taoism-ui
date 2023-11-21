import hotkeys from 'hotkeys-js'

type THot = {
  key: string // 快捷键名称(例:alt+g,f6)
  callback?: () => void // 快捷键触发回调
  preventDefault?: boolean // 是否阻止默认事件(默认true)
  scope?: string // 快捷键范围(暂时不用)
  elementId?: string // 通过id快捷键绑定按钮(默认触发click)
  immediate?: boolean // 是否立刻注册快捷键
}

export const elementClick = (elementId: string) => {
  const element = document.getElementById(elementId ?? '')
  element && element.click() // 触发元素click效果
}
/** 注册快捷键(应用于全局快捷键) */
export const initHotkeys = async (params: THot) => {
  hotkeys(
    params.key,
    {
      scope: params.scope,
    },
    (e) => {
      params.preventDefault = params.preventDefault ?? true
      params.preventDefault && e.preventDefault
      params.callback && params.callback()
      params.elementId && elementClick(params.elementId ?? '')
    }
  )
}

/** 页面注册快捷键(页面卸载时解绑) */
export const useHotkeys = (params: THot, onMounted: Function, onUnmounted: Function) => {
  const unbindHotKey = () => hotkeys.unbind(params.key)
  const bindHotKey = () => initHotkeys(params)

  onMounted(() => {
    const immediate = params.immediate ?? true
    immediate && bindHotKey() // 初始化快捷键
  })
  onUnmounted(() => {
    unbindHotKey() // 解绑快捷键
  })

  return {
    unbindHotKey,
    bindHotKey,
  }
}
