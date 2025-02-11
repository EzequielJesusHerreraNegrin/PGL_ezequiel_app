import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import Ionicons from "@expo/vector-icons/Ionicons";
import { user_service_functions } from "../../services/user-service";
import { storage_functions } from "../../services/Storage_functions";

type CameraProps = {
  setLastPicture: Function;
};

const Camera = ({ setLastPicture }: CameraProps) => {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();

  const [facing, setFacing] = useState<CameraType>("back");
  const [flash, setFlash] = useState<boolean>(false);

  const toggleFacing = () =>
    setFacing((face) => (face === "back" ? "front" : "back"));

  const toggleFlash = () => setFlash((flash) => !flash);

  const takePicture = async () => {
    console.log("taking picture...");
    const picture = await cameraRef.current?.takePictureAsync({ base64: true });
    const mytoken: string | null = await storage_functions.get(
      storage_functions.KEY.register
    );

    if (!mytoken) {
      alert("Error: la sesión a caducado.");
      return;
    }

    if (picture!.base64) {
      await user_service_functions.savedPhoto(
        mytoken,
        picture!.height,
        picture!.width,
        picture!.base64
      );
    }

    if (picture != null && picture.base64 != null) {
      setLastPicture(picture.base64);
    } else {
      alert("Ocurrió un error sacando una foto.");
    }

    if (!permission) {
      return <View />;
    } else if (!permission.granted) {
      return (
        <Button onPress={requestPermission} title="Dar permisos de cámara" />
      );
    }
  };

  return (
    <Modal>
      <CameraView
        enableTorch={flash}
        style={styles.camera}
        facing={facing}
        mode="picture"
        ref={cameraRef}
        onCameraReady={() => console.log("Camera ready!")}
      >
        <View style={styles.buttonContainer}>
          <Pressable style={styles.iconButton} onPress={toggleFlash}>
            <Ionicons
              name={flash ? "flash-off" : "flash"}
              size={32}
              color="black"
            />
          </Pressable>
          <Pressable style={styles.pictureButton} onPress={takePicture}>
            <Text> </Text>
          </Pressable>
          <Pressable style={styles.iconButton} onPress={toggleFacing}>
            <Ionicons name="camera-reverse" size={32} color="black" />
          </Pressable>
        </View>
      </CameraView>
    </Modal>
  );
};

export default Camera;

const styles = StyleSheet.create({
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "flex-end",
    justifyContent: "space-between",
    margin: 40,
  },
  iconButton: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "50%",
    borderColor: "gray",
    borderWidth: 2,
    padding: 8,
  },
  pictureButton: {
    height: 80,
    width: 80,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "50%",
    borderColor: "gray",
    borderWidth: 6,
  },
});
