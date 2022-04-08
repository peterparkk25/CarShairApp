import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
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
          <Text>Please Choose Your Desired Make</Text>
          <DropDownPicker
            open={openMakes}
            value={make}
            items={makeData}
            setOpen={setOpenMakes}
            setValue={setMake}
            setItems={setMakeData}
            searchable={true}
            onChangeValue={() => {
              getAllModels();
            }}
          />
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text>Please Choose Your Desired Model</Text>
          <DropDownPicker
            open={openModels}
            value={model}
            items={modelData}
            setOpen={setOpenModels}
            setValue={setModel}
            setItems={setModelData}
            searchable={true}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
