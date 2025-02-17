import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import Header from "../../../components/header/Header";
import Entypo from "@expo/vector-icons/Entypo";

export const tabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        header: () => <Header />,
        tabBarLabelStyle: { fontSize: 15, fontWeight: "bold" },
        tabBarActiveTintColor: "#1083D6",
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="hobbiesPage"
        options={{
          title: "Hobbies",
          tabBarIcon: ({ color }) => (
            <Entypo name="list" style={styles.tabIcon} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="qrPage"
        options={{
          title: "Repo",
          tabBarIcon: ({ color }) => (
            <Entypo name="github" style={styles.tabIcon} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    fontSize: 30,
  },
  tabBar: {
    backgroundColor: "#8CD3F5",
  },
  tabScreen: {
    flex: 12,
  },
});

export default tabsLayout;
