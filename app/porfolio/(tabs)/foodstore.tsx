import React from "react";
import { Text, View, Image } from "react-native";

const foodStore = () => {
  return (
    <View>
      <Text>TIENDA</Text>
      <Image
        source={require("../../../assets/storeImages/41.png")}
        style={{ height: 200, width: 200 }}
      />
    </View>
  );
};

export default foodStore;
