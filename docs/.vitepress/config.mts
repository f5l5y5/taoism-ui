import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "公共库",
  description: "公共组件、工具库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide' },
      { text: '组件', link: '' },
      { text: '工具', link: '' }
    ],

    sidebar: [
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/f5l5y5/taoism-ui' }
    ]
  }
})
