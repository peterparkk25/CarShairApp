import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

export default function RentScreen({ navigation }) {
  //MOSH
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [masterData, setmasterData] = useState([]);
  useEffect(() => {
    const apiURL =
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/honda?format=json";
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setmasterData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((car) => {
        const carData = car.Make_Name
          ? car.Make_Name.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return carData.indexOf(textData) > -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      setData(masterData);
      setSearch(text);
    }
  };
  //NEW
  // const [filteredData, setfilteredData] = useState([]);
  // const [masterData, setmasterData] = useState([]);

  // useEffect(() => {
  //   console.log(filteredData);
  //   fetchCarData();
  //   return () => {};
  // }, []);

  // const fetchCarData = () => {
  //   const apiURL =
  //     "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/honda?format=json";
  //   fetch(apiURL)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       setfilteredData(responseJson);
  //       setmasterData(responseJson);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <TextInput
            style={styles.textInputStyle}
            value={search}
            placeholder="Search Here"
            onChangeText={(text) => searchFilter()}
          ></TextInput>
          <Text style={{ fontSize: 18, color: "green", textAlign: "center" }}>
            {data.Results.map((car) => {
              return (
                <Text>
                  <Text>
                    {car.Make_Name} {car.Model_Name}
                  </Text>
                </Text>
              );
            })}
          </Text>
        </View>
      )}
    </View>
  );
}
//   const ItemView = ({ item }) => {
//     return (
//       <Text style={styles.itemStyle}>
//         {item.Results[0].Make_Model}
//         {". "}
//       </Text>
//     );
//   };

//   const ItemSeparatorView = () => {
//     return (
//       <View
//         style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8" }}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <FlatList
//           data={filteredData}
//           // keyExtractor={(item, index) => index.toString()}
//           ItemSeparatorComponent={ItemSeparatorView}
//           renderItem={ItemView}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "white",
  },
});
