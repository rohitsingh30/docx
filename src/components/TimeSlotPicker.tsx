import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';

interface TimeSlotPickerProps {
  availableSlots: string[];
  onSelectTimeSlot: (slot: string) => void;
  selectedSlot?: string;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  availableSlots,
  onSelectTimeSlot,
  selectedSlot: initialSelectedSlot
}) => {
  const [selected, setSelected] = useState<string | undefined>(initialSelectedSlot);

  const handleSlotSelect = (slot: string) => {
    setSelected(slot);
    onSelectTimeSlot(slot);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Time Slot</Text>
      <View style={styles.grid}>
        {availableSlots.map((slot) => (
          <TouchableOpacity
            key={slot}
            style={[
              styles.slotButton,
              selected === slot && styles.selectedButton
            ]}
            onPress={() => handleSlotSelect(slot)}
          >
            <Text style={[
              styles.slotText,
              selected === slot && styles.selectedText
            ]}>
              {slot}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: theme.spacing.md,
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: '600', // Use a specific string value or number
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  slotButton: {
    width: '48%',
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.md,
    minHeight: 48,
  },
  selectedButton: {
    backgroundColor: theme.colors.primary,
  },
  slotText: {
    color: theme.colors.primary,
    fontSize: theme.typography.fontSize.md,
  },
  selectedText: {
    color: theme.colors.textInverted,
  },
});

export default TimeSlotPicker;
