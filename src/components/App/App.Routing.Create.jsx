import React from "react";
import { Switch, Route } from "react-router-dom";

import { CreateName } from "../../views/create/CreateName";
import { CreatePhoto } from "../../views/create/CreatePhoto";

export const Create = () => {
  return (
    <Switch>
      <Route path="/create/name">
        <CreateName />
      </Route>

      <Route path="/create/photo">
        <CreatePhoto />
      </Route>
    </Switch>
  );
};

export default Create;
