import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserNavigator from '../components/user/UserNavigator';
import DoctorNavigator from '../components/doctor/DoctorNavigator';
import { RootStackParamList } from '../types/NavigationTypes'; // Ensure the types are imported

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="User" component={UserNavigator} />
        <Stack.Screen name="Doctor" component={DoctorNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;