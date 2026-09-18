import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// SECOND APP
import SecondStackNavigator from './src/screenSecond/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <SecondStackNavigator />
    </NavigationContainer>
  );
}