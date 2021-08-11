import React from "react";
import { Switch, Route } from "react-router-dom";

import { CreateEmail } from "../../views/create/CreateEmail";
import { CreateName} from "../../views/create/CreateName";
import { CreatePassword } from "../../views/create/CreatePassword";
import { CreatePhoto } from "../../views/create/CreatePhoto";
import { EnableSync } from "../../views/create/EnableSync";

 export const Create = () => {
  return (
    <Switch>
      <Route path="/create/name">
        <CreateName />
      </Route>

      <Route path="/create/photo">
        <CreatePhoto />
      </Route>

      <Route path="/create/sync">
        <EnableSync />
      </Route>

      <Route path="/create/email">
        <CreateEmail />
      </Route>

      <Route path="/create/password">
        <CreatePassword />
      </Route>
      
    </Switch>
  );
};

export default Create;
