import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = ({ onLogin, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      onLogin();
    } else {
      alert("Please enter email and password");
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("Forgot");
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleSocialLogin = (provider) => {
    alert(`Logging in with ${provider}`);
  };

  return (
    <ImageBackground
      source={require("../assets/background.webp")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image source={require("../assets/Logo5.png")} style={styles.logo} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin("Facebook")}
          >
            <FontAwesome name="facebook" size={20} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin("Google")}
          >
            <FontAwesome name="google" size={20} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin("Twitter")}
          >
            <FontAwesome name="twitter" size={20} color="skyblue" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor:'white'
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#fff",
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#000",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
  },
  button: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00CDBC",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  forgotPassword: {
    marginTop: 10,
    color: "#fff",
    textDecorationLine: "underline",
  },
  register: {
    marginTop: 10,
    color: "#fff",
    textDecorationLine: "underline",
  },
  socialLoginContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
});

export default LoginScreen;
