import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import ForgetPassword from '../screens/auth/forgetPassword';

import HomeScreen from '../screens/home/home';
import ProductDetail from '../screens/home/productDetail';
import Cart from '../screens/home/cart';

import Settings from '../screens/profile/settings';
import UserDetail from '../screens/profile/userDetail';
import UserProfile from '../screens/profile/userProfile';


const RootStackNav = createNativeStackNavigator();
const AuthStackNav = createNativeStackNavigator();
const HomeStackNav = createNativeStackNavigator();
const ProfileStackNav = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <AuthStackNav.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#4F46E5' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <AuthStackNav.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
      <AuthStackNav.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
      <AuthStackNav.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ title: 'Forget Password' }}
      />
    </AuthStackNav.Navigator>
  );
}

function HomeStack() {
  return (
    <HomeStackNav.Navigator>
      <HomeStackNav.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <HomeStackNav.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Product Detail' }} />
      <HomeStackNav.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
    </HomeStackNav.Navigator>
  );
}

function ProfileStack() {
  return (
    <ProfileStackNav.Navigator>
      <ProfileStackNav.Screen name="UserProfile" component={UserProfile} options={{ title: 'User Profile' }} />
      <ProfileStackNav.Screen name="UserDetail" component={UserDetail} options={{ title: 'User Detail' }} />
      <ProfileStackNav.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
    </ProfileStackNav.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' }} />
      <Tab.Screen name="ProfileTab" component={ProfileStack} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
}

function MainDrawer() {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: true, 
      animationEnabled: true, 
      
      drawerStyle: {
        backgroundColor: '#1cb33f', width: 200, borderColor: 'black',
        borderWidth: 2,

      }
    }}>
      <Drawer.Screen name="MainTabs" component={MainTabs} options={{ title: 'Main App' }} />
      <Drawer.Screen name="UserProfile" component={UserProfile} options={{ title: 'Profile' }} />
      <Drawer.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
    </Drawer.Navigator>
  );
}

export default function RootStack() {
  return (
    <RootStackNav.Navigator screenOptions={{ headerShown: false, }}>
      <RootStackNav.Screen name="AuthStack" component={AuthStack} />
      <RootStackNav.Screen name="MainApp" component={MainDrawer} />
    </RootStackNav.Navigator>
  );
}


