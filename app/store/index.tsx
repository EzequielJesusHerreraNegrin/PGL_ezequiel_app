import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import { FoodItem } from "../../types/AppTypes";
import FoodItemForm from "../../components/store/FoodItemForm";
import { foodItems, getDefaultFoodItem } from "../../data/foodItems";
import Item from "../../components/store/Item";

const FoodStorePage = () => {
  let [foodItem, setFoodItem] = useState<FoodItem>(getDefaultFoodItem());
  let [foodList, setFoodList] = useState<FoodItem[]>(foodItems);
  let [basketPrice, setBasketPrice] = useState<number>(0);
  let [modalVisibility, setModalVisibility] = useState<boolean>(false);

  const onAddFoodItem = () => {
    if (
      foodItem.name != "" &&
      foodItem.quantity != "" &&
      foodItem.price != ""
    ) {
      setFoodList((oldProducts: FoodItem[]) => [...oldProducts, foodItem]);
    } else {
      alert("Debe completar todos los campos.");
    }
    setModalVisibility(false);
  };

  const onEditFoodItem = (item: FoodItem) => {
    setFoodItem(item);
    setModalVisibility(true);
  };

  const deleteItem = (id: string) => {
    const newFoodList = foodList.filter((item) => item.id != id);
    setFoodList(newFoodList);
  };

  const onChangeFoodItemStatus = (foodItem: FoodItem) => {
    foodItem.isInBasket = !foodItem.isInBasket;

    let newBalance = 0;
    if (foodItem.isInBasket) {
      newBalance =
        basketPrice +
        parseFloat(foodItem.price) * parseFloat(foodItem.quantity);
    } else {
      newBalance =
        basketPrice -
        parseFloat(foodItem.price) * parseFloat(foodItem.quantity);
    }

    setBasketPrice(newBalance);
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.titleBox}>
          <Text style={{ fontWeight: 800, color: "white" }}>
            LISTA DE LA COMPRA
          </Text>
        </View>
        <View style={styles.headerOptionsBox}>
          <View style={styles.priceDisplayBox}>
            <Text style={{ fontWeight: 500, color: "white" }}>
              Total Price: {Math.round(basketPrice * 100) / 100}€
            </Text>
          </View>
          <View style={styles.butttonBox}>
            <Pressable style={styles.buttom}>
              <Text
                style={styles.buttonText}
                onPress={() => {
                  {
                    setModalVisibility(true);
                    setFoodItem(getDefaultFoodItem());
                  }
                }}
              >
                Add
              </Text>
            </Pressable>
            <Pressable style={styles.buttom} onPress={() => setFoodList([])}>
              <Text style={styles.buttonText}>Clean</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {foodList.length > 0 ? (
          foodList.map((item) => (
            <Item
              key={item.id}
              foodItem={item}
              onEditItem={() => onEditFoodItem(item)}
              onChangeFoodItemStatus={() => onChangeFoodItemStatus(item)}
              deleteItem={deleteItem}
            />
          ))
        ) : (
          <Text
            style={{
              textAlign: "center",
              fontWeight: 900,
            }}
          >
            La Lista está vacía
          </Text>
        )}
      </ScrollView>
      <Modal visible={modalVisibility} animationType="slide" transparent>
        <FoodItemForm
          foodItem={foodItem}
          setFoodItem={setFoodItem}
          addFoodItem={onAddFoodItem}
          closeModal={() => setModalVisibility(false)}
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
    backgroundColor: "#004080",
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

export default FoodStorePage;

/* 
4 recuperación y enrtega practica 3 jdbc
11 conrt t3
13 recu t3 
18 entr pract 4 
 */
