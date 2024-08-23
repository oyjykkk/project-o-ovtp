# 开发须知

## 目录结构
我们已经为你生成了一个完整的开发框架，提供了涵盖整体开发流程的功能和坑位，下面是整个目录结构

```shell
📦 map-library
 ┣ 📂docs               
 ┃ ┣ 📂.vitepress
 ┃ ┃ ┗ 📜config.ts     # 文档基础配置，包含文档路由，全局设置
 ┃ ┣ 📂components       # 组件文档，通过路由配置访问
 ┃ ┣ 📂examples         # 示例，可在组件文档中引入
 ┃ ┣ 📂guide            # 指引，通过路由配置访问
 ┃ ┣ 📂public           # 本地静态资源
 ┃ ┣ 📂vite.config.ts   # 文档打包配置
 ┃ ┗ 📜index.md         # 文档目录
 ┣ 📂packages           
 ┃ ┣ 📂...              # 组件
 ┃ ┣ 📜widthInstall.ts  # 全局注册方法
 ┃ ┗ 📜index.ts
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜vite.config.ts
```

## 开发流程
* 下载依赖包
::: code-group
```sh [pnpm]
$ pnpm install
```
```sh [npm]
$ npm install
```
```sh [yarn]
$ yarn install
```
:::

* 运行项目文档
::: code-group
```sh [pnpm]
$ pnpm run docs:dev
```
```sh [npm]
$ npm run docs:dev
```
```sh [yarn]
$ yarn run docs:dev
```
:::

* 进入`packages`开发组件功能

* 进入`packages/index.ts`，`packages/components.d.ts`配置组件及组件类型

* 进入`docs/examples`开发组件demo，用于组件文档引用

* 进入`docs/components`下面创建自己开发组件的开发文档

* 进入`docs/.vitepress/config.ts`文件中配置路由，链接组件文档页面

## 文档发布流程
* 生成静态文件
:::code-group
```sh [pnpm]
$ pnpm run docs:build
```
```sh [npm]
$ npm run docs:build
```
```sh [yarn]
$ yarn run docs:build
```
:::

* 进入静态文件所在文件夹
```sh
$ cd docs/.vitepress/dist
```

* 运行git指令
```sh
$ git init
$ git add -A
$ git commit -m 'deploy'

$ git push -f xxxx
```
## npm包版本迭代
当进行了一些变更之后，可以手动去变更 `package.json` 的版本号，当然这是一种非常低效且不优雅的做法，手动变更版本号存在太多不确定的因素，比如改错版本号或跳过某个版本号；同时，一般我们在生成一个新的版本后要打一个 tag 对当前版本进行留档，纯手动操作的话会有很多的工作量。因此我们需要一个更加`靠谱`的迭代版本号的方案。

::: details 查看npm 版本规范

npm 的语义化版本，共三位，以’.’隔开，从左至右依次代表：

* 主版本（major）
* 次要版本（minor）
* 补丁版本（patch）

举例来说：1(major).0(minor).0(patch)
当然有时某些包还存在预览版本，预览版本的版本号要与前三位版本号使用 - 进行间隔，如：

* 1.0.0-1
* 1.0.0-alpha.1
* 1.0.0-beta.1
* 1.0.0-rc.1

:::

* 使用 npm version 变更版本号
对于一般的迭代，使用major/minor/path即可,假设我们现在的版本号是1.0.0

```sh
$ npm version major => 2.0.0
$ npm version minor => 1.1.0
$ npm version path => 1.0.1
```
执行成功后，会自动生成一个 commit（commit message 默认为版本号），同时在这次自动生成的 commit 上打一个 tag，tag 名称即为以 v 开头的版本号名称

* 发布

```sh
$ npm publish --access public
```