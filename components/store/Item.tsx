import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { foodItem } from "../../types/AppTypes";
import React from "react";

type FoodItemProps = {
  foodItem: foodItem;
  setBasketPrice: Function;
  basketPrice: number;
};

const Item = (props: FoodItemProps) => {
  const itemImage = () => {
    switch (props.foodItem.section) {
      case "carne":
        return require("../../assets/storeImages/41.png");
      case "pescado":
        return require("../../assets/storeImages/42.png");
      case "panaderia":
        return require("../../assets/storeImages/43.png");
      case "fruta y verdura":
        return require("../../assets/storeImages/44.png");
      case "5":
        return require("../../assets/storeImages/45.png");
      case "6":
        return; //require("../../assets/storeImages/46.png");
      case "7":
        return; //require("../../assets/storeImages/47.png");
    }
  };
  const handlerBasketClick = (props: FoodItemProps) => {
    if (props.setBasketPrice != null && props.basketPrice != null) {
      return props.setBasketPrice(props.foodItem.price + props.basketPrice);
    } else {
      console.log("No está cogiendo el numero");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={itemImage()} style={styles.image} />
      </View>
      <View style={styles.container}>
        <Text>Nombre: {props.foodItem.name}</Text>
        <Text>Categoría: {props.foodItem.section}</Text>
        <Text>Cantidad: {props.foodItem.quantity}</Text>
        <Text>Precio: {props.foodItem.price}€</Text>
      </View>
      <View style={[styles.container, styles.container]}>
        <Pressable
          style={styles.buttom}
          onPress={() => {
            handlerBasketClick(props);
          }}
        >
          <Text style={styles.buttonText}>Basket</Text>
        </Pressable>
        <Pressable style={styles.buttom}>
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  container: {
    width: "30%",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    margin: "auto",
    left: "5%",
  },
  image: {
    width: 100,
    height: 100,
  },
  buttom: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});
