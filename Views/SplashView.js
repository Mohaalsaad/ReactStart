import React from "react";
import { View , StyleSheet , Text, SafeAreaView , Image } from "react-native";

const SpashView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Mohammed
      </Text>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#199A8E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default SpashView;
