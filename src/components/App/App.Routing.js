import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

export const Routing = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </HashRouter>
  );
};
export default Routing;
