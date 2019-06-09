import {ADD_ROUTES} from './mutations_type'
import Menufilter from './menufilter'
import router from '../vue-router/vue-routes'
const addRoutes = {
  state: {
    routeData: []
  },
  mutations: {
    [ADD_ROUTES](state, addrouter) {
      // let routes = [];
      Menufilter(routes, addrouter);// 将后台的路由数据components转化成组件
      router.addRoutes(addrouter);  // 添加路由
      router.push('/index/');
    }
  },
  actions: {
    add_Routes({commit}, addrouter) {
      commit(ADD_ROUTES, addrouter)
    }
  }
};
export default addRoutes
