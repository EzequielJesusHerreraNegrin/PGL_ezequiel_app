import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

const index = () => {
  return (
    <ImageBackground source={require("../../assets/beachGif.gif")}>
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={styles.sreenTitle}>Iniciar Sesión</Text>
          <View style={styles.loginForm}>
            <View style={styles.fieldGroup}>
              <View style={styles.fieldBox}>
                <Text style={styles.fieldBox}>Email</Text>
                <TextInput
                  placeholder="ejemplo@gmail.com"
                  style={styles.intputField}
                ></TextInput>
              </View>
              <View style={styles.fieldBox}>
                <Text style={styles.fieldBox}>Contraseña</Text>
                <TextInput
                  placeholder="xxxxxxxx"
                  style={styles.intputField}
                ></TextInput>
              </View>
            </View>
            <Button title="Enviar"></Button>
          </View>
          <View style={styles.registerOptionBox}>
            <Text style={styles.registerText}>¿No te has registrado?</Text>
            <Button title="Regístrate"></Button>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  sreenTitle: {
    fontWeight: 600,
    fontSize: 30,
  },
  loginBox: {
    height: 550,
    width: 350,
    padding: 10,
    alignItems: "center",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  loginForm: {
    height: 300,
    width: 300,
    backgroundColor: "#e0e1e1",
    padding: 30,
    margin: 10,
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
    gap: 40,
  },
  fieldGroup: {
    height: 150,
    width: "100%",
    gap: 30,
    alignItems: "flex-start",
  },
  fieldBox: {
    width: "100%",
  },
  intputField: {
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: "white",
  },
  registerOptionBox: {
    height: 150,
    width: 300,
    backgroundColor: "#e0e1e1",
    padding: 30,
    margin: 10,
    justifyContent: "center",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
    gap: 20,
  },
  registerText: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
  },
});
