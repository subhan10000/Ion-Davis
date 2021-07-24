/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import colors from './src/assets/colors/color';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Login from './src/screen/login';
import  Signup from './src/screen/sign-up';
import  ForgotPassword from './src/screen/forgot-password';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="Signup" component={Signup}
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}
      options={{
        headerShown: false,
      }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Login;
