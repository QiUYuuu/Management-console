// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import './axios/request'
import VueRouter from 'vue-router'
import { store } from  './store/store'
//import  DB from '../config/key'

import  Index from './components/index'
import  Login from './components/login'
import  Reg from './components/reg'
import Users from './components/Users'

Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;
Vue.use(VueRouter);

//const db = DB.mongoURI;


const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes:[
    {path:"/",component:Login},
    {path:"/index",component:Index},
    {path: "/reg",component: Reg},
    {path: "/users",component: Users}
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  store: store,
  template: `
  <div>
    <router-view></router-view>
</div>
`
}).$mount("#app");
