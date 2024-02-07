import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

function App() {
  let [satate, setSatate] = useState("Hello");

  let handleClike = () => {
    setSatate("Hello world");
  };

  const [Enable, setEnable] = useState("courses");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mohammed Alsaad, {satate}</Text>
      <TouchableOpacity
      style={styles.buttonStyle}
      onPress={handleClike}
      >
        <Text>
          Change
        </Text>
      </TouchableOpacity>

      <Text style={styles.title}>Your Selection is: </Text>
      <Text style={styles.selctionTilte}>{Enable}</Text>

      <Picker
        selectedValue={Enable}
        style={{ height: 100, width: 180 }}
        mode={"dialog"}
        onValueChange={(itemValue) => setEnable(itemValue)}
      >
        <Picker.Item label="swift" value="swift" />
        <Picker.Item label="C#" value="C#" />
        <Picker.Item label="JavaScript" value="JavaScript" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: 400,
  },
  selctionTilte: {
    alignItems: "leading",
    justifyContent: "leading",
  },
  buttonStyle: {
    padding: 16, 
    backgroundColor: "blue", 
    borderRadius: 16,
  }
});

export default App;
