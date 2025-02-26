import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../../components/common/Header';
import BackButton from '../../components/common/BackButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { commonStyles } from '../../styles/commonStyles';

const doctors = [
  { id: '1', name: 'Dr. John Doe', specialty: 'Cardiology' },
  { id: '2', name: 'Dr. Jane Smith', specialty: 'Dermatology' },
  { id: '3', name: 'Dr. Michael Johnson', specialty: 'Pediatrics' },
];

const DoctorSearchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Search for a Doctor" />

      <TextInput
        style={styles.searchInput}
        placeholder="Search doctors..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredDoctors}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.doctorItem}
            onPress={() => navigation.navigate('AppointmentBooking', { doctor: item })}
          >
            <Text style={styles.doctorName}>{item.name}</Text>
            <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1A365D',
    marginLeft: 16,
  },
  searchInput: {
    height: 40,
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  doctorItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#718096',
  },
});

export default DoctorSearchScreen;
