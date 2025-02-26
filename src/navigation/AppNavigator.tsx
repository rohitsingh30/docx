import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import DashboardScreen from '../screens/home/DashboardScreen';
import ChatBotScreen from '../screens/chat/ChatBotScreen';
import DoctorSearchScreen from '../screens/doctor/DoctorSearchScreen';
import DoctorProfileScreen from '../screens/doctor/DoctorProfileScreen';
import AppointmentBookingScreen from '../screens/appointment/AppointmentBookingScreen';
import AppointmentConfirmationScreen from '../screens/appointment/AppointmentConfirmationScreen';
import MedicalRecordsScreen from '../screens/records/MedicalRecordsScreen';
import ReportDetailScreen from '../screens/records/ReportDetailScreen';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="ChatBot" component={ChatBotScreen} />
        <Stack.Screen name="DoctorSearch" component={DoctorSearchScreen} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
        <Stack.Screen name="AppointmentBooking" component={AppointmentBookingScreen} />
        <Stack.Screen name="AppointmentConfirmation" component={AppointmentConfirmationScreen} />
        <Stack.Screen name="MedicalRecords" component={MedicalRecordsScreen} />
        <Stack.Screen name="ReportDetail" component={ReportDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
