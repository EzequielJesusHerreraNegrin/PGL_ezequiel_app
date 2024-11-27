import React from "react";
import { Text, View, Image } from "react-native";
import Item from "../../components/store/Item";
import { foodItem } from "../../types/AppTypes";

const foodStore = () => {
  let item: foodItem = {
    image: "1",
    name: "Chuleta de Cerdo",
    price: 20.56,
    section: "Carne",
  };
  return (
    <View>
      <Text>LISTA DE LA COMPRA</Text>
      <View>
        <Item
          /* image={item.image}
          name={item.name}
          price={item.price}
          section={item.section} */
          foodItem={item}
        ></Item>
      </View>
    </View>
  );
};

export default foodStore;

/* 
4 recuperación y enrtega practica 3 jdbc
11 conrt t3
13 recu t3 
18 entr pract 4 
 */
