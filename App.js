import React from "react";
import { View, Text, StyleSheet, Button , TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondView from "./Views/SecondView";


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


function NewScreen({navigation}){
  return(
    <View>
      <Text>Hello , i am (NewScreen)</Text>
      <Button title="Next" 
        onPress={()=> navigation.navigate("New")}
      ></Button>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={SecondView} />
        <Stack.Screen name="New" component={NewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const style = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center' 
  }
});

export default App;
