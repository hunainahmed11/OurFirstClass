import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import StackNavigator from './StackNavigator';
import HomeScreen from '../screens/HomeScreen';
import ComponentsScreen from '../screens/ComponentsScreen';
import StylingScreen from '../screens/StylingScreen';
import FlexboxScreen from '../screens/FlexboxScreen';
import LoopsScreen from '../screens/LoopsScreen';
import ArraysScreen from '../screens/ArraysScreen';
import MapScreen from '../screens/MapScreen';
import FlatListScreen from '../screens/FlatListScreen';
import NavigationDemoScreen from '../screens/NavigationDemoScreen';
import AboutScreen from '../screens/AboutScreen';
import SafeAreaScreen from '../screens/SafeAreaScreen';
import StudentScreen from '../screens/StudentScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomeDrawer" screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="HomeDrawer" component={TabNavigator} options={{ title: 'Home' ,headerShown: true}} />
      <Drawer.Screen name="Components" component={ComponentsScreen} />
      <Drawer.Screen name="Styling" component={StylingScreen} />
      <Drawer.Screen name="Flexbox" component={FlexboxScreen} />
      <Drawer.Screen name="SafeArea" component={SafeAreaScreen} />
      <Drawer.Screen name="Loops" component={LoopsScreen} />
      <Drawer.Screen name="Arrays" component={ArraysScreen} />
      <Drawer.Screen name="Map" component={MapScreen} />
      <Drawer.Screen name="FlatList" component={FlatListScreen} />
      <Drawer.Screen name="NavigationDemo" component={NavigationDemoScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="All Screens (Stack)" component={StackNavigator} />
      <Drawer.Screen name="StudentScreen" component={StudentScreen} />
    </Drawer.Navigator>
  );
}
