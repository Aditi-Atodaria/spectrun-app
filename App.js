import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FeedScreen from './screens/Feed';
import BottomTabNavigator from './navigation/TabNavigator';

export default class App extends Component{
  render(){
    return(
       <NavigationContainer> 
     <BottomTabNavigator/>
    </NavigationContainer>
    )
  }
}