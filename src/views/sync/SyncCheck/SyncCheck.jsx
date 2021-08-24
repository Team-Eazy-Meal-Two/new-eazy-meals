import React from "react";
import { CustomIcon } from "../../../components/CustomIcon";
import { Layout } from "../../../components/Layout";
import useSyncEmail from "../SyncEmail/SyncEmail.useSyncEmail";
import { Text } from "../../../components/Text";

export const SyncCheck = () => {
  const { online } = useSyncEmail();

  if (!online) {
    return (
      <Layout
        title="Offline"
        inverse
        padded
        secondary={["Remind me later", "/items/list"]}
      >
        <CustomIcon image="noCloud" size="m" inverse />
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
