import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const Header = () => {
  return (
    <View style={styles.headerBox}>
      <View style={{ flexDirection: "row" }}>
        <Link href={"/"} style={styles.homeLink}>
          <Entypo style={{ fontSize: 30 }} name="home" />
        </Link>
        <Image
          style={styles.avatar}
          source={require("../../assets/mySelfHeader.jpeg")}
        ></Image>
      </View>
      <View style={styles.infoItemInfo}>
        <Text style={styles.infoItemTitle}>Ezequiel Jesús</Text>
        <Text>
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
    marginRight: 50,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
    marginRight: 80,
  },
  infoItemInfo: {
    margin: 10,
    backgroundColor: "#1083D6",
    padding: 10,
    borderRadius: 10,
    width: "90%",
  },
  infoItemTitle: {
    color: "#000",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  headerBox: {
    backgroundColor: "#b6f542",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30,
  },
});

export default Header;
