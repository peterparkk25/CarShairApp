import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/Login";
import SplashScreen from "../Screens/Splash";
import SignUpScreen from "../Screens/SignUp";
import bottomTabs from "./BottomTabs";

const RootStack = createStackNavigator();

export default function RootStackScreen() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="Login" component={bottomTabs} />
      <RootStack.Screen name="SignUp" component={SignUpScreen} />
    </RootStack.Navigator>
  );
}
