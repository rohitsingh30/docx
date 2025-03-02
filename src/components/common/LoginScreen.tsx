import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/types';
import { AuthContext } from '../../context/AuthContext';
import { commonStyles } from '../../styles/commonStyles';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { login } = useContext(AuthContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDoctor, setIsDoctor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    setIsLoading(true);
    try {
      // For demo purposes, we'll simulate different user types
      const userData = {
        id: '123',
        email,
        name: isDoctor ? 'Dr. John Doe' : 'John Smith',
        type: isDoctor ? 'doctor' : 'user',
      };

      await login(userData);
      // Navigation will be handled by AppNavigator based on user type
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView contentContainerStyle={commonStyles.loginScrollContainer}>
        <View style={commonStyles.logoContainer}>
          <Text style={commonStyles.appName}>Doc-X</Text>
          <Text style={commonStyles.tagline}>Your Health, Our Priority</Text>
        </View>

        <View style={commonStyles.formContainer}>
          <CustomInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <CustomInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity 
            style={commonStyles.userTypeContainer}
            onPress={() => setIsDoctor(!isDoctor)}
          >
            <View style={commonStyles.checkboxContainer}>
              <View style={[commonStyles.checkbox, isDoctor && commonStyles.checkboxChecked]}>
                {isDoctor && <View style={commonStyles.checkboxInner} />}
              </View>
              <Text style={commonStyles.userTypeText}>Login as Doctor</Text>
            </View>
          </TouchableOpacity>

          <CustomButton
            title="Login"
            onPress={handleLogin}
            isLoading={isLoading}
            style={commonStyles.loginButton}
          />

          <TouchableOpacity 
            style={commonStyles.forgotPasswordContainer}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={commonStyles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={commonStyles.footer}>
          <Text style={commonStyles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={commonStyles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
