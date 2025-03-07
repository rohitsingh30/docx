import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DoctorStackParamList } from '../types/types';

// Use the existing doctor screens folder structure
import DoctorDashboardScreen from '../components/screens/doctor/DoctorDashboardScreen';
import ReportVerificationScreen from '../components/screens/doctor/ReportVerificationScreen';
import ReportDetailScreen from '../components/screens/user/ReportDetailScreen';
import AppointmentManagementScreen from '../components/screens/doctor/AppointmentManagementScreen';
import AppointmentConfirmationScreen from '../components/screens/user/AppointmentConfirmationScreen';
import AvailabilitySettingsScreen from '../components/screens/doctor/AvailabilitySettingsScreen';
import ConsultationSettingsScreen from '../components/screens/doctor/ConsultationSettingsScreen';
import DoctorProfileScreen from '../components/screens/doctor/DoctorProfileScreen';
import DoctorChatScreen from '../components/screens/doctor/DoctorChatScreen';
import AppointmentBookingScreen from '../components/screens/user/AppointmentBookingScreen';

const Stack = createStackNavigator<DoctorStackParamList>();

const DoctorNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="DoctorDashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DoctorDashboard" component={DoctorDashboardScreen} />
      <Stack.Screen name="ReportVerification" component={ReportVerificationScreen} />
      <Stack.Screen name="ReportDetail" component={ReportDetailScreen} />
      <Stack.Screen name="AppointmentManagement" component={AppointmentManagementScreen} />
      <Stack.Screen name="AppointmentDetail" component={AppointmentConfirmationScreen} />
      <Stack.Screen name="AvailabilitySettings" component={AvailabilitySettingsScreen} />
      <Stack.Screen name="ConsultationSettings" component={ConsultationSettingsScreen} />
      <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
      <Stack.Screen name="DoctorChat" component={DoctorChatScreen} />
      <Stack.Screen name="ConsultationRequests" component={AppointmentBookingScreen} />
    </Stack.Navigator>
  );
};

export default DoctorNavigator;
