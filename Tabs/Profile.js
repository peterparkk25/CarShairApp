import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View>
      <View style={styles.header}>
        <Image
          source={require("../assets/User_Porsche_Picture.png")}
          style={styles.background}
        ></Image>
      </View>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://www.cookyancey.com/assets/uploads/2019/06/blank-profile.jpg",
        }}
      />
      <View style={styles.body}>
        <TouchableOpacity style={styles.infoContainer}>
          <Text>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoContainer}>
          <Text>JohnDoe@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoContainer}>
          <Text>(123)-456-7890</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: undefined,
    aspectRatio: 2,
  },
  header: {
    backgroundColor: "#84f542",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  body: {
    marginTop: 100,
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  infoContainer: {
    fontWeight: "bold",
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 10,
    backgroundColor: "#63a832",
  },
});
