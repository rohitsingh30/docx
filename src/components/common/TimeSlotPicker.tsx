import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../styles/commonStyles';

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
    <View style={commonStyles.slotPickerContainer}>
      <Text style={commonStyles.slotPickerTitle}>Select Time Slot</Text>
      <View style={commonStyles.slotGrid}>
        {availableSlots.map((slot) => (
          <TouchableOpacity
            key={slot}
            style={[
              commonStyles.slotButton,
              selected === slot && commonStyles.selectedSlotButton
            ]}
            onPress={() => handleSlotSelect(slot)}
          >
            <Text style={[
              commonStyles.slotText,
              selected === slot && commonStyles.selectedSlotText
            ]}>
              {slot}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TimeSlotPicker;
