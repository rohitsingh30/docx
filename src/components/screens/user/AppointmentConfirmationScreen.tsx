// React and React Native imports
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

// Third-party imports
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Local imports
import { RootStackParamList } from '../../../types/types';
import Header from '../../common/Header';
import { commonStyles, sharedStyles } from '../../../styles/commonStyles';

const AppointmentConfirmationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="Appointment Confirmed!" />

      <View style={commonStyles.contentContainer}>
        <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
          <Text style={[commonStyles.titleText, { textAlign: 'center' }]}>
            Your appointment has been successfully booked!
          </Text>
        </View>

        <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
          <TouchableOpacity
            style={[commonStyles.primaryButton, sharedStyles.shadow]}
            onPress={() => navigation.navigate('Dashboard')}
            accessibilityRole="button"
            accessibilityLabel="Return to Dashboard"
          >
            <Text style={commonStyles.primaryButtonText}>Return to Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[commonStyles.primaryButton, sharedStyles.shadow, { marginTop: 16 }]}
            onPress={() => navigation.navigate('ChatBot')}
            accessibilityRole="button"
            accessibilityLabel="Start a new health check"
          >
            <Text style={commonStyles.primaryButtonText}>Start a New Check</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[commonStyles.primaryButton, sharedStyles.shadow, { marginTop: 16 }]}
            onPress={() => navigation.navigate('DoctorSearch')}
            accessibilityRole="button"
            accessibilityLabel="Book another consultation"
          >
            <Text style={commonStyles.primaryButtonText}>Book Another Consultation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppointmentConfirmationScreen;
