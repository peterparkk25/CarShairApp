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

export default function RentScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [allMakeData, setAllMakeData] = useState([]);
  const [makeData, setMakeData] = useState([]);
  const [make, setMake] = useState(null);
  const [allModelData, setAllModelData] = useState([]);
  const [modelData, setModelData] = useState([]);

  useEffect(() => {
    const allMakesURL =
      "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json";
    fetch(allMakesURL)
      .then((response) => response.json())
      .then((json) => {
        setAllMakeData(json);
        const makeDataArray = allMakeData.Results.map((make) => {
          return { label: make.Make_Name, value: make.Make_Name };
        });
        setMakeData(makeDataArray);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const allModelsURL = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`;
    fetch(allModelsURL)
      .then((response) => response.json())
      .then((json) => {
        setAllModelData(json);
        const modelDataArray = allModelData.Results.map((model) => {
          return { label: model.Model_Name, value: model.Model_Name };
        });
        setModelData(modelDataArray);
        console.log(modelData);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [make]);

  useEffect(() => {
    console.log(make);
  }, [make]);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <DropDownPicker
          open={open}
          value={make}
          items={makeData}
          setOpen={setOpen}
          setValue={setMake}
          setItems={setMakeData}
          searchable={true}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

{
  /* {testing ? (
            <Text>Please Choose Your Make Before You Move On</Text>
          ) : (
            <Text>
              <DropDownPicker
                open={open}
                value={value}
                items={makeData}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setMakeData}
                searchable={true}
              />
            </Text>
          )} */
}
