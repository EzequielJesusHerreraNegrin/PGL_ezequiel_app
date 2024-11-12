import { Tabs } from "expo-router";
import React from "react";

export const tabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="samplePage" />
      <Tabs.Screen name="samplePageB" />
    </Tabs>
  );
};

export default tabsLayout;
