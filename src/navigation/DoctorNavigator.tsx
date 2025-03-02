import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DoctorStackParamList } from './NavigationTypes';

// Import doctor screens
import DoctorDashboardScreen from '../screens/doctor/DoctorDashboardScreen';
import ReportVerificationScreen from '../screens/doctor/ReportVerificationScreen';
import AppointmentManagementScreen from '../screens/doctor/AppointmentManagementScreen';
import AvailabilitySettingsScreen from '../screens/doctor/AvailabilitySettingsScreen';
import ConsultationSettingsScreen from '../screens/doctor/ConsultationSettingsScreen';
import DoctorProfileScreen from '../screens/doctor/DoctorProfileScreen';
import DoctorChatScreen from '../screens/doctor/DoctorChatScreen';
import PaymentHistoryScreen from '../screens/doctor/PaymentHistoryScreen';

const Stack = createStackNavigator<DoctorStackParamList>();

const DoctorNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="DoctorDashboard"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#ffffff' }
      }}
    >
      <Stack.Screen name="DoctorDashboard" component={DoctorDashboardScreen} />
      <Stack.Screen name="ReportVerification" component={ReportVerificationScreen} />
      <Stack.Screen name="AppointmentManagement" component={AppointmentManagementScreen} />
      <Stack.Screen name="AvailabilitySettings" component={AvailabilitySettingsScreen} />
      <Stack.Screen name="ConsultationSettings" component={ConsultationSettingsScreen} />
      <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
      <Stack.Screen name="DoctorChat" component={DoctorChatScreen} />
      <Stack.Screen name="PaymentHistory" component={PaymentHistoryScreen} />
    </Stack.Navigator>
  );
};

export default DoctorNavigator;