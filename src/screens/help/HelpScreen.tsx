import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonStyles, colors, spacing } from '../../styles/commonStyles';

const HelpScreen = () => {
  return (
    <View style={commonStyles.container}>
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

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.large,
  },
  helpItem: {
    paddingVertical: spacing.medium,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  helpText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
});

export default HelpScreen;
