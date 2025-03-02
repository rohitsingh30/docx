import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, spacing, commonStyles } from '../../styles/commonStyles';
import Header from '../../components/common/Header';

const DoctorDashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="Doctor Dashboard" />
      
      <ScrollView style={commonStyles.container}>
        <View style={{ padding: spacing.medium }}>
          {/* Quick Actions */}
          <View style={[commonStyles.sectionContainer, { marginBottom: spacing.large }]}>
            <Text style={[commonStyles.titleText, { marginBottom: spacing.medium }]}>Quick Actions</Text>
            <View style={commonStyles.flexRow}>
              <TouchableOpacity 
                style={[styles.card, { flex: 1, marginRight: spacing.small }]}
                onPress={() => navigation.navigate('AppointmentManagement')}
              >
                <Icon name="calendar" size={24} color={colors.primary} />
                <Text style={styles.cardText}>Appointments</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.card, { flex: 1 }]}
                onPress={() => navigation.navigate('ReportVerification')}
              >
                <Icon name="file-text" size={24} color={colors.primary} />
                <Text style={styles.cardText}>Reports</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Settings Section */}
          <View style={commonStyles.sectionContainer}>
            <Text style={[commonStyles.titleText, { marginBottom: spacing.medium }]}>Settings</Text>
            <TouchableOpacity 
              style={commonStyles.listItem}
              onPress={() => navigation.navigate('AvailabilitySettings')}
            >
              <Icon name="clock-o" size={20} color={colors.primary} />
              <Text style={[commonStyles.bodyText, { marginLeft: spacing.small }]}>Availability</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={commonStyles.listItem}
              onPress={() => navigation.navigate('ConsultationSettings')}
            >
              <Icon name="cog" size={20} color={colors.primary} />
              <Text style={[commonStyles.bodyText, { marginLeft: spacing.small }]}>Consultation Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: spacing.medium,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: spacing.small,
    textAlign: 'center',
  },
});

export default DoctorDashboardScreen;