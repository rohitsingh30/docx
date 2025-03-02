import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UserStackParamList } from '../../../types/types';
import { AuthContext } from '../../../context/AuthContext';
import { commonStyles, colors } from '../../../styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<UserStackParamList>>();
  const { user, logout } = useContext(AuthContext);

  // Mock data
  const upcomingAppointments = [
    {
      id: '1',
      doctorName: 'Dr. Sarah Wilson',
      date: '15 June 2023',
      time: '10:00 AM',
      specialty: 'Cardiology'
    },
    {
      id: '2',
      doctorName: 'Dr. Michael Chen',
      date: '18 June 2023',
      time: '2:30 PM',
      specialty: 'Pediatrics'
    }
  ];

  const recentReports = [
    {
      id: '1',
      title: 'Hypertension Report',
      date: '10 June 2023',
      isReviewed: true
    },
    {
      id: '2',
      title: 'General Checkup',
      date: '5 June 2023',
      isReviewed: false
    }
  ];

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <View style={commonStyles.dashboardHeader}>
        <View>
          <Text style={commonStyles.dashboardGreeting}>Hello, {user?.name}</Text>
          <Text style={commonStyles.dashboardSubGreeting}>How are you feeling today?</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            style={commonStyles.dashboardProfileImage}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={commonStyles.dashboardContent}>
        {/* Quick Actions */}
        <View style={commonStyles.actionsContainer}>
          <TouchableOpacity 
            style={commonStyles.actionButton}
            onPress={() => navigation.navigate('ChatBot')}
          >
            <View style={[commonStyles.iconContainer, { backgroundColor: colors.primary }]}>
              <Icon name="chat" size={24} color={colors.textInverted} />
            </View>
            <Text style={commonStyles.actionText}>Start a New Check</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={commonStyles.actionButton}
            onPress={() => navigation.navigate('DoctorSearch')}
          >
            <View style={[commonStyles.iconContainer, { backgroundColor: colors.secondary }]}>
              <Icon name="search" size={24} color={colors.textInverted} />
            </View>
            <Text style={commonStyles.actionText}>Find a Doctor</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={commonStyles.actionButton}
            onPress={() => navigation.navigate('MedicalRecords')}
          >
            <View style={[commonStyles.iconContainer, { backgroundColor: colors.success }]}>
              <Icon name="description" size={24} color={colors.textInverted} />
            </View>
            <Text style={commonStyles.actionText}>My Reports</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Appointments */}
        <View style={commonStyles.sectionContainer}>
          <View style={commonStyles.sectionHeader}>
            <Text style={commonStyles.sectionTitle}>Upcoming Appointments</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AppointmentList')}>
              <Text style={commonStyles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map(appointment => (
              <TouchableOpacity 
                key={appointment.id}
                style={commonStyles.appointmentCard}
                onPress={() => navigation.navigate('AppointmentDetail', { appointmentId: appointment.id })}
              >
                <View style={commonStyles.appointmentInfo}>
                  <Text style={commonStyles.doctorName}>{appointment.doctorName}</Text>
                  <Text style={commonStyles.appointmentSpecialty}>{appointment.specialty}</Text>
                  <Text style={commonStyles.appointmentDateTime}>{appointment.date} at {appointment.time}</Text>
                </View>
                <Icon name="chevron-right" size={24} color={colors.primary} />
              </TouchableOpacity>
            ))
          ) : (
            <Text style={commonStyles.noDataText}>No upcoming appointments</Text>
          )}

          <TouchableOpacity 
            style={commonStyles.bookAppointmentButton}
            onPress={() => navigation.navigate('DoctorSearch')}
          >
            <Text style={commonStyles.bookAppointmentText}>Book a Consultation</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Health Reports */}
        <View style={commonStyles.sectionContainer}>
          <View style={commonStyles.sectionHeader}>
            <Text style={commonStyles.sectionTitle}>Recent Health Reports</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MedicalRecords')}>
              <Text style={commonStyles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          {recentReports.length > 0 ? (
            recentReports.map(report => (
              <TouchableOpacity 
                key={report.id}
                style={commonStyles.reportCard}
                onPress={() => navigation.navigate('ReportDetail', { reportId: report.id, isReviewed: report.isReviewed })}
              >
                <View style={commonStyles.reportInfo}>
                  <Text style={commonStyles.reportTitle}>{report.title}</Text>
                  <Text style={commonStyles.reportDate}>Generated on {report.date}</Text>
                </View>
                <View style={[commonStyles.statusBadge, report.isReviewed ? commonStyles.reviewedBadge : commonStyles.pendingBadge]}>
                  <Text style={[commonStyles.statusText, report.isReviewed ? commonStyles.reviewedText : commonStyles.pendingText]}>
                    {report.isReviewed ? 'Reviewed' : 'Pending'}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={commonStyles.noDataText}>No recent reports</Text>
          )}
        </View>

        <TouchableOpacity 
          style={commonStyles.logoutButton}
          onPress={logout}
        >
          <Text style={commonStyles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
