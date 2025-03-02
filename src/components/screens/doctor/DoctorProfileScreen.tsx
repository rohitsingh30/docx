import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Doctor, RootStackParamList } from '../../../types/types';
import { colors, spacing, commonStyles } from '../../../styles/commonStyles';

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
    <View style={commonStyles.container}>
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
          style={commonStyles.primaryButton}
          onPress={() => navigation.navigate('AppointmentBooking', {
            doctor: doctor as unknown as Doctor,
          })}
        >
          <Text style={commonStyles.primaryButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileHeader: {
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: spacing.medium,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xxs,
  },
  specialty: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.medium,
  },
  rating: {
    fontSize: 16,
    color: colors.textSecondary,
    marginRight: spacing.medium,
  },
  experience: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  details: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: spacing.large,
  },
});

export default DoctorProfileScreen;
