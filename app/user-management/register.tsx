import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import ToastManager from "toastify-react-native";
import { LoginFields, registerFields } from "../../types/AppTypes";
import { Link } from "expo-router";

const register = () => {
  const [input, setInput] = useState<registerFields>({
    email: "",
    name: "",
    password: "",
  });

  return (
    <ImageBackground source={require("../../assets/beachGif.gif")}>
      <ToastManager textStyle={styles.toastContainer}></ToastManager>
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={styles.sreenTitle}>Crear Cuenta</Text>
          <View style={styles.loginForm}>
            <View style={styles.fieldGroup}>
              <View style={styles.fieldBox}>
                <Text style={styles.fieldBox}>Email</Text>
                <TextInput
                  placeholder="ejemplo@gmail.com"
                  keyboardType="email-address"
                  value={input.email}
                  onChangeText={(text) => setInput({ ...input, email: text })}
                  style={styles.intputField}
                ></TextInput>
              </View>
              <View style={styles.fieldBox}>
                <Text style={styles.fieldBox}>Nombre</Text>
                <TextInput
                  placeholder="nombre"
                  value={input.name}
                  onChangeText={(text) => setInput({ ...input, name: text })}
                  style={styles.intputField}
                ></TextInput>
              </View>
              <View style={styles.fieldBox}>
                <Text style={styles.fieldBox}>Contraseña</Text>
                <TextInput
                  placeholder="xxxxxxxx"
                  secureTextEntry={true}
                  value={input.password}
                  onChangeText={(text) =>
                    setInput({ ...input, password: text })
                  }
                  style={styles.intputField}
                ></TextInput>
              </View>
            </View>
            <View style={styles.buttonBox}>
              <Button title="Enviar"></Button>
              <Link
                href="user-management/login"
                style={styles.backToLoginButton}
              >
                CANCELAR
              </Link>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

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
    height: 450,
    width: 300,
    flexDirection: "column",
    backgroundColor: "#e0e1e1",
    padding: 30,
    margin: 10,
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
    gap: 40,
  },
  buttonBox: {
    gap: 20,
    marginTop: 20,
  },
  fieldGroup: {
    height: "60%",
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
    padding: 10,
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
  toastContainer: {
    fontSize: 18,
  },
  backToLoginButton: {
    width: "100%",
    backgroundColor: "#2894f4",
    textAlign: "center",
    color: "white",
    fontWeight: 500,
    padding: 8,
    shadowColor: "back",
    shadowRadius: 10,
  },
});

export default register;
