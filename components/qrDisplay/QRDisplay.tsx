import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import QRCode from "react-native-qrcode-svg";

const QRdisplay = () => {
  return (
    <View style={styles.bodystails}>
      <ImageBackground
        source={require("../../assets/lofiWorking.gif")}
        style={styles.ImageBackground}
      >
        <View style={styles.CentrarcodigoQR}>
          {<QRCode value="https://github.com/adhernea" />}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bodystails: {
    width: "100%",
    borderWidth: 5,
    borderColor: "#332e1d",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  CentrarcodigoQR: {
    backgroundColor: "",
    zIndex: 99,
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  ImageBackground: {
    width: "100%",
    height: "150%",
    resizeMode: "cover",
  },
});

export default QRdisplay;
