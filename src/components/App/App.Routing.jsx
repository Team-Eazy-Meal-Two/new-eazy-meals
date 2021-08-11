import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { context as authContext } from "../../hooks/useAuth";

import { Demos } from "./App.Routing.Demos";
import { Auth } from "./App.Routing.Auth";
import { Create } from "./App.Routing.Create";
import { EmailSent } from "../../views/general/EmailSent";
import { LandingPage } from "../../views/general/LandingPage";

import { ItemsList } from "../../views/ItemsList";

const Items = () => {
  return (
    <Switch>
      <Route path="/items/list">
        <ItemsList />
      </Route>
    </Switch>
  );
};

export const Routing = () => {
  const { loading, user } = useContext(authContext);

  if (loading) {
    return null;
  }
  return (
    <Switch>
      <Route path="/demo">
        <Demos />
      </Route>

      <Route path="/items">{user ? <Items /> : <Redirect to="/" />}</Route>

      <Route path="/auth">
        {user ? <Redirect to="/items/list" /> : <Auth />}
      </Route>
      
      <Route path="/create">
        {user ? <Redirect to="/items/list" /> : <Create />}
      </Route>

      <Route path="sent">
        <EmailSent />
      </Route>

      <Route path="/">
        {user ? <Redirect to="/items/list" /> : <LandingPage />}
      </Route>
    </Switch>
  );
};
export default Routing;
