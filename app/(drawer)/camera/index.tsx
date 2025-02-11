import { View, Image, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Camera from "../../../components/camera/Camera";
import Ionicons from "@expo/vector-icons/Ionicons";

const index = () => {
  const [lastPicture, setLastPicture] = useState<string>("");
  const [gallery, setGallery] = useState<[]>([]);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.lastImageContainer}>
        {lastPicture == "" ? null : (
          <Image
            style={styles.lastImage}
            source={{ uri: `data:image/jpg;base64,${lastPicture}` }}
          />
        )}
      </View>
      {/* <View style={styles.buttonContainer}>
        <Button title=""></Button>
      </View> */}
      <Camera setLastPicture={setLastPicture} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    height: "100%",
  },
  lastImageContainer: {
    width: 55,
    height: 55,
    position: "absolute",
    zIndex: 2,
    top: 0,
    margin: 8,
    backgroundColor: "lightgray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: 55,
    height: 55,
    position: "absolute",
    zIndex: 2,
    top: 0,
    margin: 8,
    backgroundColor: "lightgray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  lastImage: {
    width: 48,
    height: 48,
  },
});
