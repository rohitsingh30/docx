import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import UserNavigator from './UserNavigator';
import DoctorNavigator from './DoctorNavigator';
import { useAuth } from '../context/AuthContext';
import LoadingScreen from '../components/common/LoadingScreen';

const AppNavigator = () => {
  const { user, userType, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {!user ? (
        <AuthNavigator />
      ) : userType === 'doctor' ? (
        <DoctorNavigator />
      ) : (
        <UserNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
