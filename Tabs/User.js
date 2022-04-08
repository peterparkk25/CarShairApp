import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UserScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Username</Text>
      <Text>Email</Text>
      <Text>Other Contact Information</Text>
    </View>
  );
}
