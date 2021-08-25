import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { SyncEmail } from "../../views/sync/SyncEmail/SyncEmail";
import { SyncCheck } from "../../views/sync/SyncCheck/SyncCheck";
import EmailSent from "../../views/general/EmailSent";
import { LandingPage } from "../../views/general/LandingPage/LandingPage";

export const General = (props) => {
  const { user } = props;
  return (
    <Switch>
      <Route path="/sent">
        <EmailSent />
      </Route>

      <Route path="/sync/check">
        <SyncCheck />
      </Route>

      <Route path="/sync/email">
        <SyncEmail />
      </Route>
      
        <Route path="/">
          {user ? <Redirect to="/sync/check" /> : <LandingPage />}
        
      </Route>
    </Switch>
  );
};

export default General;
