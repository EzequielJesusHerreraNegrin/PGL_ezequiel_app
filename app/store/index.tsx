import React, { useState } from "react";
import { Text, View, Image, StyleSheet, Pressable, Modal } from "react-native";
import { foodItem } from "../../types/AppTypes";
import FoodList from "../../components/store/FoodList";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { Link } from "expo-router";
import AddModal from "../../components/store/AddModal";

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
  let [modalVisibility, setModalVisibility] = useState<boolean>(false);
  let [newFood, setNewFood] = useState<foodItem>();

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.titleBox}>
          <Text>LISTA DE LA COMPRA</Text>
        </View>
        <View style={styles.headerOptionsBox}>
          <View style={styles.priceDisplayBox}>
            <Text>Total Price: {basketPrice}€</Text>
          </View>
          <View style={styles.butttonBox}>
            <Pressable style={styles.buttom}>
              <Text
                style={styles.buttonText}
                onPress={() => {
                  {
                    console.log(modalVisibility);
                    setModalVisibility(true);
                  }
                }}
              >
                Add
              </Text>
            </Pressable>
            <Pressable style={styles.buttom}>
              <Text style={styles.buttonText}>Clean</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <FoodList
          foodList={foodList}
          setFoodList={setFoodList}
          basketPrice={basketPrice}
          setBasketPrice={setBasketPrice}
        ></FoodList>
      </View>
      <Modal visible={modalVisibility} animationType="slide" transparent>
        <AddModal
          newFood={newFood}
          setNewFood={setNewFood}
          setModalVisibility={setModalVisibility}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    gap: 5,
    backgroundColor: "cyan",
    //justifyContent: "center",
    //alignContent: "center",
    alignItems: "center",
  },
  titleBox: {},
  priceDisplayBox: {
    justifyContent: "center",
  },
  buttom: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  buttonText: {
    margin: "auto",
    textAlign: "center",
  },
  butttonBox: {
    flexDirection: "row",
    gap: 10,
  },
  headerOptionsBox: {
    flexDirection: "row",
    gap: 100,
  },
});

export default foodStore;

/* 
4 recuperación y enrtega practica 3 jdbc
11 conrt t3
13 recu t3 
18 entr pract 4 
 */
