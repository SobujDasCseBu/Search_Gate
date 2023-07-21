import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import SignupPage from './SignUp';
import RegisterScreen from './Register';
import Login from './Login';
export default function App() {
  return (
    <View style={{flex:1}} >
      <SignupPage  />
    </View>
  );
}