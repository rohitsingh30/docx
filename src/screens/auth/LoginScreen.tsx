import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { styles } from './styles/LoginScreenStyles';
import AuthContext from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMedkit } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme';

const TEST_USER = {
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
  userType: 'patient' as 'patient'
};

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  const { login } = authContext;

  const handleLogin = async () => {
    try {
      await login(TEST_USER);
      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <FontAwesomeIcon icon={faMedkit} size={60} color={theme.colors.primary} />
          <Text style={styles.title}>Doc-x</Text>
          <Text style={styles.tagline}>Your health, our priority</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={() => navigation.navigate('SignUp')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;