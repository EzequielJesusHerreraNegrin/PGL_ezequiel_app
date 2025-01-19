import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";

function WelcomePage() {
  return (
    <ImageBackground source={require("../../../assets/beachGif.gif")}>
      <View style={styleSheet.container}>
        <View style={styleSheet.headerBox}>
          <Text style={styleSheet.headerTitle}>Bienvenido a mi App</Text>
        </View>
        <View style={styleSheet.bodyBox}>
          <View>
            <Image
              source={require("../../../assets/mySelfWelcome.png")}
              style={styleSheet.imageStyle}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  headerBox: {
    flex: 1,
    top: 30,
  },
  headerTitle: {
    color: "#03fcc2",
    fontWeight: "bold",
    fontSize: 30,
    fontStyle: "italic",
  },
  bodyBox: {
    flexDirection: "column",
    flex: 5,
    gap: 100,
    alignItems: "center",
  },
  imageStyle: {
    width: 300,
    height: 300,
    borderRadius: 900,
  },
  linkBox: {
    backgroundColor: "#03dffc",
    padding: 20,
    borderRadius: 15,
  },
  linkText: {
    color: "#45a8b5",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default WelcomePage;
