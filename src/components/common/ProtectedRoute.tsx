import React, { useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { colors, commonStyles } from '../../styles/commonStyles';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={commonStyles.centeredContent}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={commonStyles.centeredContent}>
        <Text style={commonStyles.bodyText}>Please login to access this page</Text>
      </View>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;