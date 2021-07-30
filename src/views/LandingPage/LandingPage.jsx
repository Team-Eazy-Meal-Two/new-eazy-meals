import React from "react";
import {Layout} from "../../components/Layout";
import { Alert } from '../../components/Alert';
import { useLandingPage } from './LandingPage.useLandingPage';


  
  export const LandingPage = () => {
    const { checking } = useLandingPage();

    if (checking) return null;

 

  return (
  <Layout 
  inverse 
  title="Eazy Meals" 
  secondary={["Sign In","/auth/signin"]} 
  primary={["Create Account","/auth/register"]}
  />
  
  );

  };

export default LandingPage;
