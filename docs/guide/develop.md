# 开发须知

## 目录结构
我们已经为你生成了一个完整的开发框架，提供了涵盖整体开发流程的功能和坑位，下面是整个目录结构

```shell
📦map-library
 ┣ 📂docs               
 ┃ ┣ 📂.vitepress
 ┃ ┃ ┗ 📜config.ts      # 文档基础配置，包含文档路由，全局设置
 ┃ ┣ 📂components       # 组件文档，通过路由配置访问
 ┃ ┣ 📂examples         # 示例，可在组件文档中引入
 ┃ ┣ 📂guide            # 指引，通过路由配置访问
 ┃ ┣ 📂public           # 本地静态资源
 ┃ ┣ 📂vite.config.ts   # 文档打包配置
 ┃ ┗ 📜index.md         # 文档目录
 ┣ 📂packages           
 ┃ ┣ 📂map             # 地图组件
 ┃ ┣ 📜widthInstall.ts # 全局注册方法
 ┃ ┗ 📜index.ts
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜vite.config.ts
```

## 开发流程
   在`packages`文件开发组件功能<br /><br />
   在`packages/index.ts`配置自己开发的组件，这个操作会自动全局注册组件<br /><br />
   在`docs/components`下面创建自己开发组件的开发文档<br /><br />
   在`docs/.vitepress/config.ts`文件中配置路由，链接组件文档页面
