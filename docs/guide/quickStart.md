# 快速开始
如何再项目中使用组件库`HI-MAP`

## Vue版本
当前支持的Vue版本`>=^3.0.0`

## 1.安装
进入你的项目文件夹，使用NPM安装`HI-MAP`

```sh
$ npm i hi-map 
```

## 2.引入插件和样式
在`src/main.ts`文件中写入以下内容

```sh
import HiMap from 'hi-map'

createApp(App).use(HiMap).mount('#app')
```

## 3.使用
在`src/app.vue`文件中的`<template>`中增加一下内容

```sh
<template>
    <!--使用map组件-->
    <hi-map></hi-map>
</template>
```

## 4.启动开发调试

```sh
$ npm run dev
```