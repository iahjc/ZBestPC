# 优化

## 多js分离
## 进阶操作之开发模式
1. 安装webpack-dev-server
2. npm install webpack-dev-server --save-dev
3. 在webpack.config.js中添加webpack-dev-server配置

## 剥离css
1. 安装mini-css-extract-plugin
    npm install mini-css-extract-plugin -D
2. 对css文件压缩
3. 对css文件剥离

## css和js压缩

### js压缩
npm i -D uglifyjs-webpack-plugin

### css压缩
npm install css-minimizer-webpack-plugin --save-dev

### treeshaking触发条件
1. 通过解构的方式获取方法，可以触发treeshaking
2. 调用的npm包必须使用EMSmodule 6 规范
3. 同一文件的treeshaking有触发条件，条件就是mode=production
4. 一定要注意使用解构来加载模块

### splitChunks文件分割

### 模版引擎
    npm  i -D ejs-loader

### 清空dist目录
clean-webpack-plugin


