import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./Navigation/BottomTabs";
import RootStackNavigator from "./Navigation/RootStackScreen";

export default function App() {
  return (
    <NavigationContainer>
      {/* <RootStackNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
