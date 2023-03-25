import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, Platform
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" translucent={false} />
      <Image
        source={require("./src/assets/logo1.png")}
        style={styles.logo}
      />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%',
    width: 100,
    height: 100,
  },
  input: {
    width: '90%',
    height: 42,
    backgroundColor: "#F4F3F3",
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  forgotContainer:{
    width: '90%',
    alignItems: "flex-end",
  },
  forgotText:{
    color: "#dc7c58"
  },
  loginButton: {
    marginTop: '8%',
    width: '90%',
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
});
