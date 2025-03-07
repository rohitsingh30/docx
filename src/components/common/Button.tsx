import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { theme } from '../../styles/theme';
import { buttonStyles, commonStyles } from 'src/styles/commonStyles';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  textStyle,
  icon,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return buttonStyles.primaryButton;
      case 'secondary':
        return buttonStyles.secondaryButton;
      case 'outline':
        return buttonStyles.outlineButton;
      default:
        return buttonStyles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'primary':
        return commonStyles.primaryText;
      case 'secondary':
        return textStyle.secondaryText;
      case 'outline':
        return textStyle.outlineText;
      default:
        return textStyle.primaryText;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(),
        fullWidth && styles.fullWidth,
        disabled && buttonStyles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={variant === 'outline' ? theme.colors.primary : theme.colors.textInverted} 
        />
      ) : (
        <>
          {icon && icon}
          <Text 
            style={[
                textStyle.text, 
              getTextStyle(), 
              disabled && textStyle.disabledText,
              icon ? { marginLeft: theme.spacing.xs } : null,
              textStyle
            ]}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};


export default Button;