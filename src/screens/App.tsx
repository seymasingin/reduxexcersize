import React from "react";
import Primary from "./Primary";
import Secondary from "./Secondary";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import UserProvider from "../context/Provider.js";

const Tab = createBottomTabNavigator();


function App() {
  return(
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Primary" component={Primary}/>
          <Tab.Screen name="Secondary" component={Secondary}/>
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  )
}

export default App;
