import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { foodItem, newFood } from "../../types/AppTypes";
import uuid from "react-native-uuid";
import {
  MultipleSelectList,
  SelectList,
} from "react-native-dropdown-select-list";

type AddModalProps = {
  setModalVisibility: Function;
  setFoodList: Function;
};

const AddModal = (props: AddModalProps) => {
  const [selected, setSelected] = React.useState([]);
  let [newFood, setNewFood] = useState<foodItem>({
    id: uuid.v4(),
    name: "",
    price: "",
    quantity: "",
    section: "",
    isInBasket: false,
  });

  const categories = [
    { key: "1", value: "carne" },
    { key: "2", value: "pescado" },
    { key: "3", value: "panaderia" },
    { key: "4", value: "fruta" },
    { key: "5", value: "verdura" },
    { key: "6", value: "bebidas" },
    { key: "7", value: "enlatados" },
    { key: "8", value: "otros" },
  ];

  const handleSubmit = () => {
    props.setFoodList((oldProducts: foodItem[]) => [...oldProducts, newFood]);
    const obj: foodItem = newFood!;
  };

  const handleInputChange = (name: string, value: string | never[]) => {
    console.log(value);
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
        <SelectList
          setSelected={(val: React.SetStateAction<never[]>) => setSelected(val)}
          data={categories}
          save="value"
          boxStyles={{ borderColor: "black" }}
          dropdownStyles={{ borderColor: "black" }}
          maxHeight={120}
          onSelect={() => handleInputChange("section", selected)}
          defaultOption={{ key: "8", value: "otros" }}
        ></SelectList>
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
        <View style={styles.formButtomBox}>
          <Pressable
            style={styles.formButtons}
            onPress={() => {
              props.setModalVisibility(false);
              handleSubmit();
            }}
          >
            <Text
              style={{ margin: "auto", textAlign: "center", color: "white" }}
            >
              Crear
            </Text>
          </Pressable>
          <Pressable
            style={styles.formButtons}
            onPress={() => {
              props.setModalVisibility(false);
            }}
          >
            <Text
              style={{ margin: "auto", textAlign: "center", color: "white" }}
            >
              Cancelar
            </Text>
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
    height: "60%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    gap: 10,
  },
  formTitle: {},
  inputStyle: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
  },
  formButtons: {
    padding: 10,
    borderBlockColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: "50%",
    backgroundColor: "#4287f5",
  },
  formButtomBox: {
    top: 10,
    gap: 15,
    alignItems: "center",
  },
});
