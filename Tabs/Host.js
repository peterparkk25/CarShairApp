import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function HostScreen({ navigation }) {
  const [submitMake, setSubmitMake] = useState("");
  const [submitModel, setSubmitModel] = useState("");
  const [submitYear, setSubmitYear] = useState("");
  const [submitRate, setSubmitRate] = useState("");
  const [submitAvailFrom, setSubmitAvailFrom] = useState("");
  const [submitAvailTo, setSubmitAvailTo] = useState("");

  const submitHost = () => {
    Alert.alert("Thank you for hosting!");
  };

  // useEffect(() => {
  //   setSubmitMake("");
  //   setSubmitModel("");
  //   setSubmitYear("");
  //   setSubmitRate("");
  //   setSubmitAvailFrom("");
  //   setSubmitAvailTo("");
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}>Post a car to Host!</Text>
      <TextInput
        style={styles.input}
        placeholder="Make"
        onChangeText={(text) => setSubmitMake(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Model"
        onChangeText={(text) => setSubmitModel(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        onChangeText={(text) => setSubmitYear(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Desired Rates"
        onChangeText={(text) => setSubmitRate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Available From"
        onChangeText={(text) => setSubmitAvailFrom(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Available To"
        onChangeText={(text) => setSubmitAvailTo(text)}
        marginBottom={50}
      />
      <TouchableOpacity style={styles.hostButton}>
        <Button
          onPress={submitHost}
          title="HOST!"
          color="black"
          fontWeight="bold"
          style={styles.button}
        />
      </TouchableOpacity>
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
  hostButton: {
    width: "60%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#63a832",
  },
});
