import React from "react";
import Hobbies from "../../../components/hobbies/Hobbies";
import { View, StyleSheet } from "react-native";

const hobbiesPage = () => {
  return (
    <View style={styles.hobbiesBox}>
      <Hobbies />
    </View>
  );
};

const styles = StyleSheet.create({
  hobbiesBox: {
    width: "100%",
    height: "100%",
  },
});

export default hobbiesPage;
