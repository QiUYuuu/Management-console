// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import './axios/request'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { store } from  './store/store'
import router from './vue-router/vue-routes'


Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI,{ size: 'small', zIndex: 3000 });


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth === undefined) {
    if (store.getters.token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: `
  <div>
    <router-view></router-view>
</div>
`
}).$mount("#app");
