import { Redirect } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

function AppPage() {
  return <Redirect href="/welcome"></Redirect>;
}

const styleSheet = StyleSheet.create({});

export default AppPage;
