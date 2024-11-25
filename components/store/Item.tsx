import { StyleSheet, Text, View, Image } from "react-native";
import { foodItem } from "../../types/AppTypes";
import React from "react";

const Item = (sectionListItem: foodItem) => {
  return (
    <View>
      <View>
        <Image source={require(`${sectionListItem.image}+.png`)} />
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({});
