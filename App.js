import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import{createAppContainer}from 'react-navigation';
import{createBottomTabNavigator}from 'react-navigation-tabs';
import TransactionScreen from './screens/BookTransactionScreen';
import Searchscreen from './screens/SearchScreen';


export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF00FF',
    alignItems: 'center'
  }
});

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:Searchscreen},
})
const AppContainer = createAppContainer(TabNavigator)