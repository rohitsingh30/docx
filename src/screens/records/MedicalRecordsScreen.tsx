import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles/MedicalRecordsScreenStyles';

type Report = {
  id: string;
  title: string;
  date: string;
  status: 'Submitted' | 'In Progress' | 'Reviewed';
  condition?: string;
  details?: string;
};

const mockReports: Report[] = [
  {
    id: '1',
    title: 'Health Check',
    date: '2023-10-01',
    status: 'Reviewed',
    condition: 'Moderate Risk',
    details: 'Regular monitoring recommended'
  },
  {
    id: '2',
    title: 'Follow-up Check',
    date: '2023-09-28',
    status: 'In Progress',
    condition: 'Low Risk',
    details: 'Under observation'
  },
  {
    id: '3',
    title: 'Initial Assessment',
    date: '2023-09-25',
    status: 'Reviewed',
    condition: 'Moderate Risk',
    details: 'Follow-up required'
  }
];

const MedicalRecordsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [searchText, setSearchText] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleReportPress = (report: Report) => {
    if (report.status === 'Reviewed') {
      navigation.navigate('ReportDetail', { 
        reportId: report.id,
        isReviewed: true
      });
    } else {
      setExpandedSection(expandedSection === report.id ? null : report.id);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusTime}>9:41 AM</Text>
        <View style={styles.statusIcons}>
          <Icon name="signal" size={14} color="#4A5568" />
          <Icon name="wifi" size={14} color="#4A5568" style={styles.statusIcon} />
          <Icon name="battery-full" size={14} color="#4A5568" style={styles.statusIcon} />
        </View>
      </View>

      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Icon name="arrow-left" size={20} color="#4299E1" />
          </TouchableOpacity>
          <Text style={styles.title}>Patient Reports</Text>
          <View style={{ width: 20 }} /> {/* For alignment */}
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={16} color="#718096" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search reports"
            placeholderTextColor="#A0AEC0"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Reports List */}
        <View style={styles.reportsList}>
          {mockReports.map(report => (
            <TouchableOpacity
              key={report.id}
              style={[
                styles.reportCard,
                report.status === 'Reviewed' && styles.reviewedCard
              ]}
              onPress={() => handleReportPress(report)}
            >
              <View style={styles.reportHeader}>
                <View style={styles.reportHeaderLeft}>
                  {report.status !== 'Reviewed' && (
                    <Icon 
                      name={expandedSection === report.id ? 'chevron-down' : 'chevron-right'} 
                      size={16} 
                      color="#4299E1"
                      style={styles.chevron}
                    />
                  )}
                  <View>
                    <Text style={styles.reportTitle}>{report.title}</Text>
                    <Text style={styles.reportDate}>Report Date: {report.date}</Text>
                  </View>
                </View>
                <Text style={[
                  styles.reportStatus,
                  report.status === 'In Progress' && styles.statusInProgress,
                  report.status === 'Reviewed' && styles.statusReviewed
                ]}>
                  {report.status}
                </Text>
              </View>

              {expandedSection === report.id && report.status !== 'Reviewed' && (
                <View style={styles.reportDetails}>
                  <Text style={styles.detailLabel}>Condition:</Text>
                  <Text style={styles.detailText}>{report.condition}</Text>
                  <Text style={styles.detailLabel}>Details:</Text>
                  <Text style={styles.detailText}>{report.details}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MedicalRecordsScreen;
