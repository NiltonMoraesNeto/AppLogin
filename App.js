import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" translucent={false} />
      <Image source={require("./src/assets/logo1.png")} style={styles.logo} />
      <TextInput
        placeholder="Celular, username ou email"
        style={styles.input}
      />
      <TextInput placeholder="Sua senha" style={styles.input} />
      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookContainer}>
        <FontAwesome5 name="facebook" size={25} color="#4484ec" />
        <Text style={styles.facebookText}>Logar com Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleContainer}>
        <FontAwesome5 name="google" size={25} color="#34a354" />
        <Text style={styles.googleText}>Logar com Google</Text>
      </TouchableOpacity>
      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{ marginHorizontal: "3%" }}>OU</Text>
        <View style={styles.divisorLine}></View>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não possui uma conta?</Text>
        <TouchableOpacity><Text style={styles.signUpButton}>Cadastrar</Text></TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: Platform.OS === "android" ? "13%" : "20%",
    marginBottom: Platform.OS === "android" ? "13%" : "15%",
    width: 100,
    height: 100,
  },
  input: {
    width: "90%",
    height: 42,
    backgroundColor: "#F4F3F3",
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  forgotContainer: {
    width: "90%",
    alignItems: "flex-end",
  },
  forgotText: {
    color: "#dc7c58",
  },
  loginButton: {
    marginTop: "8%",
    width: "90%",
    height: 42,
    backgroundColor: "#dc7c58",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#FFF",
    fontSize: 16,
  },
  facebookContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "15%",
  },
  googleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
  },
  facebookText: {
    color: "#4484ec",
    paddingLeft: 8,
    fontSize: 15,
  },
  googleText: {
    color: "#34a354",
    paddingLeft: 8,
    fontSize: 15,
    marginRight: "4%",
  },
  divisor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    width: "90%",
  },
  divisorLine: {
    width: "45%",
    height: 2,
    backgroundColor: "#EFEDED",
    borderRadius: 5,
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: "10%",
  },
  signUpText: {
    color: "#dc7c58",
    paddingRight: 5,
  },
  signUpButton: {
    color: "#f3b304",
    fontWeight: "bold",
  }
});
