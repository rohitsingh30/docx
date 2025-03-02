import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../../types/NavigationTypes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, spacing, commonStyles } from '../../../styles/commonStyles';
import Header from '../../common/Header';

const AvailabilitySettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  const [isAvailable, setIsAvailable] = useState(true);

  const weekDays = [
    { day: 'Monday', available: true, hours: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday', available: true, hours: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', available: true, hours: '9:00 AM - 5:00 PM' },
    { day: 'Thursday', available: true, hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday', available: true, hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', available: false, hours: 'Not Available' },
    { day: 'Sunday', available: false, hours: 'Not Available' },
  ];

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="Availability Settings" />
      
      <ScrollView style={commonStyles.container}>
        <View style={{ padding: spacing.medium }}>
          {/* Overall Availability Toggle */}
          <View style={[commonStyles.sectionContainer, { marginBottom: spacing.large }]}>
            <View style={[commonStyles.flexRow, commonStyles.spaceBetween]}>
              <View>
                <Text style={commonStyles.titleText}>Available for Appointments</Text>
                <Text style={commonStyles.smallText}>Toggle to show/hide your availability</Text>
              </View>
              <Switch
                value={isAvailable}
                onValueChange={setIsAvailable}
                trackColor={{ false: colors.disabled, true: colors.primary }}
              />
            </View>
          </View>

          {/* Weekly Schedule */}
          <View style={commonStyles.sectionContainer}>
            <Text style={[commonStyles.titleText, { marginBottom: spacing.medium }]}>Weekly Schedule</Text>
            {weekDays.map((day, index) => (
              <TouchableOpacity 
                key={day.day}
                style={[commonStyles.listItem, { marginBottom: index < weekDays.length - 1 ? spacing.small : 0 }]}
                onPress={() => {}}
              >
                <View style={{ flex: 1 }}>
                  <Text style={commonStyles.bodyText}>{day.day}</Text>
                  <Text style={commonStyles.smallText}>{day.hours}</Text>
                </View>
                <Icon name="pencil" size={16} color={colors.primary} />
              </TouchableOpacity>
            ))}
          </View>

          {/* Save Button */}
          <TouchableOpacity 
            style={[commonStyles.primaryButton, { marginTop: spacing.large }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={commonStyles.primaryButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AvailabilitySettingsScreen;