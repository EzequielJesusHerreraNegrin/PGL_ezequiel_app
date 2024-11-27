import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";
import Item from "./Item";
import { foodItem } from "../../types/AppTypes";

type FoodListProps = {
  foodList: foodItem[] | undefined;
  setFoodList: Function;
};

const FoodList = (props: FoodListProps) => {
  const handlerFoodList = () => {
    if (props.foodList != undefined) {
      return props.foodList.map((listItem) => (
        <Item
          foodItem={{
            image: ` ${listItem.image}`,
            name: ` ${listItem.name}`,
            price: Number(` ${listItem.price}`),
            section: ` ${listItem.section}`,
          }}
        ></Item>
      ));
    } else {
      return [];
    }
  };

  return (
    <View>
      <ScrollView>{handlerFoodList()}</ScrollView>
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({});
