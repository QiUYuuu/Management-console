import  Index from '../components/index'
import  Login from '../components/admin/login'
import  Reg from '../components/admin/reg'
import Users from '../components/Users'
import Edit from '../components/admin/Edit'
import Details from '../components/UserDetails'
import Delete from '../components/admin/Delete'
import Information from '../components/Information_Center/Information_Center'
import ChangeUserInfo from '../components/Information_Center/changeUserInfo'
import ChangePassword from '../components/Information_Center/ChangePassword'
import Notice from '../components/Information_Center/Notice'


export const routes = [
  {path:"/",component:Login},
  {path: "/login",component:Login},
  {path:"/index",component:Index,children: [
      {path: "/reg",component: Reg},
      {path: "/users",component: Users},
      {path: "/users/details",component: Details},
      {path: "/users/edit",component: Edit},
      {path: "/users/del",component: Delete},
      {path: "/information",component:Information,children:[
          {path: "/information/changeUserInfo",component: ChangeUserInfo},
          {path: "/information/changePassword",component: ChangePassword},
          {path: "/information/notice",component:Notice}
        ]}
    ]}
];
