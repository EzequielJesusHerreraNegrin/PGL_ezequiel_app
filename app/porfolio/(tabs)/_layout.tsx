import { Tabs } from "expo-router";
import React from "react";
import Header from "../../../components/Header";

export const tabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Tabs.Screen name="samplePage" />
      <Tabs.Screen name="samplePageB" />
    </Tabs>
  );
};

export default tabsLayout;
