import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { foodItem } from "../../types/AppTypes";
import React, { useState } from "react";

type FoodItemProps = {
  foodItem: foodItem;
  setBasketPrice: Function;
  basketPrice: number;
  deleteItem: Function;
};

const Item = (props: FoodItemProps) => {
  let [isInBasket, setIsInBasket] = useState<boolean>(false);
  const itemImage = () => {
    switch (props.foodItem.section) {
      case "carne":
        return require("../../assets/storeImages/carne.png");
      case "pescado":
        return require("../../assets/storeImages/pescado.png");
      case "panaderia":
        return require("../../assets/storeImages/panaderia.png");
      case "fruta":
        return require("../../assets/storeImages/fruta.png");
      case "verdura":
        return require("../../assets/storeImages/fruta.png");
      case "bebidas":
        return require("../../assets/storeImages/bebidas.png");
      case "enlatados":
        return require("../../assets/storeImages/enlatados.png");
      case "otros":
        return require("../../assets/storeImages/otros.png");
    }
  };
  const handlerBasket = (props: FoodItemProps) => {
    setIsInBasket(!isInBasket);
    if (
      props.setBasketPrice != null &&
      props.basketPrice != null &&
      !isInBasket
    ) {
      return props.setBasketPrice(
        parseFloat(props.foodItem.price) * parseFloat(props.foodItem.quantity) +
          props.basketPrice
      );
    } else if (props.basketPrice) {
      parseFloat(props.foodItem.price) * parseFloat(props.foodItem.quantity) -
        props.basketPrice;
    }
  };

  //console.log(props.isInBasket);

  return (
    <View style={itemStiles(isInBasket).mainContainer}>
      <View style={itemStiles(isInBasket).container}>
        <Image source={itemImage()} style={itemStiles(isInBasket).image} />
      </View>
      <View style={itemStiles(isInBasket).container}>
        <Text>Nombre: {props.foodItem.name}</Text>
        <Text>Categoría: {props.foodItem.section}</Text>
        <Text>Cantidad: {props.foodItem.quantity}</Text>
        <Text>Precio: {props.foodItem.price}€</Text>
      </View>
      <View style={itemStiles(isInBasket).container}>
        <Pressable
          style={itemStiles(isInBasket).buttom}
          onPress={() => {
            handlerBasket(props);
            //props.setIsInBasket(!props.isInBasket);
          }}
        >
          <Text style={itemStiles(isInBasket).buttonText}>Basket</Text>
        </Pressable>
        <Pressable
          style={itemStiles(isInBasket).buttom}
          onPress={() => props.deleteItem(props.foodItem.id)}
        >
          <Text style={itemStiles(isInBasket).buttonText}>Delete</Text>
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
