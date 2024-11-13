import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

const ItemList = () => {
  return (
    <View style={styles.listContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.listItem}>Salir a pasear</Text>
        <Text style={styles.listItem}>Ver Anime</Text>
        <Text style={styles.listItem}>Hacer Chuletadas</Text>
        <Text style={styles.listItem}>Domingos de pelis</Text>
        <Text style={styles.listItem}>La Saxofonista</Text>
        <Text style={styles.listItem}>Amaneceres</Text>
        <Text style={styles.listItem}>Viajar</Text>
        <Text style={styles.listItem}>Música que no sea regueton</Text>
        <Text style={styles.listItem}>Tecnología</Text>
        <Text style={styles.listItem}>Entrenar</Text>
        <Text style={styles.listItem}>Videojuegos</Text>
        <Text style={styles.listItem}>Cenar con Amigos</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: "solid",
    padding: 20,
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "#D1D1D1",
  },
  listContainer: {
    backgroundColor: "#E6F7FF",
    padding: 15,
  },
});

export default ItemList;
