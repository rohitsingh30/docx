import React, { useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AuthContext from '../../context/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Please login to access this page</Text>
      </View>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
