import { FC } from "react";

//routing
import { Redirect, Route, Switch } from "react-router-dom";
import RouteMaster from "./routes/routes";
import { HOME_ROUTE } from "./consts/routes";

// components
import PrivateRoute from "./Components/Global/Routes/PrivateRoute";

// context
import { AuthState } from "./context/IAuthState";
import { useAuthState } from "./context/authState";

const App: FC = () => {

  const { authState } = useAuthState();

  return (
    <>
      <Switch>
        {RouteMaster.map((routeElement, index) => (
          <Route
            key={index}
            path={routeElement.path}
            render={() =>
              <PrivateRoute key={index}
                isPrivate={routeElement.isPrivate}
                isAuth={authState === AuthState.Authenticated}
                roles={routeElement.roles}>
                <routeElement.component />
              </PrivateRoute>
            }
          />
        ))}
        <Redirect from="*" to={HOME_ROUTE} />
      </Switch>
    </>
  );
}

export default App;
