import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../styles/commonStyles';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  disabled?: boolean;
  style?: any;
  textStyle?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  isLoading = false,
  disabled = false,
  style,
  textStyle,
}) => {
  const getButtonStyle = () => {
    if (variant === 'secondary') {
      return styles.secondaryButton;
    } else if (variant === 'outline') {
      return styles.outlineButton;
    }
    return commonStyles.primaryButton;
  };

  const getTextStyle = () => {
    if (variant === 'secondary') {
      return styles.secondaryButtonText;
    } else if (variant === 'outline') {
      return styles.outlineButtonText;
    }
    return commonStyles.primaryButtonText;
  };

  return (
    <TouchableOpacity
      style={[
        getButtonStyle(),
        (disabled || isLoading) && commonStyles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.8}
    >
      {isLoading ? (
        <ActivityIndicator
          color={variant === 'primary' ? colors.textInverted : colors.primary}
          size="small"
        />
      ) : (
        <Text style={[getTextStyle(), textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  secondaryButton: {
    ...commonStyles.secondaryButton,
    backgroundColor: colors.primaryLight,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    minHeight: 48,
  },
  secondaryButtonText: {
    ...commonStyles.secondaryButtonText,
  },
  outlineButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CustomButton;
