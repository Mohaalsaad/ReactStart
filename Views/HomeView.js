import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {NavigationContainer} from '@react-navigation/native';


function App() {
  let [satate, setSatate] = useState("Hello");

  let handleClike = () => {
    setSatate("Hello world");
  };

  const [Enable, setEnable] = useState("courses");

  return (
   <NavigationContainer>
      <View style={styles.container}>
      <Text 
      style={styles.title}>Mohammed Alsaad, {satate}</Text>
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
    </View>
   </NavigationContainer>
  );
}

function ProfileScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text>Name: {route.params.name}</Text>
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
