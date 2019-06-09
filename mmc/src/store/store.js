import Vue from 'vue'
import Vuex from 'vuex'
//vuex插件  将数据存储到sessionStorage中
import createPersistedState from 'vuex-persistedstate'
// import addRoutes from './addRoutes'
import router from "../vue-router/vue-routes";
import Menufilter from './menufilter'
import {ADD_ROUTES} from './mutations_type'


Vue.use(Vuex);
export const store = new Vuex.Store({

  //配置vuex-persistedstate
  plugins: [
    createPersistedState({
    storage: window.sessionStorage
  })
  ],

  state:{
    //token用来储存登陆用来验证的token
    //userInfo用来储存登陆用户的信息
    user: {},
    routes: [],
    allRoutes: []
  },
  getters: {
    token: (state) => {
      return state.user.token;
    },
    personalInfo: (state) => {
      return state.user.userInfo;
    },
    getuser: (state) => {
      return state.user;
    },
    getRoutes: (state) => {
      return state.allRoutes;
    }
  },
  mutations:{
    addToken(state,payload){
      state.user.token = payload;
    },
    addUserInfo: (state,payload) => {
      state.user.userInfo = payload;
    },
    addRouters: (state,payload) => {
      let routes = [];
      Menufilter(routes, payload);// 将后台的路由数据components转化成组件
      routes.forEach((item)=>{
        router.options.routes.push(item);
      });
      router.addRoutes(routes);     // 添加路由
      //router.options.routes.push(routes);
      console.log(router.options.routes);
    },
    setAllRoutes: (state,payload) => {
      state.allRoutes = payload;
    }
  },
  actions: {
    addToken: (context,payload) => {
      context.commit("addToken",payload);
    },
    addUserInfo: (context,payload) => {
      context.commit("addUserInfo",payload);
    },
    addRoutes: (context, addrouter) => {
      context.commit("addRouters", addrouter)
    },
    setAllRoutes: (context, payload) => {
      context.commit("setAllRoutes", payload)
    }
  }
});
