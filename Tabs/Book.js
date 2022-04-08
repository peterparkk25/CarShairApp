import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function BookScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [openMakes, setOpenMakes] = useState(false);
  const [openModels, setOpenModels] = useState(false);
  const [allMakeData, setAllMakeData] = useState([]);
  const [makeData, setMakeData] = useState([]);
  const [make, setMake] = useState(null);
  const [allModelData, setAllModelData] = useState([]);
  const [modelData, setModelData] = useState([]);
  const [model, setModel] = useState([]);

  useEffect(() => {
    const allMakesURL =
      "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json";
    fetch(allMakesURL)
      .then((response) => response.json())
      .then((json) => {
        setAllMakeData(json);
        const makeDataArray = json.Results.map((make) => {
          return { label: make.Make_Name, value: make.Make_Name };
        });
        setMakeData(makeDataArray);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const getAllModels = () => {
    const allModelsURL = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`;
    fetch(allModelsURL)
      .then((response) => response.json())
      .then((json) => {
        setAllModelData(json);
        const modelDataArray = json.Results.map((model) => {
          return { label: model.Model_Name, value: model.Model_Name };
        });
        setModelData(modelDataArray);
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <View style={styles.header}>
            <ImageBackground
              source={require("../assets/Porsche_GT3RS_Rear.png")}
              style={styles.background}
            >
              <Text style={styles.headerText}>
                Please choose the year, make, and model you'd like to search!
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.body}>
            <Text style={styles.label}>Please Choose Your Desired Make</Text>
            <DropDownPicker
              open={openMakes}
              value={make}
              items={makeData}
              setOpen={setOpenMakes}
              setValue={setMake}
              setItems={setMakeData}
              searchable={true}
              maxHeight={150}
              style={styles.dropDownPicker}
              onChangeValue={() => {
                getAllModels();
              }}
            />
            <Text style={styles.label}>Please Choose Your Desired Model</Text>
            <DropDownPicker
              open={openModels}
              value={model}
              items={modelData}
              setOpen={setOpenModels}
              setValue={setModel}
              setItems={setModelData}
              searchable={true}
              maxHeight={150}
              style={styles.dropDownPicker}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Button
                title="Search!"
                color="black"
                onPress={() => navigation.navigate("Results")}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    backgroundColor: "#63a832",
    fontWeight: "bold",
  },
  background: {
    width: "100%",
    height: undefined,
    aspectRatio: 2,
  },
  dropDownPicker: {
    marginTop: 10,
    marginBottom: 100,
  },
  label: {
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  body: {
    alignItems: "center",
    padding: 30,
  },
  searchButton: {
    width: "60%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#63a832",
  },
});
