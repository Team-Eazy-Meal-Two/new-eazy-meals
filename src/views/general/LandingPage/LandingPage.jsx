import React from "react";
import{ useLandingPage}from "./LandingPage.useLandingPage"
import { Layout } from "../../../components/Layout";

export const LandingPage = () => {
  const {hasLocalUsers}= useLandingPage()

  return (
    <Layout
      inverse
      title="Eazy Meals"
      secondary={["Sign In", !hasLocalUsers ?"/auth/signin":'/auth/select']}
      primary={["Create Account", "/create/name"]}
    />
  );
};

export default LandingPage;
