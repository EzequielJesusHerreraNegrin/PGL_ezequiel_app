import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { foodItem } from "../../types/AppTypes";
import FoodList from "../../components/store/FoodList";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

const foodStore = () => {
  let items: foodItem[] = [
    {
      id: 0,
      image: "1",
      name: "Hola",
      price: 12.56,
      section: "Carne",
    },
    {
      id: 1,
      image: "3",
      name: "Chuleta de Cerdo",
      price: 35.56,
      section: "otro",
    },
    {
      id: 2,
      image: "4",
      name: "Chuleta de Cerdo",
      price: 20.56,
      section: "otro",
    },
  ];

  let [foodList, setFoodList] = useState<foodItem[] | []>(items);
  let [basketPrice, setBasketPrice] = useState<Float>(0);

  return (
    <View>
      <Text>LISTA DE LA COMPRA</Text>
      <View>
        <Text>Total Price: {basketPrice}€</Text>
      </View>
      <View>
        <FoodList
          foodList={foodList}
          setFoodList={setFoodList}
          basketPrice={basketPrice}
          setBasketPrice={setBasketPrice}
        ></FoodList>
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
