import * as React from "react";
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
