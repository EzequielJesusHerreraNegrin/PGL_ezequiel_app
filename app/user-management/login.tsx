import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { LoginFields } from "../../types/AppTypes";
import ToastManager, { Toast } from "toastify-react-native";
import { Link, router } from "expo-router";
import { user_service_functions } from "../../services/user-service";
import { storage_functions } from "../../services/asyncStorageService";

const login = () => {
  const [input, setInput] = useState<LoginFields>({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (
      input.email.endsWith("@gmail.com") &&
      input.email.length > 10 &&
      input.password.length >= 8
    ) {
      const token = user_service_functions.logUser(input.email, input.password);
      token.then((value) => {
        if (value != null) {
          storage_functions.save(storage_functions.KEY.register, value);
          Toast.success("Inicio de sesión exitoso.");
          setTimeout(() => router.navigate("/welcome"), 2500);
        } else {
          Toast.error("Usuario no registrado.");
        }
      });
    } else {
      Toast.error("Credenciales incorrectas.");
    }
  };

  return (
    <ImageBackground source={require("../../assets/beachGif.gif")}>
      <ToastManager textStyle={styles.toastContainer}></ToastManager>
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={styles.sreenTitle}>Iniciar Sesión</Text>
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
            <Button title={"Enviar"} onPress={() => handleSubmit()}></Button>
          </View>
          <View style={styles.registerOptionBox}>
            <Text style={styles.registerText}>¿No te has registrado?</Text>
            <Link href="user-management/register" style={styles.registerButton}>
              REGISTRARME
            </Link>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default login;

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
  registerButton: {
    width: "100%",
    backgroundColor: "#2894f4",
    textAlign: "center",
    color: "white",
    fontWeight: 500,
    padding: 5,
  },
});
