import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getAuth, onAuthStateChanged} from '@react-native-firebase/auth';
import HomeScreen from './HomeScreen';
import CounterScreen from './CounterScreen';
import TimerScreen from './TimerScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import GetApi from './GetApi';
import PostApi from './PostApi';
import Comment from './Comment';
import DeleteApi from './DeleteApi';
import UpdateApi from './UpdateAPi';
import PatchApi from './PatchApi';
import InstaPost from './InstaPost';
import Login from './Login';
import SignUp from './SignUp';
import AddStudent from './AddStudent';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), currentUser => {
      setUser(currentUser);
      setLoading(false);
      console.log('Current User:', currentUser);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      {user == null ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Counter" component={CounterScreen} />
          <Stack.Screen name="Timer" component={TimerScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="GetApi" component={GetApi} />
          <Stack.Screen name="PostApi" component={PostApi} />
          <Stack.Screen name="Comment" component={Comment} />
          <Stack.Screen name="DeleteApi" component={DeleteApi} />
          <Stack.Screen name="UpdateApi" component={UpdateApi} />
          <Stack.Screen name="PatchApi" component={PatchApi} />
          <Stack.Screen name="InstaPost" component={InstaPost} />
          <Stack.Screen name="AddStudent" component={AddStudent} />
        </>
      )}
    </Stack.Navigator>
  );
}