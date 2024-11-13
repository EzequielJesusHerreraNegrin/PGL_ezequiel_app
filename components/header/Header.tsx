import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const Header = () => {
  return (
    <View style={styles.headerBox}>
      <View style={{ flexDirection: "row" }}>
        <Link href={"/"} style={styles.homeLink}>
          <Entypo style={{ fontSize: 30, color: "#8C867B" }} name="home" />
        </Link>
        <Image
          style={styles.avatar}
          source={require("../../assets/mySelfHeader.jpeg")}
        ></Image>
      </View>
      <View style={styles.infoItemInfo}>
        <Text style={styles.infoItemTitle}>Ezequiel Jesús</Text>
        <Text style={styles.infoItemText}>
          Soy estudiante de Salesianos La Cuesta y en verano trabajo de Bombero
          forestal.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLink: {
    marginTop: 25,
    marginBottom: 27,
    marginRight: 50,
    paddingLeft: 5,
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#D1D1D1",
    borderRadius: 5,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
    borderColor: "#FFF",
    borderStyle: "solid",
    borderWidth: 2,
    marginRight: 80,
  },
  infoItemInfo: {
    margin: 10,
    backgroundColor: "#1083D6",
    padding: 10,
    borderRadius: 10,
    width: "90%",
  },
  infoItemText: {
    color: "#FFF",
  },
  infoItemTitle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  headerBox: {
    backgroundColor: "#004080",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30,
  },
});

export default Header;
