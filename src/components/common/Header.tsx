import React from 'react';
import { View, Text } from 'react-native';
import BackButton from './BackButton';
import { commonStyles } from '../../styles/commonStyles';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  alignTitle?: 'left' | 'center' | 'right';
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = true, alignTitle = 'left' }) => {
  return (
    <View style={commonStyles.header}>
      {showBackButton && <BackButton />}
      <Text style={[
        commonStyles.headerTitle,
        alignTitle === 'right' && { textAlign: 'right', flex: 1 },
        alignTitle === 'center' && { textAlign: 'center', flex: 1 }
      ]}>
        {title}
      </Text>
      <View style={commonStyles.headerRight} />
    </View>
  );
};

export default Header;
