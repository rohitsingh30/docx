import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, ScrollView, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import Button from '../../components/common/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { colors, spacing, commonStyles } from '../../styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const doctors = [
  { 
    id: '1', 
    name: 'Dr. John Doe', 
    specialty: 'Cardiology',
    rating: 4.8,
    experience: '15 years',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg'
  },
  { 
    id: '2', 
    name: 'Dr. Jane Smith', 
    specialty: 'Dermatology',
    rating: 4.9,
    experience: '12 years',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  { 
    id: '3', 
    name: 'Dr. Michael Johnson', 
    specialty: 'Pediatrics',
    rating: 4.7,
    experience: '10 years',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg'
  },
  { 
    id: '4', 
    name: 'Dr. Sarah Williams', 
    specialty: 'Neurology',
    rating: 4.9,
    experience: '14 years',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
];

const DoctorSearchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="Find a Doctor" />

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color={colors.textTertiary} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or specialty"
          placeholderTextColor={colors.textTertiary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Popular Specialties:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Cardiology</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Dermatology</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Pediatrics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Neurology</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <FlatList
        data={filteredDoctors}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.doctorCard}
            onPress={() => navigation.navigate('AppointmentBooking', { doctor: item })}
          >
            <Image 
              source={{ uri: item.avatar }} 
              style={styles.doctorAvatar} 
            />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{item.name}</Text>
              <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
              <View style={styles.doctorMeta}>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={16} color="#f59e0b" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
                <Text style={styles.experienceText}>{item.experience}</Text>
              </View>
            </View>
            <Button 
              title="Book" 
              variant="primary" 
              onPress={() => navigation.navigate('AppointmentBooking', { doctor: item })} 
              style={styles.bookButton}
              textStyle={styles.bookButtonText}
            />
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Icon name="search-off" size={64} color={colors.textTertiary} />
            <Text style={styles.emptyText}>No doctors found</Text>
            <Text style={styles.emptySubtext}>Try adjusting your search</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 8,
    marginHorizontal: spacing.medium,
    marginVertical: spacing.medium,
    paddingHorizontal: spacing.medium,
    ...commonStyles.shadow,
  },
  searchIcon: {
    marginRight: spacing.small,
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: colors.text,
    fontSize: 16,
  },
  filterContainer: {
    marginHorizontal: spacing.medium,
    marginBottom: spacing.medium,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  filterScroll: {
    flexDirection: 'row',
  },
  filterChip: {
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.xs,
    backgroundColor: colors.primaryLight,
    borderRadius: 20,
    marginRight: spacing.small,
  },
  filterChipText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  listContainer: {
    padding: spacing.medium,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: spacing.medium,
    marginBottom: spacing.medium,
    ...commonStyles.shadow,
  },
  doctorAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: spacing.medium,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xxs,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  doctorMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.medium,
  },
  ratingText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: spacing.xxs,
  },
  experienceText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  bookButton: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.small,
    height: 36,
    minHeight: 0,
  },
  bookButtonText: {
    fontSize: 14,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.textSecondary,
    marginTop: spacing.medium,
  },
  emptySubtext: {
    fontSize: 16,
    color: colors.textTertiary,
    marginTop: spacing.xs,
  },
});

export default DoctorSearchScreen;
