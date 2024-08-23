import { defineConfig } from "vitepress"
import { mdPlugin } from "./config/plugins"
export default defineConfig({
  title: "HI-MAP",
  description: "地图组件库",
  lang: "cn-ZH",
  lastUpdated: true,
  head: [
    ['link', {rel: 'icon', href: '/favicon.svg'}]
  ],
  themeConfig: {
    logo: "/favicon.svg",
    siteTitle: "HI-MAP",
    outline: 3,
    nav: [
      {
        text: "指南",
        link: "/guide/",
        activeMatch: '/guide/'
      },
      { 
        text: "地图组件",
        link: "/components/HiMap/base.md",
        activeMatch: '/components/'
      },
    ],
    sidebar: {
      "/components": [
        {
          text: "地图组件",
          items: [
            { text: "HiMap", link: "/components/HiMap/base.md" },
            { text: "HiCircle", link: "/components/HiCircle/base.md"}
          ]
        },
      ],
      "/guide/": [
        {
          text: '基础',
          items: [
            {
              text: '介绍',
              link: '/guide/'
            },
            {
              text: '开发须知(组件库开发成员)',
              link: '/guide/develop'
            },
            {
              text: '快速开始',
              link: '/guide/quickStart'
            }
          ]
        }
      ]
    },
    aside: false,
    socialLinks: [
      { icon: 'github', link: 'http://100.25.199.242/code/Product_Component_Library/map-library/-/tree' }
    ],
  },
  markdown: {
    headers: {
      level: [0, 0]
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: "github-light", dark: "github-dark" },
    config: md => mdPlugin(md)
  },
  
})
