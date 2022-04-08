import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Porsche_GT3_RS.webp")}
      style={styles.background}
      resizeMode="contain"
    >
      <View style={styles.body}>
        <Text style={styles.textContainer}>Welcome to CarShair </Text>
        <Text style={styles.textContainer}>
          Click the Host tab to rent out your own vehicle
        </Text>
        <Text style={styles.textContainer}>
          Click the Rent tab to rent someone else's vehicle
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    marginTop: "50%",
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
  textContainer: {
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
