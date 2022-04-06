import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Tabs/HomeScreen";
import HostScreen from "../Tabs/Host";
import RentScreen from "../Tabs/Rent";
import UserScreen from "../Tabs/User";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Host" component={HostScreen} />
      <Tab.Screen name="Rent" component={RentScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
}
