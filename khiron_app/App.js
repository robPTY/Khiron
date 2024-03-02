import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';

const AppNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Loading',
  }
);

export default createAppContainer(AppNavigator);