import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../../types/types';
import { colors, spacing, commonStyles } from '../../../styles/commonStyles';
import { fetchReports } from '../../../services/api'; // Assuming there's a service to fetch reports
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../../types/types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, spacing, commonStyles } from '../../../styles/commonStyles';
import Header from '../../common/Header';

const ReportVerificationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  const [pendingReports, setPendingReports] = useState([]);
  const [verifiedReports, setVerifiedReports] = useState([]);

  useEffect(() => {
    const loadReports = async () => {
      const { pending, verified } = await fetchReports(); // Fetch reports from the API
      setPendingReports(pending);
      setVerifiedReports(verified);
    };

    loadReports();
  }, []);
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="Report Verification" />
      
      <ScrollView style={commonStyles.container}>
        <View style={{ padding: spacing.medium }}>
          {/* Pending Reports */}
          <View style={[commonStyles.sectionContainer, { marginBottom: spacing.large }]}>
            <Text style={[commonStyles.titleText, { marginBottom: spacing.medium }]}>Pending Reports</Text>
            {pendingReports.map((report, index) => (
              <TouchableOpacity 
                key={index}
                style={[commonStyles.listItem, { marginBottom: spacing.small }]}
                onPress={() => navigation.navigate('ReportDetail', { reportId: report.id })} // Navigate to report detail
              >
                <View style={{ flex: 1 }}>
                  <Text style={commonStyles.bodyText}>{report.patientName}</Text>
                  <Text style={commonStyles.smallText}>{report.reportType}</Text>
                </View>
                <Icon name="chevron-right" size={16} color={colors.primary} />
              </TouchableOpacity>
            ))}
              <View style={{ flex: 1 }}>
                <Text style={commonStyles.bodyText}>John Smith</Text>
                <Text style={commonStyles.smallText}>Hypertension Report</Text>
              </View>
              <Icon name="chevron-right" size={16} color={colors.primary} />
            </TouchableOpacity>
          </View>

          {/* Verified Reports */}
          <View style={commonStyles.sectionContainer}>
            <Text style={[commonStyles.titleText, { marginBottom: spacing.medium }]}>Verified Reports</Text>
            {verifiedReports.map((report, index) => (
              <TouchableOpacity 
                key={index}
                style={[commonStyles.listItem, { marginBottom: spacing.small }]}
                onPress={() => navigation.navigate('ReportDetail', { reportId: report.id })} // Navigate to report detail
              >
                <View style={{ flex: 1 }}>
                  <Text style={commonStyles.bodyText}>{report.patientName}</Text>
                  <Text style={commonStyles.smallText}>{report.reportType}</Text>
                </View>
                <Icon name="check-circle" size={16} color="#48BB78" />
              </TouchableOpacity>
            ))}
              <View style={{ flex: 1 }}>
                <Text style={commonStyles.bodyText}>Sarah Johnson</Text>
                <Text style={commonStyles.smallText}>Diabetes Report</Text>
              </View>
              <Icon name="check-circle" size={16} color="#48BB78" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportVerificationScreen;
