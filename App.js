import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Navigation/StackScreen";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
