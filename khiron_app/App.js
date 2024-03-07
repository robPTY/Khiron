import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';



export default function App(){
  return(
      <View>
        <Text>HI</Text>

      </View>
  );
}