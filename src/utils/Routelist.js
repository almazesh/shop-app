import Authorization from '../pages/Authentication/Authorization/Authorization';
import Registration from '../pages/Authentication/Registration/Registration';
import Main from '../pages/Main/Main';



export const RouteAuthFalseList = [
  {
    id:1,
    path:'/authorization',
    element:Authorization
  },
  {
    id:2,
    path:'/registration',
    element:Registration
  },
]

export const RouteAuthTrueList = [
  {
    id:1,
    path:'/',
    element:Main
  },
]