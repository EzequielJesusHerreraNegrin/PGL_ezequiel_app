import {
  View,
  Image,
  StyleSheet,
  Button,
  Pressable,
  ScrollView,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import Camera from "../../../components/camera/Camera";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList } from "react-native-gesture-handler";
import { user_service_functions } from "../../../services/user-service";
import { storage_functions } from "../../../services/Storage_functions";

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
  const [loading, setLoading] = useState<boolean>(false);

  /* useEffect(() => {
    const retrievePhotos = async () => {
      const token = await storage_functions.get(storage_functions.KEY.register);
      let photoList = await user_service_functions.getAllPhotos(token);
      console.log(`camera: ${photoList}`);
      if (!photoList) {
        setLoading(true);
      } else {
        setLoading(false);
      }
      setGallery(photoList);
      console.log(gallery.forEach((img) => img));
    };

    retrievePhotos();
  }, [gallery]); */

  useEffect(() => {
    const checkGalery = async () => {
      const token = await storage_functions.get(storage_functions.KEY.register);
      const fetchedPictures = await user_service_functions.getAllPhotos(token);
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
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {gallery.length > 0 ? (
              gallery.map((item) => (
                <Image
                  key={item.id}
                  style={{ width: 200, height: 200, margin: 10 }}
                  source={{ uri: `data:image/jpg;base64,${item.encodedData}` }}
                />
              ))
            ) : (
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: 900,
                }}
              >
                La Lista está vacía
              </Text>
            )}
          </ScrollView>
          <View style={""}>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => setShowCamera(!showCamera)}
            >
              <Ionicons name="apps" size={32} color="black" />
            </Pressable>
          </View>
        </View>
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
});
