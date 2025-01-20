import { Redirect } from "expo-router";
import React from "react";

function AppPage() {
  return <Redirect href="user-management/login"></Redirect>;
}

export default AppPage;
