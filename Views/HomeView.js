import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

const HomeView = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate("SecondView")
      }
    />
  );
};


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

export default HomeView;
