import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import UserNavigator from './UserNavigator';
import DoctorNavigator from './DoctorNavigator';
import AuthNavigator from './AuthNavigator';

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