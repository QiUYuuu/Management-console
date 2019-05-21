// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueRouter from 'vue-router'
//import  DB from '../config/key'

import  Index from './components/index'
import  Login from './components/login'

Vue.config.productionTip = false;
Vue.use(VueRouter);

//const db = DB.mongoURI;


const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes:[
    {path:"/",component:Login},
    {path:"/index",component:Index}
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div>
    <router-view></router-view>
</div>
`
}).$mount("#app");
