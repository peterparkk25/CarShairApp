import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to CarShair</Text>
      <Text>Click the Host tab to rent out your own vehicile</Text>
      <Text>Click the Rent tab to rent someone else's vehicle</Text>
    </View>
  );
}
