import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { FoodItem } from "../../types/AppTypes";
import React, { useState } from "react";

type FoodItemProps = {
  foodItem: FoodItem;
  onChangeFoodItemStatus: () => void;
  onEditItem: (foodItem: FoodItem) => void;
  deleteItem: Function;
};

const Item = ({
  foodItem,
  deleteItem,
  onEditItem,
  onChangeFoodItemStatus,
}: FoodItemProps) => {
  let [isInBasket, setIsInBasket] = useState<boolean>(false);

  const itemImage = () => {
    switch (foodItem.section) {
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

  return (
    <View style={itemStiles(isInBasket).mainContainer}>
      <View style={itemStiles(isInBasket).container}>
        <Image source={itemImage()} style={itemStiles(isInBasket).image} />
      </View>
      <View style={itemStiles(isInBasket).container}>
        <Text>Nombre: {foodItem.name}</Text>
        <Text>Categoría: {foodItem.section}</Text>
        <Text>Cantidad: {foodItem.quantity}</Text>
        <Text>Precio: {foodItem.price}€</Text>
      </View>
      <View style={itemStiles(isInBasket).container}>
        <Pressable
          style={itemStiles(isInBasket).buttom}
          onPress={onChangeFoodItemStatus}
        >
          <Text style={itemStiles(isInBasket).buttonText}>Basket</Text>
        </Pressable>
        <Pressable
          style={itemStiles(isInBasket).buttom}
          onPress={() => {
            deleteItem(foodItem.id);
            setIsInBasket(false);
          }}
        >
          <Text style={itemStiles(isInBasket).buttonText}>Delete</Text>
        </Pressable>
        <Pressable
          style={itemStiles(isInBasket).buttom}
          onPress={() => {
            deleteItem(foodItem.id);
            setIsInBasket(false);
          }}
        >
          <Text
            style={itemStiles(isInBasket).buttonText}
            onPress={() => onEditItem(foodItem)}
          >
            Edit
          </Text>
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
