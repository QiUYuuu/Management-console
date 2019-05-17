// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import  Index from './components/index'

Vue.config.productionTip = false;
Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes:[
    {path:"/",component:Index}
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