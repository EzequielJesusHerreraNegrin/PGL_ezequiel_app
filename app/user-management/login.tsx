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

const index = () => {
  const [input, setInput] = useState<LoginFields>({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    let isValid = false;
    if (
      input.email.endsWith("@gmail.com") &&
      input.email.length > 10 &&
      input.password.length > 7
    ) {
      console.log("input");
      isValid = true;
    } else {
      isValid = false;
    }
    return isValid;
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
            <Button
              title="Enviar"
              onPress={() =>
                handleSubmit()
                  ? Toast.success("Inicio de sesión exitoso.")
                  : Toast.error("Credenciales incorrectas.", "top")
              }
            ></Button>
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
});
