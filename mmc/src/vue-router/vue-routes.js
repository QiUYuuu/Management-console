import  Index from '../components/index'
import  Login from '../components/login'
import  Reg from '../components/reg'
import Users from '../components/Users'
import Edit from '../components/Edit'
import Details from '../components/UserDetails'


export const routes = [
  {path:"/",component:Login},
  {path:"/index",component:Index},
  {path: "/reg",component: Reg},
  {path: "/users",component: Users},
  {path: "/users/details",component: Details},
  {path: "/users/edit",component: Edit}
];
