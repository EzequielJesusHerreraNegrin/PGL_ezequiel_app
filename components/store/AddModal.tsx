import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { foodItem, newFood } from "../../types/AppTypes";
import uuid from "react-native-uuid";

type AddModalProps = {
  /*   newFood: foodItem ;
  setNewFood: Function; */
  setModalVisibility: Function;
  setFoodList: Function;
  foodList: foodItem[];
};

const AddModal = (props: AddModalProps) => {
  let [newFood, setNewFood] = useState<foodItem>({
    id: uuid.v4(),
    image: "",
    name: "",
    price: "",
    quantity: "",
    section: "",
  });

  const handleSubmit = () => {
    props.setFoodList((oldProducts: foodItem[]) => [...oldProducts, newFood]);
    const obj: foodItem = newFood!;
  };

  const handleInputChange = (name: string, value: string) => {
    setNewFood({
      ...newFood,
      [name]: value,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.formTitle}>
          <Text>Add New Product</Text>
        </View>
        <TextInput
          placeholder="nombre"
          value={newFood.name}
          onChangeText={(text) => handleInputChange("name", text)}
          style={styles.inputStyle}
        ></TextInput>
        <TextInput
          placeholder="categoría"
          value={newFood.section}
          onChangeText={(text) => handleInputChange("section", text)}
          style={styles.inputStyle}
        ></TextInput>
        <TextInput
          placeholder="cantidad"
          keyboardType="numeric"
          value={newFood.quantity}
          onChangeText={(text) => handleInputChange("quantity", text)}
          style={styles.inputStyle}
        ></TextInput>
        <TextInput
          placeholder="importe"
          keyboardType="numeric"
          value={newFood.price}
          onChangeText={(text) => handleInputChange("price", text)}
          style={styles.inputStyle}
        ></TextInput>
        <View>
          <Pressable
            onPress={() => {
              props.setModalVisibility(false);
              handleSubmit();
            }}
          >
            <Text>Crear Producto</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AddModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  formContainer: {
    backgroundColor: "rgb(52, 177, 235)",
    width: "70%",
    height: "50%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    gap: 10,
  },
  formTitle: {},
  inputStyle: {
    borderWidth: 1,
  },
});
