import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Pages from '../screens';
import {Show} from '../models/ShowModel';
const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  ShowDetails: {show: Show};
};

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Pages.Home} />
        <Stack.Screen name="ShowDetails" component={Pages.ShowDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
