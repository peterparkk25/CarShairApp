import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, StyleSheet, Text, View } from "react-native";
import HomeScreen from "../Tabs/HomeScreen";
import HostScreen from "../Tabs/Host";
import BookScreen from "../Tabs/Book";
import ProfileScreen from "../Tabs/Profile";
import {
  Fontisto,
  FontAwesome5,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Fontisto name="home" size={24} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Host"
        component={HostScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="post-add" size={28} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome5
              name="car"
              size={24}
              color="black"
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Entypo name="user" size={24} style={styles.icon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: { color: "black", top: "15%" },
});
