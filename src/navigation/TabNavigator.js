import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PracticeScreen from '../screens/PracticeScreen';
import AboutScreen from '../screens/AboutScreen';
import MapVsFlatListScreen from '../screens/MapVsFlatListScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home', tabBarIcon: () => <Text>🏠</Text> }}
      />
      <Tab.Screen
        name="TopicsTab"
        component={MapVsFlatListScreen}
        options={{ tabBarLabel: 'Topics', tabBarIcon: () => <Text>📚</Text> }}
      />
      <Tab.Screen
        name="PracticeTab"
        component={PracticeScreen}
        options={{ tabBarLabel: 'Practice', tabBarIcon: () => <Text>✏️</Text> }}
      />
      <Tab.Screen
        name="AboutTab"
        component={AboutScreen}
        options={{ tabBarLabel: 'About', tabBarIcon: () => <Text>ℹ️</Text> }}
      />
    </Tab.Navigator>
  );
}
