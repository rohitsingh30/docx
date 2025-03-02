import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../../screens/profile/styles/ProfileScreenStyles';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: 'https://example.com/user.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        {/* Add personal information fields here */}
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
