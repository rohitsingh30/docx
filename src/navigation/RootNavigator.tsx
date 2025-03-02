import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import UserNavigator from './UserNavigator';
import DoctorNavigator from './DoctorNavigator';
import AuthNavigator from '../screens/auth/AuthNavigator';

const RootNavigator = () => {
  const { user, userType } = useAuth();

  return (
    <NavigationContainer>
      {!user ? (
        <AuthNavigator />
      ) : (
        userType === 'doctor' ? <DoctorNavigator /> : <UserNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;