import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
  state:{
    //token用来储存登陆用来验证的token
    //userInfo用来储存登陆用户的信息
    user: {}
  },
  getters: {
    token: (state) => {
      return state.user.token;
    },
    personalInfo: (state) => {
      return state.user.userInfo;
    }
  },
  mutations:{
    addToken(state,payload){
      state.user.token = payload;
    },
    addUserInfo: (state,payload) => {
      state.user.userInfo = payload;
    }
  },
  actions: {
    addToken: (context,payload) => {
      context.commit("addToken",payload);
    },
    addUserInfo: (context,payload) => {
      context.commit("addUserInfo",payload);
    }
  }
});
