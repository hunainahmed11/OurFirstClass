import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ComponentsScreen from '../screens/ComponentsScreen';
import StylingScreen from '../screens/StylingScreen';
import FlexboxScreen from '../screens/FlexboxScreen';
import SafeAreaScreen from '../screens/SafeAreaScreen';
import ConditionsScreen from '../screens/ConditionsScreen';
import LoopsScreen from '../screens/LoopsScreen';
import ArraysScreen from '../screens/ArraysScreen';
import ArrayMethodsScreen from '../screens/ArrayMethodsScreen';
import MapScreen from '../screens/MapScreen';
import FlatListScreen from '../screens/FlatListScreen';
import MapVsFlatListScreen from '../screens/MapVsFlatListScreen';
import NavigationDemoScreen from '../screens/NavigationDemoScreen';
import PracticeScreen from '../screens/PracticeScreen';
import AboutScreen from '../screens/AboutScreen';
import StudentScreen from '../screens/StudentScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Components" component={ComponentsScreen} />
      <Stack.Screen name="Styling" component={StylingScreen} />
      <Stack.Screen name="Flexbox" component={FlexboxScreen} />
      <Stack.Screen name="SafeArea" component={SafeAreaScreen} />
      <Stack.Screen name="Conditions" component={ConditionsScreen} />
      <Stack.Screen name="Loops" component={LoopsScreen} />
      <Stack.Screen name="Arrays" component={ArraysScreen} />
      <Stack.Screen name="ArrayMethods" component={ArrayMethodsScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="FlatList" component={FlatListScreen} />
      <Stack.Screen name="MapVsFlatList" component={MapVsFlatListScreen} />
      <Stack.Screen name="NavigationDemo" component={NavigationDemoScreen} />
      <Stack.Screen name="Practice" component={PracticeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="StudentScreen" component={StudentScreen} />
    </Stack.Navigator>
  );
}
