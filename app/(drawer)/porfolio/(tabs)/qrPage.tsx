import React from "react";
import { View, StyleSheet } from "react-native";
import QRdisplay from "../../../../components/qrDisplay/QRDisplay";

const samplePage = () => {
  return (
    <View style={style.qrBox}>
      <QRdisplay />
    </View>
  );
};

const style = StyleSheet.create({
  qrBox: {
    height: "100%",
    width: "100%",
    backgroundColor: "#322e1c",
    margin: 0,
  },
});

export default samplePage;
