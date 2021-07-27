import React from "react";
import {Layout} from "../../components/Layout"

export const LandingPage = () => {
  return <Layout inverse title="Eazy Meals" secondary={["Sign In","/auth/signin"]} 
  primary={["Create Account","/auth/register"]}
  ></Layout>
};

export default LandingPage;
