import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/Login";
import BottomTabs from "./BottomTabs";
import Results from "../Screens/Results";
const Stack = createStackNavigator();

export default function RootStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        style: {
          position: "relative",
          height: "8%",
        },
        headerStyle: {
          backgroundColor: "#63a832",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "#63a832",
          title: "black",
        },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CarShair" component={BottomTabs} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}
