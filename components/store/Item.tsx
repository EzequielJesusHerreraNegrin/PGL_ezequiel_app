import { StyleSheet, Text, View, Image, Button } from "react-native";
import { foodItem } from "../../types/AppTypes";
import React from "react";

type FoodItemProps = {
  foodItem: foodItem;
};

const Item = (props: FoodItemProps) => {
  const itemImage = () => {
    switch (props.foodItem.image) {
      case "1":
        return require("../../assets/storeImages/41.png");
      case "2":
        return require("../../assets/storeImages/42.png");
      case "3":
        return require("../../assets/storeImages/43.png");
      case "4":
        return require("../../assets/storeImages/41.png");
      case "5":
        return require("../../assets/storeImages/41.png");
      case "6":
        return require("../../assets/storeImages/41.png");
      case "7":
        return require("../../assets/storeImages/41.png");
    }
  };

  return (
    <View>
      <View>
        <Image source={itemImage()} style={styles.image} />
        <Text>Nombre: {props.foodItem.name}</Text>
        <Text>Categoría: {props.foodItem.section}</Text>
        <Text>Precio: {props.foodItem.price}€</Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
