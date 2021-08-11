import React from "react";
import { Switch, Route } from "react-router-dom";

import { ResetPassword}  from "../../views/auth/ResetPassword";
import { SignIn } from "../../views/auth/SignIn";
import { UserSelect }from "../../views/auth/UserSelect";
import { UserSignIn }from "../../views/auth/UserSignIn";






export const Auth = ()=>{
  return (
    <Switch>
       <Route path="/auth/signin">
        <SignIn />
      </Route>

      <Route path="/auth/reset">
        <ResetPassword />
      </Route>

      <Route path="/auth/select">
        <UserSelect />
      </Route>
      <Route path="/auth/auto">
        <UserSignIn />
      </Route>
      <Route path="/recovery_token">
        <div>1231</div>
        <UserSignIn />
      </Route>
    </Switch>
  );
}


export default Auth;
