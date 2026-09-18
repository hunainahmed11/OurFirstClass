import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// SECOND APP: uncomment this import and the SecondStackNavigator below
import SecondStackNavigator from './src/screenSecond/StackNavigator';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'}/>
      <NavigationContainer>
        {/* FIRST APP: screens folder */}
        {/* <DrawerNavigator /> */}

        {/* SECOND APP: screenSecond folder */}
        <SecondStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


