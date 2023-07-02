// components
import Landing from "../Pages/Landing/Landing";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TeacherSearch from "../Pages/TeacherSearch/TeacherSearch";

//routes 
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, TEACHER_SEARCH_ROUTE } from "../consts/routes";

const RouteMaster = [
  {
    path: HOME_ROUTE,
    isCheckUrlLetters: false,
    component: Landing,
    isPrivate: false,
  },
  {
    path: LOGIN_ROUTE,
    isCheckUrlLetters: false,
    component: Login,
    isPrivate: false,
  },
  {
    path: REGISTER_ROUTE,
    isCheckUrlLetters: false,
    component: Register,
    isPrivate: false,
  },
  {
    path: TEACHER_SEARCH_ROUTE,
    isCheckUrlLetters: false,
    component: TeacherSearch,
    isPrivate: true,
  },
];
export default RouteMaster;
