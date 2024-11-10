import { Tabs } from "expo-router";
import React from "react";

export default () => {
  return (
  <Tabs>
    <Tabs.Screen name="samplePage" />
    <Tabs.Screen name="samplePageB" />
  </Tabs> 
)
};
