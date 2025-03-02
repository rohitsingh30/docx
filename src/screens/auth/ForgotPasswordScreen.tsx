import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import CustomInput from '../../components/common/CustomInput';
import { colors, spacing, commonStyles } from '../../styles/commonStyles';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    setIsLoading(true);
    
    try {
      // TODO: Implement actual password reset logic with your API
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      Alert.alert(
        'Success',
        'If an account exists with this email, you will receive password reset instructions.',
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to send reset instructions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <View style={[commonStyles.container, { justifyContent: 'center' }]}>
        <View style={{ marginBottom: spacing.large }}>
          <Text style={commonStyles.titleText}>Reset Password</Text>
          <Text style={commonStyles.bodyText}>
            Enter your email address and we'll send you instructions to reset your password.
          </Text>
        </View>

        <View style={{ marginBottom: spacing.medium }}>
          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={[commonStyles.primaryButton, isLoading && commonStyles.disabledButton]}
            onPress={handleResetPassword}
            disabled={isLoading}
          >
            <Text style={commonStyles.primaryButtonText}>
              {isLoading ? 'Sending...' : 'Send Reset Instructions'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ alignItems: 'center', padding: spacing.medium }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: colors.primary, fontSize: 16 }}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;