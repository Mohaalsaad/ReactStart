import React from "react";

import { NavigationContainergit } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "./Views/HomeView"
import SecondView from "./Views/SecondView"
import SpashView from "./Views/SplashView"

const Stack = createStackNavigator();

export default function App() {
  return(
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name=" " component={SpashView}/>
          <Stack.Screen name="SecondView" component={SecondView}/> 
        </Stack.Navigator>
      </NavigationContainer>
  ); 
};


