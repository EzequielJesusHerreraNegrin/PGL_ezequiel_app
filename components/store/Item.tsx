import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { foodItem } from "../../types/AppTypes";
import React from "react";

type FoodItemProps = {
  foodItem: foodItem;
  setBasketPrice: Function;
  basketPrice: number;
  isInBasket: boolean;
  setIsInBasket: Function;
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
  const handlerBasketPrice = (props: FoodItemProps) => {
    if (props.setBasketPrice != null && props.basketPrice != null) {
      return props.setBasketPrice(
        parseFloat(props.foodItem.price) * parseFloat(props.foodItem.quantity) +
          props.basketPrice
      );
    }
  };

  const isInBasketAction = () => {
    if (props.isInBasket) {
      return props.setIsInBasket(true);
    } else {
      return props.setIsInBasket(false);
    }
  };
  return (
    <View style={itemStiles(props.isInBasket).mainContainer}>
      <View style={itemStiles(props.isInBasket).container}>
        <Image
          source={itemImage()}
          style={itemStiles(props.isInBasket).image}
        />
      </View>
      <View style={itemStiles(props.isInBasket).container}>
        <Text>Nombre: {props.foodItem.name}</Text>
        <Text>Categoría: {props.foodItem.section}</Text>
        <Text>Cantidad: {props.foodItem.quantity}</Text>
        <Text>Precio: {props.foodItem.price}€</Text>
      </View>
      <View style={itemStiles(props.isInBasket).container}>
        <Pressable
          style={itemStiles(props.isInBasket).buttom}
          onPress={() => {
            handlerBasketPrice(props);
            //props.setIsInBasket(!props.isInBasket);
          }}
        >
          <Text style={itemStiles(props.isInBasket).buttonText}>Basket</Text>
        </Pressable>
        <Pressable style={itemStiles(props.isInBasket).buttom}>
          <Text style={itemStiles(props.isInBasket).buttonText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

function itemStiles(isInBasket: boolean) {
  const selectBackgroundColor = "darkseagreen";

  const styles = StyleSheet.create({
    mainContainer: {
      display: "flex",
      flexDirection: "row",
      borderRadius: 10,
      borderColor: "black",
      borderWidth: 1,
      padding: 5,
      margin: 5,
      backgroundColor: isInBasket ? selectBackgroundColor : "white",
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
  return styles;
}
export default Item;
