import React, { useState, useEffect } from 'react';
import Header from '../../common/Header';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import { styles } from './styles/AppointmentBookingScreenStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
];

const AppointmentBookingScreen = () => {
  useEffect(() => {
    // Additional logic for handling appointment booking can be added here
  }, []);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  // Get next 7 days
  const getDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
    }
    return dates;
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      navigation.navigate('AppointmentConfirmation', { date: selectedDate, time: selectedTime });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Book Appointment" />

      
      {/* Date Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Date</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateList}>
          {getDates().map((date, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateCard,
                selectedDate === date && styles.selectedDateCard
              ]}
              onPress={() => setSelectedDate(date)}
            >
              <Text style={[
                styles.dateText,
                selectedDate === date && styles.selectedDateText
              ]}>{date}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Time Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Time</Text>
        <View style={styles.timeGrid}>
          {timeSlots.map((time, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeCard,
                selectedTime === time && styles.selectedTimeCard
              ]}
              onPress={() => setSelectedTime(time)}
            >
              <Text style={[
                styles.timeText,
                selectedTime === time && styles.selectedTimeText
              ]}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity 
        style={[
          styles.confirmButton,
          (!selectedDate || !selectedTime) && styles.disabledButton
        ]}
        onPress={handleConfirm}
        disabled={!selectedDate || !selectedTime}
      >
        <Text style={styles.buttonText}>Confirm Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AppointmentBookingScreen;
