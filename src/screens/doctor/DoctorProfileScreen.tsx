import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { styles } from './styles/DoctorProfileScreenStyles';

type DoctorProfileRouteProp = RouteProp<RootStackParamList, 'DoctorProfile'>;

// Mock data - in a real app, this would come from an API
const mockDoctorData = {
  '1': {
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    experience: '10 years',
    rating: 4.8,
    image: 'https://storage.googleapis.com/a1aa/image/doctor1.jpg',
    about: 'Dr. Sarah Wilson is a board-certified cardiologist with extensive experience in treating heart conditions. She specializes in preventive cardiology and heart disease management.'
  },
  '2': {
    name: 'Dr. Michael Chen',
    specialty: 'Pediatrician',
    experience: '8 years',
    rating: 4.7,
    image: 'https://storage.googleapis.com/a1aa/image/doctor2.jpg',
    about: 'Dr. Michael Chen is a dedicated pediatrician who provides comprehensive care for children of all ages. He has a special interest in childhood development and preventive care.'
  },
  '3': {
    name: 'Dr. Emily Brown',
    specialty: 'Dermatologist',
    experience: '12 years',
    rating: 4.9,
    image: 'https://storage.googleapis.com/a1aa/image/doctor3.jpg',
    about: 'Dr. Emily Brown is a highly skilled dermatologist specializing in both medical and cosmetic dermatology. She is known for her expertise in treating complex skin conditions.'
  }
};

const DoctorProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<DoctorProfileRouteProp>();
  const { doctorId } = route.params;
  const doctor = mockDoctorData[doctorId as keyof typeof mockDoctorData];

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: doctor.image }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialty}>{doctor.specialty}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {doctor.rating}</Text>
          <Text style={styles.experience}>{doctor.experience}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.description}>{doctor.about}</Text>
        <TouchableOpacity 
          style={styles.bookButton}
          onPress={() => navigation.navigate('AppointmentBooking')}
        >
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorProfileScreen;
