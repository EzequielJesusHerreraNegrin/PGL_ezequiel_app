import { Redirect } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

function AppPage() {
  return <Redirect href="/welcome"></Redirect>;
}

export default AppPage;
