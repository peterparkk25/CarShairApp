import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function ResultsScreen({ route, navigation }) {
  const { carMake, carModel, carImage } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Car Make: {JSON.stringify(carMake)}</Text>
      <Text style={styles.text}>Car Model: {JSON.stringify(carModel)}</Text>
      <Text style={styles.text}>
        Other Information about the car specified can go here. These results
        should ideally return whatever is currently in the CarShair DB available
        to rent
      </Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
  },
};
