
// Navigation/Navigation.js
import * as React from 'react';
import Search from '../Components/Search';
import FilmDetail from '../Components/FilmDetail';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const HomeScreen =({ navigation }) => {
  return (
    <Search/>
  );
}



const DetailsScreen = ({ navigation }) => {
  return (
    <FilmDetail/>
  );
}

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;