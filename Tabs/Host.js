import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";

const submitHost = () => {
  Alert.alert("Thank you for hosting!");
};

export default function HostScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}>Post a car to Host!</Text>
      <TextInput style={styles.input} placeholder="Make" />
      <TextInput style={styles.input} placeholder="Model" />
      <TextInput style={styles.input} placeholder="Year" />
      <TextInput style={styles.input} placeholder="Desired Rates" />
      <TextInput style={styles.input} placeholder="Available From" />
      <TextInput style={styles.input} placeholder="Available To" />
      <Button
        onPress={submitHost}
        title="Submit!"
        color="#84f542"
        backgroundColor="black"
        // style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  formLabel: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    marginTop: 100,
    marginBottom: 50,
  },
  input: {
    marginTop: 10,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#b9e4c9",
  },
  button: {
    fontWeight: "bold",
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 10,
    backgroundColor: "#63a832",
  },
});
