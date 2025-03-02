import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DoctorStackParamList } from '../types/types';

// Import screens
import DoctorDashboardScreen from '../screens/doctor/DoctorDashboardScreen';
import ReportVerificationScreen from '../screens/doctor/ReportVerificationScreen';
import ReportDetailScreen from '../screens/doctor/ReportDetailScreen';
import AppointmentManagementScreen from '../screens/doctor/AppointmentManagementScreen';
import AppointmentDetailScreen from '../screens/doctor/AppointmentDetailScreen';
import AvailabilitySettingsScreen from '../screens/doctor/AvailabilitySettingsScreen';
import ConsultationSettingsScreen from '../screens/doctor/ConsultationSettingsScreen';
import DoctorProfileScreen from '../screens/doctor/DoctorProfileScreen';
import DoctorChatScreen from '../screens/doctor/DoctorChatScreen';
import ConsultationRequestsScreen from '../screens/doctor/ConsultationRequestsScreen';
import ConsultationRequestDetailScreen from '../screens/doctor/ConsultationRequestDetailScreen';

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
      <Stack.Screen name="AppointmentDetail" component={AppointmentDetailScreen} />
      <Stack.Screen name="AvailabilitySettings" component={AvailabilitySettingsScreen} />
      <Stack.Screen name="ConsultationSettings" component={ConsultationSettingsScreen} />
      <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
      <Stack.Screen name="DoctorChat" component={DoctorChatScreen} />
      <Stack.Screen name="ConsultationRequests" component={ConsultationRequestsScreen} />
      <Stack.Screen name="ConsultationRequestDetail" component={ConsultationRequestDetailScreen} />
    </Stack.Navigator>
  );
};

export default DoctorNavigator;
