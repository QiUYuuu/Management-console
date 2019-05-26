// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import './axios/request'
import VueRouter from 'vue-router'
import { store } from  './store/store'
import { routes } from './vue-router/vue-routes'


Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;
Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes
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
