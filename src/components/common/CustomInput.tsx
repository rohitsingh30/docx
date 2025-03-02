import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography, commonStyles } from '../../styles/commonStyles';

interface CustomInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  error?: string;
  label?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  error,
  label,
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={commonStyles.label}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        style={[commonStyles.input, error ? commonStyles.inputError : {}]}
      />
      {error && <Text style={commonStyles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: spacing.medium,
  }
});

export default CustomInput;
