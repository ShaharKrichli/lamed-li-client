import { FC } from "react";

//routing
import { Redirect, Route, Switch } from "react-router-dom";
import RouteMaster from "./routes/routes";
import { HOME_ROUTE } from "./consts/routes";
import PrivateRoute from "./Global/Routes/PrivateRoute";

const App: FC = () => {

  return (
    <>
        <Switch>
          {RouteMaster.map((routeElement, index) => (
            <Route
              key={index}
              path={routeElement.path}
              render={() =>
                <PrivateRoute key={index}
                  isCheckUrlLetters={routeElement.isCheckUrlLetters}
                  isPrivate={routeElement.isPrivate}>
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
