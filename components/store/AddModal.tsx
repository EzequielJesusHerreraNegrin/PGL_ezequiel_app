import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { foodItem } from "../../types/AppTypes";

type AddModalProps = {
  newFood: foodItem | undefined;
  setNewFood: Function;
  setModalVisibility: Function;
};

const AddModal = (props: AddModalProps) => {
  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.formTitle}>
          <Text>Add New Product</Text>
        </View>
        <TextInput
          placeholder="nombre"
          value=""
          //onChangeText={}
        ></TextInput>
        <TextInput
          placeholder="categoría"
          value=""
          //onChangeText={}
        ></TextInput>
        <TextInput
          placeholder="cantidad"
          keyboardType="numeric"
          value=""
          //onChangeText={}
        ></TextInput>
        <TextInput
          placeholder="inporte"
          keyboardType="numeric"
          value=""
          //onChangeText={}
        ></TextInput>
        <View>
          <Pressable
            onPress={() => {
              props.setModalVisibility(false);
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
  },
  formTitle: {},
});
