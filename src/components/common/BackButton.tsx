import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { buttonStyles } from '../../styles/commonStyles';
import { theme } from '../../styles/theme'

interface BackButtonProps {
  onPress?: () => void;
  testID?: string;
  accessibilityLabel?: string;
  iconSize?: number;
  iconColor?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ 
  onPress,
  testID = 'back-button',
  accessibilityLabel = 'Go back',
  iconSize = 24,
  iconColor = theme.colors.primary
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity 
      style={buttonStyles.backButton}
      onPress={handlePress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessible={true}
    >
      <Icon name="arrow-back" size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default BackButton;
