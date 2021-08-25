import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { context as authContext } from "../../hooks/useAuth";

import { Demos } from "./App.Routing.Demos";
import { Auth } from "./App.Routing.Auth";
import { Create } from "./App.Routing.Create";
import { EmailSent } from "../../views/general/EmailSent";
import { General } from "./App.Routing.General";
import { ItemsList } from "../../views/ItemsList";
import { SyncEmail } from "../../views/sync/SyncEmail/SyncEmail";
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
      <Route path="/sync">{user ? <SyncEmail /> : <Redirect to="/" />}</Route>

      <Route path="/auth">
        {user ? <Redirect to="/sync/check " /> : <Auth />}
      </Route>

      <Route path="/create">
        {user ? <Redirect to="/sync/check" /> : <Create />}
      </Route>

      <Route path="/sent">
        <EmailSent />
      </Route>

      <General user={user} />
    </Switch>
  );
};
export default Routing;
