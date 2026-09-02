import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';

// SECOND APP: uncomment this import and the SecondStackNavigator below
import SecondStackNavigator from './src/screenSecond/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* FIRST APP: screens folder */}
      <DrawerNavigator />

      {/* SECOND APP: screenSecond folder */}
      {/* <SecondStackNavigator /> */}
    </NavigationContainer>
  );
}


