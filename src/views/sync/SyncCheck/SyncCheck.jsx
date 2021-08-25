import React from "react";
import { CustomIcon } from "../../../components/CustomIcon";
import { Layout } from "../../../components/Layout";
import { useSyncCheck } from "./SyncCheck.useSyncCheck";
import { Text } from "../../../components/Text";
import { Redirect } from "react-router";

export const SyncCheck = () => {
  const { online, user, cancelVerification } = useSyncCheck();

  if (!user) {
    return null;
  }

  if (user.type === "online"){
      return <Redirect to="/items/list"/>
  }

  if (user.type === "verifying"){
      return (
        <Layout
          title="Email sent"
          inverse
          padded
          primary={["Remind me later", "/items/list"]}
          secondary={["Cancel Verification", cancelVerification]}
        >
          <CustomIcon image="email" size="l" inverse />
          <Text size="m" inverse>
            An email has been sent to "<em>{user.email}</em>". Please
            check your inbox or spam folder and click the link inside the email.
          </Text>
        </Layout>
      );
  }

  if (!online) {
    return (
      <Layout
        title="Offline"
        inverse
        padded
        secondary={["Remind me later", "/items/list"]}
      >
        <CustomIcon image="noCloud" size="l" inverse />
        <Text size="m" inverse>
          Data syncing is disabled, but you will be prompted again to sync when
          online.
        </Text>
      </Layout>
    );
  }

  return (
    <Layout
      title="Set Up Sync"
      inverse
      padded
      primary={["Continue", "#"]}
      secondary={["Cancel", "/items/list"]}
    >
      <CustomIcon image="activeCloud" size="m" inverse />
      <Text size="m" inverse>
        We recommend that you set up data syncing on your profile. This allows
        you to back up and sync data across devices.
      </Text>
    </Layout>
  );
};

export default SyncCheck;
