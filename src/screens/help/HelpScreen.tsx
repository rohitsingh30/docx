import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/HelpScreenStyles';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help & Support</Text>
      <TouchableOpacity style={styles.helpItem}>
        <Text style={styles.helpText}>FAQs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.helpItem}>
        <Text style={styles.helpText}>Contact Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.helpItem}>
        <Text style={styles.helpText}>Terms & Conditions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelpScreen;
