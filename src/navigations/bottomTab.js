import {React} from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ForgetPassword from '../screens/auth/forgetPassword';
import LoginScreen from '../screens/auth/login'
import RegisterScreen from '../screens/auth/register'
import homeScreen from '../screens/home/home';
 const Tab =createBottomTabNavigator()

export default function BottomTab() {
 

    return (
  <Tab.Navigator>
   <Tab.Screen name ="HomeStack" component={homeScreen} />
   <Tab.Screen name ="login" component={LoginScreen}/>
   <Tab.Screen name ="ForgetPassword" component={ForgetPassword}/>
  
  </Tab.Navigator>
    )
  }

