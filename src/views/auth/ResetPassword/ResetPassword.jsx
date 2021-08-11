import React from "react";
import { Layout } from "../../../components/Layout";
import { Input } from "../../../components/Input";
import { useResetPassword } from "./ResetPassword.useResetPassword";
import { ALERTS } from "./ResetPassword.constant";

export const ResetPassword = () => {
  const {alert, setEmail, email, send} = useResetPassword();
  return (
    <Layout
      form
      title="Reset Password"
      primary={["send", send]}
      secondary={["cancel", "/auth/sigin"]}
      alert={alert ? ALERTS[alert] : undefined}
    >
      <Input label="Email" onChange={setEmail} value={email} />
    </Layout>
  );
};

export default ResetPassword;
