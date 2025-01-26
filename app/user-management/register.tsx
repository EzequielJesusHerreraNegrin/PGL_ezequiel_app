import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ToastManager, { Toast } from "toastify-react-native";
import { user_service_functions } from "../../services/user-service";
import { registerFields } from "../../types/AppTypes";

const register = () => {
  const [input, setInput] = useState<registerFields>({
    email: "",
    name: "",
    password: "",
  });

  const submit = () => {
    if (
      input.name.length > 0 &&
      input.email.endsWith("@gmail.com") &&
      input.email.length > 10 &&
      input.password.length > 7
    ) {
      const token = user_service_functions.registerUser(
        input.email,
        input.name,
        input.password
      );
      token.then((value) => {
        console.log("si");
        if (value != null) {
          Toast.success("Usuario registrado exitosamente");
          setTimeout(() => router.navigate("user-management/login"), 2500);
        } else {
          Toast.error("ERROR: ya existe un usuario con esos datos.");
        }
      });
    } else {
      Toast.error("ERROR: valores no contemplados.");
    }
  };

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
                  onChangeText={(text) =>
                    setInput({ ...input, email: text.trim() })
                  }
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
              <Button title="Enviar" onPress={() => submit()}></Button>
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
