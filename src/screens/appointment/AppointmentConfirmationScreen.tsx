import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Header from '../../components/common/Header';
import { styles } from './styles/AppointmentConfirmationScreenStyles';

const AppointmentConfirmationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Header title="Appointment Confirmed!" />

      <View style={styles.content}>
        <Text style={styles.confirmationText}>
          Your appointment has been successfully booked!
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text style={styles.buttonText}>Return to Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ChatBot')}
          >
            <Text style={styles.buttonText}>Start a New Check</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('DoctorSearch')}
          >
            <Text style={styles.buttonText}>Book Another Consultation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AppointmentConfirmationScreen;
