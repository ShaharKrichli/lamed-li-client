// components
import Landing from "../Pages/Landing/Landing";
import LandingLogin from "../Pages/Landing/LandingLogin";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TeacherSearch from "../Pages/TeacherSearch/TeacherSearch";

//routes 
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, TEACHER_SEARCH_ROUTE, HOME_LOGIN_ROUTE } from "../consts/routes";

const RouteMaster = [
  {
    path: HOME_ROUTE,
    component: Landing,
    isPrivate: false,
    roles: []
  },
  {
    path: HOME_LOGIN_ROUTE,
    component: LandingLogin,
    isPrivate: false,
    roles: []
  },
  {
    path: LOGIN_ROUTE,
    component: Login,
    isPrivate: false,
    roles: []
  },
  {
    path: REGISTER_ROUTE,
    component: Register,
    isPrivate: false,
    roles: []
  },
  {
    path: TEACHER_SEARCH_ROUTE,
    component: TeacherSearch,
    isPrivate: false,
    roles: []
  },
];
export default RouteMaster;
