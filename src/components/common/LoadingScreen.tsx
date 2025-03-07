import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { commonStyles, theme } from '../../styles/commonStyles';

const LoadingScreen = () => {
  return (
    <View style={commonStyles.centeredContent}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

export default LoadingScreen;
