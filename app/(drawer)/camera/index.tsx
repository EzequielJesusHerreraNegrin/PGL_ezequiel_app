import {
  View,
  Image,
  StyleSheet,
  Button,
  Pressable,
  ScrollView,
  Text,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import Camera from "../../../components/camera/Camera";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList } from "react-native-gesture-handler";
import { user_service } from "../../../services/user-service";
import { storage_functions } from "../../../services/Storage_functions";
import { camera_service } from "../../../services/camera-service";

type Photo = {
  id: number;
  height: number;
  width: number;
  encodedData: string;
};

const index = () => {
  const [lastPicture, setLastPicture] = useState<string>("");
  const [gallery, setGallery] = useState<Photo[]>([]);
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [zoom, setzoom] = useState<any | null>(null);

  useEffect(() => {
    const checkGalery = async () => {
      const token = await storage_functions.get(storage_functions.KEY.register);
      const fetchedPictures = await camera_service.getAllPhotos(token);
      if (fetchedPictures == null) {
        alert("Algo no va bien, reinicia la sesión!!.");
      }
      setGallery(fetchedPictures);
    };

    checkGalery();
  }, [gallery]);

  return (
    <View style={styles.pageContainer}>
      {showCamera == true ? (
        <View>
          <View style={styles.lastImageContainer}>
            {lastPicture == "" ? null : (
              <Image
                style={styles.lastImage}
                source={{ uri: `data:image/jpg;base64,${lastPicture}` }}
              />
            )}
          </View>
          <Camera
            setLastPicture={setLastPicture}
            setShowCamera={setShowCamera}
            showCamera={showCamera}
          />
        </View>
      ) : (
        <>
          <FlatList
            data={gallery}
            scrollEnabled={true}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            ListEmptyComponent={
              <View style={styles.messageContainer}>
                <Text style={styles.message}>No hay imágenes</Text>
              </View>
            }
            contentContainerStyle={styles.galleryContainer}
            renderItem={({ item }) => (
              <View style={styles.imageWrapper}>
                <Image
                  source={{
                    uri: `data:image/jpg;base64,${item.encodedData}`,
                  }}
                  style={styles.image}
                />
              </View>
            )}
          />
          <View>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => setShowCamera(!showCamera)}
            >
              <Ionicons name="apps" size={32} color="black" />
            </Pressable>
          </View>
        </>
      )}
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
    justifyContent: "center",
    alignContent: "center",
    paddingBottom: 10,
  },
  messageContainer: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    margin: 150,
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
    bottom: 0,
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
  galleryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flexShrink: 3,
    justifyContent: "space-between",
  },
  imageWrapper: {
    width: "32.5%",
    aspectRatio: 1,
    marginBottom: 10,
  },
  image: {
    width: 115,
    height: 115,
    borderRadius: 8,
    margin: 10,
  },
});
