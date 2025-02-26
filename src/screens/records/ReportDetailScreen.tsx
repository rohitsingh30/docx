import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, fontSizes, spacing, commonStyles } from '../../styles/commonStyles';

const ReportDetailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={{padding: spacing.medium}}>
        {/* Header with back button */}
        <View style={[commonStyles.flexRow, {marginBottom: spacing.large, alignItems: 'center'}]}>
          <TouchableOpacity 
            style={[commonStyles.backButton, {padding: spacing.small}]}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={20} color={colors.primary} />
          </TouchableOpacity>
          <Text style={[commonStyles.headerText, {flex: 1, marginLeft: spacing.medium}]}>Hypertension Report</Text>
          <View style={{width: 40}} />
        </View>

        {/* Patient Info */}
        <View style={[commonStyles.sectionContainer, {marginBottom: spacing.large, padding: spacing.medium}]}>
          <View style={commonStyles.flexRow}>
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/6fyF3y0DLyaItEtWXJM-T9OeAvtRk_oFrwowidQFvl0.jpg' }}
              style={{width: 48, height: 48, borderRadius: 24, marginRight: spacing.medium}}
            />
            <View style={{flex: 1}}>
              <Text style={commonStyles.titleText}>John Smith</Text>
              <Text style={[commonStyles.bodyText, {color: colors.lightText, marginBottom: 4}]}>Hypertension, High Risk</Text>
              <Text style={[commonStyles.bodyText, {color: colors.lightText, marginBottom: 4}]}>Reviewed by Dr. John Doe</Text>
              <View style={commonStyles.flexRow}>
                <Icon name="check-circle" size={14} color="#48BB78" style={{marginRight: 4}} />
                <Text style={[commonStyles.bodyText, {color: '#48BB78'}]}>Reviewed</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Report Sections */}
        <View style={[commonStyles.sectionContainer, {marginBottom: spacing.medium, padding: spacing.medium}]}>
          <Text style={[commonStyles.bodyText, {color: colors.primary, fontWeight: '600', marginBottom: spacing.small}]}>Main Diagnosis</Text>
          <Text style={commonStyles.bodyText}>Hypertension, High Risk</Text>
        </View>

        <View style={[commonStyles.sectionContainer, {marginBottom: spacing.medium}]}>
          <Text style={[commonStyles.bodyText, {color: colors.primary, fontWeight: '600', marginBottom: spacing.small}]}>Medication</Text>
          <Text style={commonStyles.bodyText}>Lisinopril 10mg daily</Text>
        </View>

        <View style={[commonStyles.sectionContainer, {marginBottom: spacing.medium}]}>
          <Text style={[commonStyles.bodyText, {color: colors.primary, fontWeight: '600', marginBottom: spacing.small}]}>Test Suggested</Text>
          <Text style={commonStyles.bodyText}>Blood Pressure Monitoring, Blood Test</Text>
        </View>

        {/* Action Buttons */}
        <View style={[commonStyles.flexRow, {marginBottom: spacing.medium, marginTop: spacing.large, justifyContent: 'space-between'}]}>
          <TouchableOpacity 
            style={[commonStyles.primaryButton, {flex: 2, marginRight: spacing.medium}]}
          >
            <Text style={commonStyles.primaryButtonText}>Download Report</Text>
          </TouchableOpacity>
          
          <View style={commonStyles.flexRow}>
            <TouchableOpacity 
              style={[commonStyles.secondaryButton, {marginRight: spacing.medium, padding: spacing.medium}]}
            >
              <Icon name="whatsapp" size={20} color={colors.primary} />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[commonStyles.secondaryButton, {padding: spacing.medium}]}
            >
              <Icon name="ellipsis-h" size={20} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Consult Button */}
        <TouchableOpacity 
          style={commonStyles.primaryButton}
          onPress={() => navigation.navigate('DoctorSearch', undefined)}
        >
          <Text style={commonStyles.primaryButtonText}>Consult a Doctor</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReportDetailScreen;
