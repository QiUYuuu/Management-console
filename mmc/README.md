# mmc

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:4050
npm run dev

# build for production with minification
npm run build

# establishment of local mongodb database
node mongodb.js

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

前端本地端口:  http://localhost:4050</br>
后台端口  http://localhost:2222</br>
      注册接口 http://localhost:2222/reg</br>
      登陆接口  http://localhost:2222/login</br>
今天新增了几个数据库原型  2019.5.19</br>
新增注册登录模块，并且用到了session保存登陆状态，crypto对密码进行加密 2019.5.21
