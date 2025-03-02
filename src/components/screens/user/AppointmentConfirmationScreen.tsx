import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/NavigationTypes';
import Header from '../../components/common/Header';
import { commonStyles } from '../../styles/commonStyles';
import { styles } from './styles/AppointmentConfirmationScreenStyles';

const AppointmentConfirmationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={commonStyles.container}>
      <Header title="Appointment Confirmed!" />

      <View style={styles.content}>
        <Text style={styles.confirmationText}>
          Your appointment has been successfully booked!
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={commonStyles.primaryButton}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text style={commonStyles.primaryButtonText}>Return to Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[commonStyles.primaryButton, { marginTop: 16 }]}
            onPress={() => navigation.navigate('ChatBot')}
          >
            <Text style={commonStyles.primaryButtonText}>Start a New Check</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[commonStyles.primaryButton, { marginTop: 16 }]}
            onPress={() => navigation.navigate('DoctorSearch')}
          >
            <Text style={commonStyles.primaryButtonText}>Book Another Consultation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AppointmentConfirmationScreen;
