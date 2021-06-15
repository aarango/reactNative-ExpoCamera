import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from '../screens/CameraScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator();



function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

