import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Header from '../../components/common/Header';
import { styles } from './styles/DashboardScreenStyles';

const DashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const generateReport = () => {
    // Generate a sample report
    return {
      symptoms: [],
      possibleConditions: [],
      recommendations: [],
      shouldSeeDoctor: false
    };
  };

  return (
    <ScrollView style={styles.container}>
      {/* Dashboard Header */}
      <Header title="Dashboard" showBackButton={false} alignTitle="right" />


      {/* Main Content */}
      <View style={styles.content}>
        {/* Upcoming Appointments and Generated Reports */}
        <View style={styles.grid}>
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('AppointmentConfirmation')}
          >
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/_HHH4qm3yc5YI6t3jwPltvKT3NIAGhZZ7X2r58Su4Rc.jpg' }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Upcoming Appointment</Text>
            <Text style={styles.cardSubtitle}>Next: Dr. Smith, Oct 20</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('MedicalRecords', { report: generateReport() })}
          >
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/jzP6nTWghNH5vT3wxSE9hvyZepeAVGDHdkgtjRxREy4.jpg' }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Generated Report</Text>
            <Text style={styles.cardSubtitle}>Latest insights on your health</Text>
          </TouchableOpacity>
        </View>

        {/* Updates */}
        <View style={styles.updates}>
          <Text style={styles.updatesTitle}>Updates</Text>
          <View style={styles.notification}>
            <Text style={styles.notificationIcon}>🔔</Text>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>New Report Generated</Text>
              <Text style={styles.notificationText}>A new health report has been generated.</Text>
            </View>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ChatBot')}
        >
          <Text style={styles.buttonText}>Start a New Check</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default DashboardScreen;
