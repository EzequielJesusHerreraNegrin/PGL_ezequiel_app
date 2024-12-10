import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { FoodItem } from "../../types/AppTypes";
import { SelectList } from "react-native-dropdown-select-list";

type FoodItemFormProps = {
  foodItem: FoodItem;
  setFoodItem: Function;
  addFoodItem: () => void;
  closeModal: () => void;
};

const FoodItemForm = ({
  foodItem,
  setFoodItem,
  addFoodItem,
  closeModal,
}: FoodItemFormProps) => {
  const [selected, setSelected] = React.useState([]);

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

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.formTitle}>
          <Text>Add New Product</Text>
        </View>
        <TextInput
          placeholder="nombre"
          value={foodItem.name}
          onChangeText={(text) => setFoodItem({ ...foodItem, name: text })}
          style={styles.inputStyle}
          //defaultValue={props.editItem.name == "" ? foodItem.name : props.editItem.name }
        ></TextInput>
        <SelectList
          setSelected={(val: React.SetStateAction<never[]>) => setSelected(val)}
          data={categories}
          save="value"
          boxStyles={{ borderColor: "black" }}
          dropdownStyles={{ borderColor: "black" }}
          maxHeight={120}
          onSelect={() => setFoodItem({ ...foodItem, section: selected })}
          defaultOption={{ key: "8", value: "otros" }}
        ></SelectList>
        <TextInput
          placeholder="cantidad"
          keyboardType="numeric"
          value={foodItem.quantity}
          onChangeText={(text) => setFoodItem({ ...foodItem, quantity: text })}
          style={styles.inputStyle}
        ></TextInput>
        <TextInput
          placeholder="importe"
          keyboardType="numeric"
          value={foodItem.price}
          onChangeText={(text) => setFoodItem({ ...foodItem, price: text })}
          style={styles.inputStyle}
        ></TextInput>
        <View style={styles.formButtomBox}>
          <Pressable style={styles.formButtons} onPress={addFoodItem}>
            <Text
              style={{ margin: "auto", textAlign: "center", color: "white" }}
            >
              Crear
            </Text>
          </Pressable>
          <Pressable style={styles.formButtons} onPress={closeModal}>
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

export default FoodItemForm;

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
