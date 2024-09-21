import { lazy } from "react";
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home/index"));
const Cart = lazy(() => import("./pages/cart/index"));

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/cart",
    component: Cart,
    exact: true,
  },
  {
    path: "*",
    component: () => <h1>404 Not Found</h1>,
  },
];

const Routes = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;
