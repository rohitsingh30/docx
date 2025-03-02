import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, spacing, commonStyles } from '../../styles/commonStyles';
import Header from '../../components/common/Header';

const ReportVerificationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="Report Verification" />
      
      <ScrollView style={commonStyles.container}>
        <View style={{ padding: spacing.medium }}>
          {/* Pending Reports */}
          <View style={[commonStyles.sectionContainer, { marginBottom: spacing.large }]}>
            <Text style={[commonStyles.titleText, { marginBottom: spacing.medium }]}>Pending Reports</Text>
            <TouchableOpacity 
              style={[commonStyles.listItem, { marginBottom: spacing.small }]}
              onPress={() => {}}
            >
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
            <TouchableOpacity 
              style={[commonStyles.listItem, { marginBottom: spacing.small }]}
              onPress={() => {}}
            >
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