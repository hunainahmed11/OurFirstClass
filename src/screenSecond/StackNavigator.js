import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SignUp from './SignUp';
import Login from './Login';
import SignOut from './SignOut';
import CounterScreen from './CounterScreen';
import TimerScreen from './TimerScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import UserProfileScreen from './UserProfileScreen';
import CommentScreen from './CommentScreen';
import AddStudent from './AddStudent';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignOut" component={SignOut} />
      <Stack.Screen name="Counter" component={CounterScreen} />
      <Stack.Screen name="Timer" component={TimerScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="Comment" component={CommentScreen} />
      <Stack.Screen name="AddStudent" component={AddStudent} />
    </Stack.Navigator>
  );
}