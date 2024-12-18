import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/background.png")} // Add your background image here
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>REGISTER</Text>
        <TextInput placeholder="Name" style={styles.input} placeholderTextColor="#aaa" />
        <TextInput
          placeholder="8129*****"
          style={styles.input}
          keyboardType="phone-pad"
          placeholderTextColor="#aaa"
        />
        <TextInput
          placeholder="example@email.com"
          style={styles.input}
          keyboardType="email-address"
          placeholderTextColor="#aaa"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/components/LoginScreen")}>
          <Text style={styles.link}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  formContainer: {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", color: "#1A72E8", marginBottom: 20 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
    padding: 10,
    color: "#333",
  },
  button: {
    backgroundColor: "#1A72E8",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  link: { marginTop: 20, textAlign: "center", color: "#1A72E8", fontWeight: "600" },
});
