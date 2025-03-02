import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../navigation/NavigationTypes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, spacing, commonStyles } from '../../styles/commonStyles';
import Header from '../../components/common/Header';

const AppointmentManagementScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="Appointments" />
      
      <ScrollView style={commonStyles.container}>
        <View style={{ padding: spacing.medium }}>
          {/* Today's Appointments */}
          <View style={[commonStyles.sectionContainer, { marginBottom: spacing.large }]}>
            <Text style={[commonStyles.titleText, { marginBottom: spacing.medium }]}>Today's Appointments</Text>
            <TouchableOpacity 
              style={[commonStyles.listItem, { marginBottom: spacing.small }]}
              onPress={() => {}}
            >
              <View style={{ flex: 1 }}>
                <Text style={commonStyles.bodyText}>John Smith</Text>
                <Text style={commonStyles.smallText}>10:00 AM - General Checkup</Text>
              </View>
              <Icon name="video-camera" size={16} color={colors.primary} />
            </TouchableOpacity>
          </View>

          {/* Upcoming Appointments */}
          <View style={commonStyles.sectionContainer}>
            <Text style={[commonStyles.titleText, { marginBottom: spacing.medium }]}>Upcoming Appointments</Text>
            <TouchableOpacity 
              style={[commonStyles.listItem, { marginBottom: spacing.small }]}
              onPress={() => {}}
            >
              <View style={{ flex: 1 }}>
                <Text style={commonStyles.bodyText}>Sarah Johnson</Text>
                <Text style={commonStyles.smallText}>Tomorrow, 2:30 PM - Follow-up</Text>
              </View>
              <Icon name="calendar" size={16} color={colors.primary} />
            </TouchableOpacity>
          </View>

          {/* Action Button */}
          <TouchableOpacity 
            style={[commonStyles.primaryButton, { marginTop: spacing.large }]}
            onPress={() => navigation.navigate('AvailabilitySettings')}
          >
            <Text style={commonStyles.primaryButtonText}>Manage Availability</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentManagementScreen;