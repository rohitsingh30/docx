import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserStackParamList } from './NavigationTypes';

// Import user screens
import DashboardScreen from '../screens/home/DashboardScreen';
import ChatBotScreen from '../screens/chat/ChatBotScreen';
import DoctorSearchScreen from '../screens/doctor/DoctorSearchScreen';
import DoctorProfileScreen from '../screens/doctor/DoctorProfileScreen';
import AppointmentBookingScreen from '../screens/appointment/AppointmentBookingScreen';
import AppointmentConfirmationScreen from '../screens/appointment/AppointmentConfirmationScreen';
import MedicalRecordsScreen from '../screens/records/MedicalRecordsScreen';
import ReportDetailScreen from '../screens/records/ReportDetailScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import HelpScreen from '../screens/help/HelpScreen';

const Stack = createStackNavigator<UserStackParamList>();

const UserNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#ffffff' }
      }}
    >
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="ChatBot" component={ChatBotScreen} />
      <Stack.Screen name="DoctorSearch" component={DoctorSearchScreen} />
      <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
      <Stack.Screen name="AppointmentBooking" component={AppointmentBookingScreen} />
      <Stack.Screen name="AppointmentConfirmation" component={AppointmentConfirmationScreen} />
      <Stack.Screen name="MedicalRecords" component={MedicalRecordsScreen} />
      <Stack.Screen name="ReportDetail" component={ReportDetailScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
    </Stack.Navigator>
  );
};

export default UserNavigator;