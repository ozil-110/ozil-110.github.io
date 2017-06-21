# ozil-110's blog

这是一个基于 ``github page`` 和 ``github api`` 搭建的单页面静态博客,只在Windows下测试。

## 使用

``git clone https://github.com/ozil-110/ozil-110.github.io.git``拉取代码。

## 环境搭建

### 运行环境

- [node.js@7.7.0](https://nodejs.org)
- node.js@6.10.x

```bash
$ node -v
v7.7.0

### 依赖

- webpack@1.13.2
- webpack@1.15


## 命令使用

### 安装

推荐使用cnpm安装 ``npm install -g cnpm --registry=https://registry.npm.taobao.org``。
``` bash
$ cd ozil-110.github.io
$ npm install
```

### 运行

``` js
"scripts": {
  "dev": "cross-env NODE_ENV=development webpack-dev-server --hot --inline",
  "build": "cross-env NODE_ENV=production webpack"
},
```

#### 命令

``` bash
// 开发
$ npm run dev

// 打包
$ npm run build
```

## 技术栈

- react
- react-router
- redux
- webpack
- es6
- 版本看package.json

## 浏览器兼容

- Chrome
- 其它浏览器没测过

## 其他

使用webpack抽离出独立的css文件，对js和css进行压缩，抽离出公共的模块，分片打包，按需异步加载js；后面将会推出服务端渲染的版本。

谢谢@cobish。