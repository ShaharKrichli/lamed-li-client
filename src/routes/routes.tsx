// components
import Landing from "../Pages/Landing/Landing";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TeacherSearch from "../Pages/TeacherSearch/TeacherSearch";
import TeacherCards from "../Components/TeacherCard/TeacherCards";

//routes 
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, TEACHER_SEARCH_ROUTE,TEACHER_CARDS_ROUTE } from "../consts/routes";

const RouteMaster = [
  {
    path: HOME_ROUTE,
    component: Landing,
  },
  {
    path: LOGIN_ROUTE,
    component: Login,
  },
  {
    path: REGISTER_ROUTE,
    component: Register,
  },
  {
    path: TEACHER_SEARCH_ROUTE,
    component: TeacherSearch,
  },
  {
    path: TEACHER_CARDS_ROUTE,
    component: TeacherCards,
  },
];
export default RouteMaster;
