import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../../types/types';
import { AuthContext } from '../../../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, spacing, commonStyles } from '../../../styles/commonStyles';
import Header from '../../common/Header';

const DoctorDashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  const { user, logout } = useContext(AuthContext);

  // Mock data for the dashboard
  const pendingReports = 5;
  const todayAppointments = 3;

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title={`Welcome, ${user?.name}`} />
      
      <ScrollView style={commonStyles.container}>
        <View style={{ padding: spacing.medium }}>
          {/* Quick Stats */}
          <View style={[commonStyles.sectionContainer, { marginBottom: spacing.large }]}>
            <Text style={[commonStyles.titleText, { marginBottom: spacing.medium }]}>Today's Overview</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statCard}>
                <Icon name="file-text-o" size={32} color={colors.primary} />
                <Text style={styles.statValue}>{pendingReports}</Text>
                <Text style={styles.statLabel}>Reports to Review</Text>
              </View>
              <View style={styles.statCard}>
                <Icon name="calendar" size={32} color={colors.secondary} />
                <Text style={styles.statValue}>{todayAppointments}</Text>
                <Text style={styles.statLabel}>Today's Appointments</Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View style={[commonStyles.sectionContainer, { marginBottom: spacing.large }]}>
            <Text style={[commonStyles.titleText, { marginBottom: spacing.medium }]}>Quick Actions</Text>
            <View style={styles.actionsGrid}>
              <TouchableOpacity 
                style={styles.actionCard}
                onPress={() => navigation.navigate('ReportVerification')}
              >
                <Icon name="file-text" size={24} color={colors.primary} />
                <Text style={styles.actionText}>Review Reports</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.actionCard}
                onPress={() => navigation.navigate('AppointmentManagement')}
              >
                <Icon name="calendar-check-o" size={24} color={colors.primary} />
                <Text style={styles.actionText}>Manage Appointments</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.actionCard}
                onPress={() => navigation.navigate('ConsultationRequests')}
              >
                <Icon name="inbox" size={24} color={colors.primary} />
                <Text style={styles.actionText}>Consultation Requests</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.actionCard}
                onPress={() => navigation.navigate('AvailabilitySettings')}
              >
                <Icon name="clock-o" size={24} color={colors.primary} />
                <Text style={styles.actionText}>Set Availability</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Recent Activity */}
          <View style={commonStyles.sectionContainer}>
            <Text style={[commonStyles.titleText, { marginBottom: spacing.medium }]}>Recent Activity</Text>
            <View style={styles.timeline}>
              <View style={styles.timelineItem}>
                <View style={styles.timelinePoint} />
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTitle}>Report Verified</Text>
                  <Text style={styles.timelineDesc}>You verified John Smith's blood test report</Text>
                  <Text style={styles.timelineTime}>2 hours ago</Text>
                </View>
              </View>
              <View style={styles.timelineItem}>
                <View style={styles.timelinePoint} />
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTitle}>Appointment Completed</Text>
                  <Text style={styles.timelineDesc}>Consultation with Sarah Johnson</Text>
                  <Text style={styles.timelineTime}>Yesterday</Text>
                </View>
              </View>
            </View>
          </View>
          
          {/* Logout Button */}
          <TouchableOpacity 
            style={[commonStyles.secondaryButton, { marginTop: spacing.large }]}
            onPress={logout}
          >
            <Text style={commonStyles.secondaryButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.medium,
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: spacing.medium,
    minWidth: '40%',
    ...commonStyles.shadow,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginVertical: spacing.small,
  },
  statLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: spacing.medium,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.medium,
    minHeight: 100,
    ...commonStyles.shadow,
  },
  actionText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: spacing.small,
    textAlign: 'center',
  },
  timeline: {
    paddingLeft: spacing.small,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: spacing.large,
  },
  timelinePoint: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
    marginTop: 6,
    marginRight: spacing.small,
  },
  timelineContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: spacing.small,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  timelineDesc: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  timelineTime: {
    fontSize: 12,
    color: colors.textTertiary,
  },
});

export default DoctorDashboardScreen;
