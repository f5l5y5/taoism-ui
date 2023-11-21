# shortcut

主要通过hotkeys-js插件实现快捷键功能

# 使用步骤

```
yarn add @taoismcn/shortcut

import { initHotkeys, useHotkeys } from '@taoismcn/shortcut'
// 全局注册
initHotkeys({
  key: 'f2',
  callback: () => {
    window.open(`xxx`)
  },
})
// 局部使用
useHotkeys({
  key: 'alt+f9',
  elementId,
})

```

