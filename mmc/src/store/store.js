import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
  state:{
    user: {}
  },
  getters: {
    addToken(response){
      state.user.token = response;
    }
  },
  mutations:{
    addToken(state,response){
      state.user.token = response;
    }
  },
  actions: {
    reducePrice: (context,payload) => {
      setTimeout(function(){
        context.commit("reducePrice",payload);
      },2000);
    }
  }
});
